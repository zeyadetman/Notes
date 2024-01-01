import { render } from "preact-render-to-string"
import { QuartzComponent, QuartzComponentProps } from "./types"
import HeaderConstructor from "./Header"
import BodyConstructor from "./Body"
import { JSResourceToScriptElement, StaticResources } from "../util/resources"
import { FullSlug, RelativeURL, joinSegments } from "../util/path"
import { visit } from "unist-util-visit"
import { Root, Element } from "hast"
import Backlinks from "./Backlinks"

interface RenderComponents {
  head: QuartzComponent
  header: QuartzComponent[]
  beforeBody: QuartzComponent[]
  pageBody: QuartzComponent
  left: QuartzComponent[]
  right: QuartzComponent[]
  footer: QuartzComponent
}

export function pageResources(
  baseDir: FullSlug | RelativeURL,
  staticResources: StaticResources,
): StaticResources {
  const contentIndexPath = joinSegments(baseDir, "static/contentIndex.json")
  const contentIndexScript = `const fetchData = fetch(\`${contentIndexPath}\`).then(data => data.json())`

  return {
    css: [joinSegments(baseDir, "index.css"), ...staticResources.css],
    js: [
      {
        src: joinSegments(baseDir, "prescript.js"),
        loadTime: "beforeDOMReady",
        contentType: "external",
      },
      {
        loadTime: "beforeDOMReady",
        contentType: "inline",
        spaPreserve: true,
        script: contentIndexScript,
      },
      ...staticResources.js,
      {
        src: joinSegments(baseDir, "postscript.js"),
        loadTime: "afterDOMReady",
        moduleType: "module",
        contentType: "external",
      },
    ],
  }
}

export function renderPage(
  slug: FullSlug,
  componentData: QuartzComponentProps,
  components: RenderComponents,
  pageResources: StaticResources,
): string {
  // process transcludes in componentData
  visit(componentData.tree as Root, "element", (node, _index, _parent) => {
    if (node.tagName === "blockquote") {
      const classNames = (node.properties?.className ?? []) as string[]
      if (classNames.includes("transclude")) {
        const inner = node.children[0] as Element
        const blockSlug = inner.properties?.["data-slug"] as FullSlug
        const blockRef = node.properties!.dataBlock as string

        // TODO: avoid this expensive find operation and construct an index ahead of time
        let blockNode = componentData.allFiles.find((f) => f.slug === blockSlug)?.blocks?.[blockRef]
        if (blockNode) {
          if (blockNode.tagName === "li") {
            blockNode = {
              type: "element",
              tagName: "ul",
              children: [blockNode],
            }
          }

          node.children = [
            blockNode,
            {
              type: "element",
              tagName: "a",
              properties: { href: inner.properties?.href, class: ["internal"] },
              children: [{ type: "text", value: `Link to original` }],
            },
          ]
        }
      }
    }
  })

  const {
    head: Head,
    header,
    beforeBody,
    pageBody: Content,
    left,
    right,
    footer: Footer,
  } = components
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  const LeftComponent = (
    <div class="left sidebar">
      {left.map((BodyComponent) => (
        <BodyComponent {...componentData} />
      ))}
    </div>
  )

  const RightComponent = (
    <div class="right sidebar">
      {right.map((BodyComponent) => (
        <BodyComponent {...componentData} />
      ))}
    </div>
  )

  const doc = (
    <html>
      <Head {...componentData} />
      <body data-slug={slug}>
        <div id="quartz-root" class="page">
          <Body {...componentData}>
            {LeftComponent}
            <div class="center">
              <div class="page-header">
                <Header {...componentData}>
                  {header.map((HeaderComponent) => (
                    <HeaderComponent {...componentData} />
                  ))}
                </Header>

                <div class="popover-hint">
                  {beforeBody.map((BodyComponent) => (
                    <BodyComponent {...componentData} />
                  ))}
                </div>
              </div>
              <a
                class="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${componentData.fileData.frontmatter?.title}&url=https://${componentData.cfg.baseUrl}/${componentData.fileData.slug}&via=zeyadetman`}
              >
                Share it on Twitter
              </a>
              <Content {...componentData} />
              <a
                class="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${componentData.fileData.frontmatter?.title}&url=https://${componentData.cfg.baseUrl}/${componentData.fileData.slug}&via=zeyadetman`}
              >
                Share it on Twitter
              </a>
              {Backlinks()(componentData)}
            </div>
            {RightComponent}
            <script src="https://stand-with-palestine.pages.dev/stand-with-palestine-widget.js"></script>
          </Body>
          <Footer {...componentData} />
        </div>
        <script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>
      </body>
      {pageResources.js
        .filter((resource) => resource.loadTime === "afterDOMReady")
        .map((res) => JSResourceToScriptElement(res))}
    </html>
  )

  return "<!DOCTYPE html>\n" + render(doc)
}

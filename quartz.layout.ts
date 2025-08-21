import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/zeyadetman/notes",
      Twitter: "https://twitter.com/zeyadelmarsafy",
      Blog: "https://zeyadnotes.dev",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.PageTitle(),
    Component.Darkmode(),
    Component.Search(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(
      Component.Explorer({
        title: "All Notes",
      }),
    ),
  ],
  right: [Component.Graph(), Component.DesktopOnly(Component.RecentNotes({ limit: 3 }))],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        title: "All Notes",
      }),
    ),
  ],
  right: [
    Component.DesktopOnly(Component.RecentNotes({ limit: 5 })),
    Component.MobileOnly(
      Component.Explorer({
        title: "All Notes",
      }),
    ),
  ],
}

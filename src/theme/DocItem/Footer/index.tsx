import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import { TwitterFollowButton, TwitterShareButton } from "react-twitter-embed";
import useRouteContext from "@docusaurus/useRouteContext";
import useIsBrowser from "@docusaurus/useIsBrowser";

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode();
  const isBrowser = useIsBrowser();
  return (
    <>
      <div style={{ paddingTop: "32px" }}>
        <Giscus
          repo="zeyadetman/Notes"
          repoId="R_kgDOGnIhAA"
          category="Show and tell"
          categoryId="DIC_kwDOGnIhAM4CRliI"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="top"
          theme={colorMode === "dark" ? "dark_dimmed" : "light"}
          lang="en"
          loading="lazy"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "16px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {isBrowser && (
            <TwitterShareButton
              onLoad={function noRefCheck() {}}
              options={{
                buttonHashtag: undefined,
                screenName: undefined,
                size: "large",
                text: "Have a look at this note",
                via: "zeyadetman",
              }}
              url={window.location.href}
            />
          )}
          <TwitterFollowButton
            options={{
              size: "large",
            }}
            onLoad={function noRefCheck() {}}
            screenName="zeyadetman"
          />
        </div>
      </div>
      <Footer {...props} />
    </>
  );
}

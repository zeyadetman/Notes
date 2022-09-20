// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Notes",
  staticDirectories: ["public", "static"],
  tagline: "Zeyad's Notes, about Technology and Life.",
  url: "https://wiki.zeyadetman.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  plugins: ["docusaurus-plugin-sass"],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zeyadetman", // Usually your GitHub org/user name.
  projectName: "Notes", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/zeyadetman/Notes/tree/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/scss/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Notes",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/zeyadetman/Notes",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: "zeyadetman",
        contextualSearch: true,
        appId: process.env.ALGOLIA_APP_ID,
      },
    }),
};

module.exports = config;

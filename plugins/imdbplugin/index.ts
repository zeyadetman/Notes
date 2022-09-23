module.exports = function (context) {
  return {
    name: "docusaurus-plugin-imdb",
    async loadContent() {
      console.log("loadContent");
      return [
        {
          title: "GTA V",
          link: "https://www.youtube.com/watch?v=7g5J4XQjJqg",
        },
        {
          title: "GTA IV",
          link: "https://www.youtube.com/watch?v=7g5J4XQjJqg",
        },
      ];
    },
    async contentLoaded({ content, actions }) {
      console.log("contentLoaded", { content, actions });
      return { content, actions };
    },
  };
};

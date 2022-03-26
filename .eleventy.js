const dateFilter = require('./src/filters/date-filter.js')

module.exports = (config) => {
  config.addPassthroughCopy("src/fonts/");
  config.addPassthroughCopy("src/images/");
  config.addPassthroughCopy('src/styles');

  config.addCollection("articles", (collectionApi) => {
    return collectionApi.getFilteredByGlob("./src/articles/*.md").sort((a, b) => (Number(a.data.data) > Number(b.data.data) ? 1 : -1));
  });

  config.addFilter('dateFilter', dateFilter)

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
      data: "data",
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: [
      'md',
      'njk',
    ],
  };
};

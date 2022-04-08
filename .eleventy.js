const ruDateFilter = require('./src/filters/ru-date-filter.js')

module.exports = (config) => {
  config.addPassthroughCopy("src/fonts/");
  config.addPassthroughCopy("src/images/");
  config.addPassthroughCopy('src/styles');
  config.addPassthroughCopy('src/scripts');

  config.addCollection("articles", (collectionApi) => {
    return collectionApi.getFilteredByGlob("./src/articles/*.md").sort((a, b) => (Number(a.data.data) > Number(b.data.data) ? 1 : -1));
  });

  config.addCollection('tagList', (collectionApi) => {
    const set = new Set();
    for (const item of collectionApi.getAllSorted()) {
        if ('tags' in item.data) {
            const tags = item.data.tags;
            if (typeof tags === 'string') {
                tags = [tags];
            }
            for (const tag of tags) {
                set.add(tag);
            }
        }
    }
    return [...set].sort();
});

  config.addFilter('ruDateFilter', ruDateFilter);

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

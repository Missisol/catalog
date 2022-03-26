module.exports = {
  title: 'Тэги',
  layout: 'base.njk',
  permalink: '/tag/{{ tag | slug }}/',
  pagination: {
    data: 'collections',
    size: 1,
    alias: 'tag',
    filter: ['articles'],
  },
}
module.exports = {
  title: 'Статьи',
  layout: 'base.njk',
  permalink: 'article{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html',
  pagination: {
    data: 'collections.articles',
    size: 2,
  },
  paginationPrevText: 'Prev',
  paginationNextText: 'Next',

  eleventyComputed: {

  },
}

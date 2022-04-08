module.exports = {
  title: 'Статьи',
  layout: 'base.njk',
  permalink: 'articles{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html',
  pagination: {
    data: 'collections.articles',
    size: 4,
  },
  paginationPrevText: 'Prev',
  paginationNextText: 'Next',
}

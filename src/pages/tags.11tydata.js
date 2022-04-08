module.exports = {
  renderData: {
    title: 'Статьи с тегом «{{ tag }}»',
  },
  layout: 'base.njk',
  permalink: '/tags/{{ tag | slugify }}/',
  pagination: {
    data: 'collections.tagList',
    size: 1,
    alias: 'tag',
  },
}

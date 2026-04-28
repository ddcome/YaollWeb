import ScrollLoadMore from './ScrollLoadMore.vue'
import GlobalLoading from './GlobalLoading.vue'
import ContentCard from './ContentCard.vue'

const install = (app) => {
  app.component('ScrollLoadMore', ScrollLoadMore)
  app.component('GlobalLoading', GlobalLoading)
  app.component('ContentCard', ContentCard)
}

export default {
  install
}

// 导出组件，方便按需引入
export { ScrollLoadMore, GlobalLoading, ContentCard }
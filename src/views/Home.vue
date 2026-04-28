<template>
  <div class="home-page">
    <Header theme="blue" site-name="" />

    <main class="main-content">
      <div class="container">
        <div class="layout-grid">
          <!-- 左侧个人信息卡片组件 -->
          <ProfileCard />

          <!-- 右侧内容网格 -->
          <section class="content-section">
            <ScrollLoadMore
              :hasMore="hasMore"
              :loading="loadingMore"
              @load-more="handleLoadMore"
            >
              <div class="cards-grid">
                <router-link
                  v-for="article in articles"
                  :key="article.id"
                  :to="article.type === 'video' ? `/videos/${article.id}` : `/articles/${article.id}`"
                  class="content-card"
                >
                  <div class="card-image">
                    <img :src="article.coverImage" alt="缩略图" />
                    <div v-if="article.type === 'video'" class="video-badge">
                      <i class="fas fa-play-circle"></i>
                      {{ article.duration }}
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="card-header-row">
                      <h3 class="card-title">{{ article.title }}</h3>
                      <span :class="['type-tag', `type-${article.type}`]">
                        <i v-if="article.type === 'rich-text'" class="fas fa-file-alt"></i>
                        <i v-else-if="article.type === 'markdown'" class="fab fa-markdown"></i>
                        <i v-else-if="article.type === 'video'" class="fas fa-video"></i>
                        {{ getTypeLabel(article.type) }}
                      </span>
                    </div>
                    <p class="card-desc">{{ article.description }}</p>
                    <div class="card-meta">
                      <span><i class="fas fa-eye"></i> {{ article.readCount }} 阅读</span>
                      <span>{{ article.publishDate }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </ScrollLoadMore>
          </section>
        </div>
      </div>
    </main>

    <Footer />
    
    <!-- 回到顶部按钮 -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProfileCard from '../components/ProfileCard.vue'
import ScrollLoadMore from '../components/ScrollLoadMore.vue'
import ScrollToTop from '../components/ScrollToTop.vue'
import { getHomeArticles } from '../mock/data'

const articles = ref([])
const hasMore = ref(true)
const loadingMore = ref(false)
const pageSize = 6
const currentPage = ref(1)

// 初始化加载数据
const initData = () => {
  const allArticles = getHomeArticles()
  articles.value = allArticles.slice(0, pageSize)
  currentPage.value = 1
  hasMore.value = articles.value.length < allArticles.length
}

// 加载更多数据
const handleLoadMore = () => {
  if (loadingMore.value || !hasMore.value) return
  
  loadingMore.value = true
  
  // 模拟网络请求延迟
  setTimeout(() => {
    const allArticles = getHomeArticles()
    const nextPage = currentPage.value + 1
    const startIndex = (nextPage - 1) * pageSize
    const newArticles = allArticles.slice(startIndex, startIndex + pageSize)
    
    articles.value = [...articles.value, ...newArticles]
    currentPage.value = nextPage
    hasMore.value = articles.value.length < allArticles.length
    loadingMore.value = false
  }, 1000)
}

const getTypeLabel = (type) => {
  const labels = {
    'rich-text': '富文本',
    'markdown': 'MD',
    'video': '视频'
  }
  return labels[type] || type
}

onMounted(() => {
  initData()
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-gray);
}

.main-content {
  flex: 1;
  padding-top: 24px;
  padding-bottom: 48px;
}

.layout-grid {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 24px;
  align-items: start;
}

/* 内容区域 */
.content-section {
  min-width: 0;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.content-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.content-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.card-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--bg-gray);
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.content-card:hover .card-image img {
  transform: scale(1.05);
}

.video-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 12px;
  font-size: 11.5px;
  font-weight: 500;
}

.video-badge i {
  font-size: 12px;
}

.card-body {
  padding: 16px;
}

.card-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

/* 内容类型Tag */
.type-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}

.type-tag i {
  font-size: 10px;
}

.type-rich-text {
  background: rgba(74, 123, 247, 0.08);
  color: #6b94e8;
}

.type-markdown {
  background: rgba(107, 114, 128, 0.08);
  color: #8c95a5;
}

.type-video {
  background: rgba(239, 68, 68, 0.08);
  color: #ef8f8f;
}

.card-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--text-light);
}

.card-meta span:first-child {
  display: flex;
  align-items: center;
  gap: 4px;
}

.card-meta i {
  color: var(--primary-blue);
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
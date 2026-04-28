<template>
  <div class="articles-page">
    <Header theme="blue" site-name="" />

    <main class="main-content">
      <div class="container">
        <!-- 页面标题 -->
        <h1 class="page-title">最新文章</h1>

        <!-- 筛选区 -->
        <div class="filter-section">
          <div class="filter-group">
            <select class="filter-select">
              <option>全部分类</option>
              <option>前端开发</option>
              <option>后端技术</option>
              <option>人工智能</option>
            </select>
            <select class="filter-select">
              <option>全部标签</option>
              <option>JavaScript</option>
              <option>React</option>
              <option>Vue.js</option>
            </select>
            <select class="filter-select">
              <option>最新发布</option>
              <option>最多阅读</option>
              <option>最多点赞</option>
            </select>
          </div>
        </div>

        <!-- 文章卡片网格 -->
        <ScrollLoadMore
          :hasMore="hasMore"
          :loading="loadingMore"
          @load-more="handleLoadMore"
        >
          <div class="articles-grid">
            <article 
              v-for="article in articles" 
              :key="article.id"
              class="article-card"
            >
              <div class="article-image">
                <img :src="article.coverImage" alt="文章缩略图" />
              </div>
              <div class="article-content">
                <h2 class="article-title">{{ article.title }}</h2>
                <p class="article-excerpt">{{ article.description }}</p>
                <div class="article-meta">
                  <div class="author-info">
                    <img :src="article.author.avatar" alt="作者头像" />
                    <span class="author-name">{{ article.author.name }}</span>
                  </div>
                  <div class="meta-stats">
                    <span><i class="fas fa-eye"></i> {{ article.readCount }}</span>
                    <span><i class="fas fa-heart"></i> 128</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </ScrollLoadMore>
      </div>
    </main>

    <Footer />
    <AIDialog />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ScrollLoadMore from '../components/ScrollLoadMore.vue'
import AIDialog from '../components/AIDialog.vue'
import { getHomeArticles } from '../mock/data'

const articles = ref([])
const hasMore = ref(true)
const loadingMore = ref(false)
const pageSize = 20
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

onMounted(() => {
  initData()
})
</script>

<style scoped>
.articles-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-gray);
}

.main-content {
  flex: 1;
  padding: 40px 0 60px;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 28px;
}

/* 筛选区 */
.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: 32px;
}

.filter-group {
  display: flex;
  gap: 16px;
  flex: 1;
}

.filter-select {
  height: 38px;
  min-width: 140px;
  padding: 0 36px 0 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
  color: var(--text-primary);
  background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E") no-repeat right 12px center;
  cursor: pointer;
  appearance: none;
  outline: none;
  transition: all 0.2s;
}

.filter-select:hover,
.filter-select:focus {
  border-color: var(--primary-blue);
}

.search-input-wrapper {
  position: relative;
  width: 280px;
}

.search-input-wrapper i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  font-size: 14px;
}

.filter-search {
  width: 100%;
  height: 38px;
  padding: 0 14px 0 36px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: all 0.2s;
}

.filter-search:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(74, 123, 247, 0.1);
}

/* 文章网格 */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.article-card {
  display: flex;
  gap: 20px;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.article-image {
  width: 240px;
  flex-shrink: 0;
  overflow: hidden;
  background: var(--bg-gray);
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-content {
  flex: 1;
  padding: 24px 24px 24px 0;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-excerpt {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: auto;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--bg-gray);
}

.author-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-info img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}

.meta-stats {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: var(--text-light);
}

.meta-stats span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.meta-stats i {
  font-size: 12px;
}

@media (max-width: 992px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }

  .article-card {
    flex-direction: column;
  }

  .article-image {
    width: 100%;
    height: 200px;
  }

  .article-content {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .filter-section {
    flex-direction: column;
  }

  .filter-group {
    flex-wrap: wrap;
  }

  .search-input-wrapper {
    width: 100%;
  }
}
</style>
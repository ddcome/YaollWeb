<template>
  <div class="article-detail-page">
    <Header theme="white" site-name="" :showUserAvatar="true" />

    <main class="main-content" v-if="article">
      <div class="container">
        <div class="article-layout">
          <!-- 左侧文章内容 -->
          <article class="article-main">
            <!-- 文章头部 -->
            <header class="article-header">
              <h1 class="article-title">{{ article.title }}</h1>

              <div class="article-meta-info">
                <div class="author-section">
                  <img :src="article.author.avatar" alt="作者头像" class="author-avatar" />
                  <span class="author-name">{{ article.author.name }}</span>
                </div>
                <div class="meta-items">
                  <span><i class="far fa-calendar"></i> {{ article.publishDate }}</span>
                  <span><i class="far fa-eye"></i> {{ article.readCount }} 阅读</span>
                  <span :class="['type-badge', `type-${article.type}`]">
                    <i v-if="article.type === 'rich-text'" class="fas fa-file-alt"></i>
                    <i v-else-if="article.type === 'markdown'" class="fab fa-markdown"></i>
                    {{ getTypeLabel(article.type) }}
                  </span>
                </div>
              </div>

              <div class="article-tags">
                <span v-for="(tag, index) in article.tags" :key="index" class="tag">{{ tag }}</span>
              </div>
            </header>

            <!-- 文章封面图 -->
            <div class="article-cover">
              <img :src="article.coverImage" alt="文章封面" />
            </div>

            <!-- 文章正文 -->
            <div class="article-body" :class="{ 'markdown-body': article.type === 'markdown' }">
              <!-- 富文本渲染 -->
              <div v-if="article.type === 'rich-text' && article.content" v-html="renderRichText(article.content)"></div>

              <!-- Markdown渲染 -->
              <div v-else-if="article.type === 'markdown' && article.content" v-html="renderMarkdown(article.content)"></div>
            </div>

            <!-- 文章底部互动 -->
            <div class="article-actions">
              <div class="action-buttons">
                <button class="action-btn like-btn"><i class="far fa-thumbs-up"></i> 点赞 (249)</button>
                <button class="action-btn"><i class="far fa-bookmark"></i> 收藏</button>
                <button class="action-btn"><i class="fas fa-share-alt"></i> 分享</button>
              </div>
            </div>

            <!-- 评论输入区 -->
            <div class="comment-input-section">
              <div class="user-avatar-small">
                <img src="https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg" alt="用户头像" />
              </div>
              <div class="input-wrapper">
                <textarea placeholder="写下你的评论..." rows="3"></textarea>
                <button class="submit-btn">发布评论</button>
              </div>
            </div>

            <!-- 评论区 -->
            <section class="comments-section">
              <h3 class="comments-title">评论 (21)</h3>

              <div class="comment-list">
                <div class="comment-item">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg" alt="评论者头像" class="commenter-avatar" />
                  <div class="comment-content">
                    <div class="comment-header">
                      <span class="commenter-name">张明</span>
                      <span class="comment-time">2026-03-16</span>
                    </div>
                    <p class="comment-text">非常详细的分析！对React和Vue的对比很到位，特别是关于学习曲线和适用场景的部分，对我选择技术栈很有帮助。</p>
                    <button class="reply-btn">回复</button>
                  </div>
                </div>

                <div class="comment-item">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/449.jpg" alt="评论者头像" class="commenter-avatar" />
                  <div class="comment-content">
                    <div class="comment-header">
                      <span class="commenter-name">李华</span>
                      <span class="comment-time">2026-03-17</span>
                    </div>
                    <p class="comment-text">作为Vue开发者，这篇文章让我对其他框架有了更深入的理解。确实，框架的选择应该基于项目需求而不是个人偏好。</p>
                    <button class="reply-btn">回复</button>
                  </div>
                </div>

                <div class="comment-item">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/2632.jpg" alt="评论者头像" class="commenter-avatar" />
                  <div class="comment-content">
                    <div class="comment-header">
                      <span class="commenter-name">王芳</span>
                      <span class="comment-time">2026-03-18</span>
                    </div>
                    <p class="comment-text">请问作者，对于初学者来说，您推荐从哪个框架开始学习？考虑到就业市场需求的话。</p>
                    <button class="reply-btn">回复</button>
                  </div>
                </div>
              </div>
            </section>

            <!-- 相关文章 -->
            <section class="related-articles">
              <h3 class="related-title">相关推荐</h3>
              <div class="related-grid">
                <router-link to="/articles/1" class="related-card">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png" alt="相关文章" />
                  <div class="related-info">
                    <h4>2023年Web开发趋势：从微前端到边缘计算</h4>
                    <p class="related-meta"><i class="fas fa-eye"></i> 2.4k 阅读</p>
                  </div>
                </router-link>
                <router-link to="/articles/2" class="related-card">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg" alt="相关文章" />
                  <div class="related-info">
                    <h4>JavaScript性能优化：提升Web应用加载速度的10个技巧</h4>
                    <p class="related-meta"><i class="fas fa-eye"></i> 3.1k 阅读</p>
                  </div>
                </router-link>
                <router-link to="/articles/3" class="related-card">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png" alt="相关文章" />
                  <div class="related-info">
                    <h4>构建无障碍网站：让每个人都能访问你的内容</h4>
                    <p class="related-meta"><i class="fas fa-eye"></i> 1.8k 阅读</p>
                  </div>
                </router-link>
                <router-link to="/articles/4" class="related-card">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/974.jpg" alt="相关文章" />
                  <div class="related-info">
                    <h4>CSS Grid完全指南：创建复杂布局的最佳实践</h4>
                    <p class="related-meta"><i class="fas fa-eye"></i> 4.2k 阅读</p>
                  </div>
                </router-link>
              </div>
            </section>
          </article>

          <!-- 右侧目录导航 -->
          <aside class="sidebar">
            <TableOfContents
              :content="article.content"
              :tocData="article.toc"
            />
          </aside>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import TableOfContents from '../components/TableOfContents.vue'
import { getArticleById } from '../mock/data'

const route = useRoute()
const article = ref(null)

const getTypeLabel = (type) => {
  const labels = {
    'rich-text': '富文本',
    'markdown': 'MD',
    'video': '视频'
  }
  return labels[type] || type
}

const renderRichText = (content) => {
  return content
}

const renderMarkdown = (content) => {
  let html = content

  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
  html = html.replace(/\*(.*)\*/gim, '<em>$1</em>')
  html = html.replace(/`([^`]+)`/gim, '<code>$1</code>')
  html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
  html = html.replace(/\n/gim, '<br>')

  return html
}

onMounted(() => {
  const id = route.params.id
  article.value = getArticleById(id)
})
</script>

<style scoped>
.article-detail-page {
  min-height: 100vh;
  background-color: white;
}

.main-content {
  padding: 40px 0 60px;
}

.article-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 40px;
}

.article-main {
  max-width: 100%;
}

.article-header {
  margin-bottom: 28px;
}

.article-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  margin-bottom: 20px;
}

.article-meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.author-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.meta-items {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: var(--text-light);
  align-items: center;
}

.meta-items span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-items i {
  color: var(--primary-blue);
}

.type-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
}

.type-rich-text {
  background: rgba(74, 123, 247, 0.08);
  color: #6b94e8;
}

.type-markdown {
  background: rgba(107, 114, 128, 0.08);
  color: #8c95a5;
}

.article-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 6px 14px;
  background: var(--primary-blue-light);
  color: var(--primary-blue);
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
}

.article-cover {
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 36px;
  box-shadow: var(--shadow-sm);
}

.article-cover img {
  width: 100%;
  height: auto;
  display: block;
}

.article-body {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
}

.article-body :deep(h2) {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 36px 0 20px;
  padding-top: 12px;
  border-bottom: 2px solid var(--primary-blue-light);
  padding-bottom: 8px;
}

.article-body :deep(h3) {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 28px 0 16px;
}

.article-body :deep(p) {
  margin-bottom: 20px;
  text-align: justify;
}

.article-body :deep(pre) {
  background: #1e293b;
  color: #e2e8f0;
  padding: 24px;
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: 24px 0;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.article-body :deep(code) {
  font-family: 'Monaco', 'Menlo', monospace;
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  color: #e11d48;
}

.article-body :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}

.article-body :deep(blockquote) {
  border-left: 4px solid var(--primary-blue);
  padding-left: 20px;
  margin: 24px 0;
  color: var(--text-secondary);
  font-style: italic;
}

.article-body :deep(ul),
.article-body :deep(ol) {
  margin: 20px 0;
  padding-left: 30px;
}

.article-body :deep(li) {
  margin-bottom: 10px;
}

.article-body :deep(strong) {
  color: var(--text-primary);
  font-weight: 600;
}

.article-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
}

.article-body :deep(th),
.article-body :deep(td) {
  border: 1px solid var(--border-color);
  padding: 12px;
  text-align: left;
}

.article-body :deep(th) {
  background: var(--bg-gray);
  font-weight: 600;
  color: var(--text-primary);
}

.markdown-body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.article-actions {
  padding: 24px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  margin: 36px 0;
}

.action-buttons {
  display: flex;
  gap: 16px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid var(--border-color);
  background: white;
  border-radius: 6px;
  font-size: 14px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.like-btn:hover {
  background: var(--primary-blue-light);
}

.comment-input-section {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: var(--bg-gray);
  border-radius: var(--radius-lg);
  margin-bottom: 36px;
}

.user-avatar-small {
  flex-shrink: 0;
}

.user-avatar-small img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.input-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-wrapper textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  resize: vertical;
  font-size: 14px;
  outline: none;
  transition: all 0.2s;
  font-family: inherit;
}

.input-wrapper textarea:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(74, 123, 247, 0.1);
}

.submit-btn {
  align-self: flex-end;
  padding: 10px 24px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-btn:hover {
  background: var(--primary-blue-hover);
}

.comments-section {
  margin-bottom: 48px;
}

.comments-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.comment-item {
  display: flex;
  gap: 16px;
}

.commenter-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.commenter-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.comment-time {
  font-size: 13px;
  color: var(--text-light);
}

.comment-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.reply-btn {
  padding: 4px 12px;
  background: transparent;
  border: none;
  color: var(--primary-blue);
  font-size: 13px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.reply-btn:hover {
  opacity: 0.7;
}

.related-articles {
  padding-top: 36px;
  border-top: 1px solid var(--border-color);
}

.related-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.related-card {
  background: white;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.related-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.related-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.related-info {
  padding: 12px;
}

.related-info h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-meta {
  font-size: 12px;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 4px;
}

.sidebar {
  position: sticky;
  top: 96px;
  height: fit-content;
}

@media (max-width: 1200px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .article-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
  }

  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .article-title {
    font-size: 24px;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }

  .article-meta-info {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
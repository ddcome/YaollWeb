<template>
  <div class="video-detail-page">
    <Header theme="white" site-name="" :showUserAvatar="true" />

    <main class="main-content" v-if="video">
      <div class="container">
        <!-- B站视频播放器 -->
        <div class="video-player-wrapper">
          <div class="video-player">
            <iframe
              :src="bilibiliEmbedUrl"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>

        <div class="video-layout">
          <!-- 左侧主要内容 -->
          <div class="video-main">
            <!-- 视频信息 -->
            <section class="video-info-section">
              <h1 class="video-title">{{ video.title }}</h1>

              <div class="video-meta-row">
                <div class="channel-info">
                  <img :src="video.author.avatar" alt="频道头像" class="channel-avatar" />
                  <div class="channel-details">
                    <h3 class="channel-name">{{ video.author.name }}</h3>
                    <p class="channel-desc">专注技术分享与知识传播</p>
                  </div>
                </div>

                <button class="subscribe-btn">订阅</button>
              </div>

              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-value">{{ video.readCount }}</div>
                  <div class="stat-label">观看</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">326</div>
                  <div class="stat-label">点赞</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">{{ video.duration }}</div>
                  <div class="stat-label">时长</div>
                </div>
              </div>

              <div class="action-buttons">
                <button class="action-btn like"><i class="far fa-thumbs-up"></i> 点赞 (2.4k)</button>
                <button class="action-btn"><i class="far fa-share-square"></i> 分享</button>
                <button class="action-btn"><i class="far fa-bookmark"></i> 收藏</button>
                <button class="action-btn"><i class="far fa-flag"></i> 举报</button>
              </div>
            </section>

            <!-- 视频简介 -->
            <section class="description-section">
              <h2 class="section-title">视频简介</h2>
              <p class="description-text">
                {{ video.description }}
              </p>
            </section>

            <!-- 相关视频列表 -->
            <section class="related-videos-section">
              <h2 class="section-title">相关视频</h2>
              <div class="related-videos-list">
                <router-link
                  v-for="relatedVideo in relatedVideos"
                  :key="relatedVideo.id"
                  :to="`/videos/${relatedVideo.id}`"
                  class="related-video-item"
                >
                  <div class="related-thumbnail">
                    <img :src="relatedVideo.coverImage" alt="相关视频" />
                    <span class="duration">{{ relatedVideo.duration }}</span>
                  </div>
                  <div class="related-video-info">
                    <h4>{{ relatedVideo.title }}</h4>
                    <p class="meta-line">{{ relatedVideo.author.name }} · {{ relatedVideo.readCount }}观看</p>
                  </div>
                </router-link>
              </div>
            </section>

            <!-- 评论区 -->
            <section class="comments-section">
              <h2 class="section-title">评论 (128)</h2>

              <div class="comment-input-box">
                <textarea placeholder="写下你的评论..."></textarea>
                <div class="input-actions">
                  <label class="emoji-btn"><i class="far fa-smile"></i></label>
                  <button class="submit-comment-btn">发布评论</button>
                </div>
              </div>

              <div class="comment-sort">
                <button class="sort-btn active">最热</button>
                <button class="sort-btn">最新</button>
              </div>

              <div class="comments-list">
                <div class="comment-card">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg" alt="用户头像" class="user-avatar" />
                  <div class="comment-body">
                    <div class="comment-header-row">
                      <span class="username">科技探索者</span>
                      <span class="comment-time">3天前</span>
                    </div>
                    <p class="comment-content">这个视频制作得非常专业，内容详实且易于理解！讲解深入浅出，很有价值。</p>
                    <div class="comment-actions">
                      <button><i class="far fa-thumbs-up"></i> 156</button>
                      <button><i class="far fa-thumbs-down"></i></button>
                      <button>回复</button>
                    </div>
                  </div>
                </div>

                <div class="comment-card">
                  <img src="https://assets.mockplus.cn/ai/newImages/pexels/2632.jpg" alt="用户头像" class="user-avatar" />
                  <div class="comment-body">
                    <div class="comment-header-row">
                      <span class="username">数据科学家小李</span>
                      <span class="comment-time">5天前</span>
                    </div>
                    <p class="comment-content">请问作者能否出一期关于强化学习的专题视频？很需要系统的入门指导。</p>
                    <div class="comment-actions">
                      <button><i class="far fa-thumbs-up"></i> 89</button>
                      <button><i class="far fa-thumbs-down"></i></button>
                      <button>回复</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- 右侧推荐视频 -->
          <aside class="recommend-sidebar">
            <h3 class="sidebar-title">相关视频推荐</h3>
            <div class="recommend-list">
              <router-link
                v-for="recommend in recommendVideos"
                :key="recommend.id"
                :to="`/videos/${recommend.id}`"
                class="recommend-item"
              >
                <div class="recommend-thumb">
                  <img :src="recommend.coverImage" alt="推荐视频" />
                  <span class="duration-badge">{{ recommend.duration }}</span>
                </div>
                <div class="recommend-info">
                  <h4>{{ recommend.title }}</h4>
                  <p class="recommend-meta">{{ recommend.author.name }} · {{ recommend.readCount }}观看</p>
                </div>
              </router-link>
            </div>
          </aside>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { getArticleById, mockArticles } from '../mock/data'

const route = useRoute()
const video = ref(null)

const bilibiliEmbedUrl = computed(() => {
  if (!video.value || !video.value.videoUrl) return ''
  
  const bvMatch = video.value.videoUrl.match(/BV\w+/)
  if (bvMatch) {
    return `https://player.bilibili.com/player.html?bvid=${bvMatch[0]}&high_quality=1&autoplay=0`
  }
  
  return video.value.videoUrl
})

const relatedVideos = computed(() => {
  if (!video.value) return []
  return mockArticles
    .filter(item => item.type === 'video' && item.id !== video.value.id)
    .slice(0, 2)
})

const recommendVideos = computed(() => {
  if (!video.value) return []
  return mockArticles
    .filter(item => item.type === 'video' && item.id !== video.value.id)
    .slice(0, 5)
})

onMounted(() => {
  const id = route.params.id
  video.value = getArticleById(id)
})
</script>

<style scoped>
.video-detail-page {
  min-height: 100vh;
  background-color: var(--bg-gray);
}

.main-content {
  padding-top: 0;
}

/* 视频播放器 */
.video-player-wrapper {
  width: 100%;
  background: #000;
}

.video-player {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  overflow: hidden;
}

.video-player iframe {
  width: 100%;
  height: 100%;
  display: block;
}

/* 布局 */
.video-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;
  padding-top: 24px;
}

.video-main {
  min-width: 0;
}

/* 视频信息区 */
.video-info-section {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

.video-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 20px;
}

.video-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 20px;
}

.channel-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.channel-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.channel-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.channel-desc {
  font-size: 13px;
  color: var(--text-light);
}

.subscribe-btn {
  padding: 10px 24px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.subscribe-btn:hover {
  background: var(--primary-blue-hover);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 20px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 13px;
  color: var(--text-light);
}

.action-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
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
  background: var(--primary-blue-light);
}

/* 简介 */
.description-section {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.description-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* 相关视频 */
.related-videos-section {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

.related-videos-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.related-video-item {
  display: flex;
  gap: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
  text-decoration: none;
  color: inherit;
}

.related-video-item:hover {
  opacity: 0.8;
}

.related-thumbnail {
  position: relative;
  width: 160px;
  flex-shrink: 0;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-gray);
}

.related-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.duration {
  position: absolute;
  bottom: 6px;
  right: 6px;
  padding: 2px 6px;
  background: rgba(0,0,0,0.8);
  color: white;
  font-size: 11px;
  font-weight: 600;
  border-radius: 3px;
}

.related-video-info h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.meta-line {
  font-size: 13px;
  color: var(--text-light);
}

/* 评论区 */
.comments-section {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

.comment-input-box {
  margin-bottom: 24px;
}

.comment-input-box textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  resize: vertical;
  min-height: 80px;
  font-size: 14px;
  outline: none;
  font-family: inherit;
  transition: all 0.2s;
}

.comment-input-box textarea:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(74, 123, 247, 0.1);
}

.input-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.emoji-btn {
  cursor: pointer;
  font-size: 20px;
  color: var(--text-light);
  transition: color 0.2s;
}

.emoji-btn:hover {
  color: var(--primary-blue);
}

.submit-comment-btn {
  padding: 8px 20px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-comment-btn:hover {
  background: var(--primary-blue-hover);
}

.comment-sort {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.sort-btn {
  padding: 6px 16px;
  border: none;
  background: var(--bg-gray);
  border-radius: 6px;
  font-size: 13px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.sort-btn.active {
  background: var(--primary-blue);
  color: white;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comment-card {
  display: flex;
  gap: 14px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.comment-body {
  flex: 1;
}

.comment-header-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.username {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.comment-time {
  font-size: 13px;
  color: var(--text-light);
}

.comment-content {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.comment-actions {
  display: flex;
  gap: 16px;
}

.comment-actions button {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
}

.comment-actions button:hover {
  color: var(--primary-blue);
}

/* 右侧推荐栏 */
.recommend-sidebar {
  position: sticky;
  top: 96px;
  height: fit-content;
}

.sidebar-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.recommend-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.recommend-item {
  display: flex;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  text-decoration: none;
  color: inherit;
  background: white;
  border-radius: var(--radius-md);
  padding: 8px;
  box-shadow: var(--shadow-sm);
}

.recommend-item:hover {
  opacity: 0.9;
  transform: translateX(4px);
}

.recommend-thumb {
  position: relative;
  width: 140px;
  flex-shrink: 0;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  overflow: hidden;
  background: var(--bg-gray);
}

.recommend-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.duration-badge {
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 2px 5px;
  background: rgba(0,0,0,0.8);
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 3px;
}

.recommend-info {
  flex: 1;
  min-width: 0;
}

.recommend-info h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.recommend-meta {
  font-size: 12px;
  color: var(--text-light);
}

@media (max-width: 1200px) {
  .video-layout {
    grid-template-columns: 1fr;
  }

  .recommend-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .video-title {
    font-size: 18px;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .related-thumbnail {
    width: 120px;
  }

  .recommend-thumb {
    width: 110px;
  }
}
</style>
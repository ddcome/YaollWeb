<template>
  <router-link
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
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

const getTypeLabel = (type) => {
  const labels = {
    'rich-text': '富文本',
    'markdown': 'MD',
    'video': '视频'
  }
  return labels[type] || type
}
</script>

<style scoped>
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
</style>

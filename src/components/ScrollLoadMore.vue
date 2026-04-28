<template>
  <div class="scroll-load-more" ref="containerRef">
    <slot></slot>
    
    <!-- 加载中状态 -->
    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <span>加载中...</span>
    </div>
    
    <!-- 无更多数据状态 -->
    <div v-else-if="!hasMore && !loading" class="no-more-state">
      <span>没有更多内容了</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  // 是否有更多数据
  hasMore: {
    type: Boolean,
    default: true
  },
  // 是否正在加载
  loading: {
    type: Boolean,
    default: false
  },
  // 滚动容器类型：'window' 或 'container'
  scrollTarget: {
    type: String,
    default: 'window'
  },
  // 触底阈值（px）
  threshold: {
    type: Number,
    default: 100
  },
  // 每次加载的条数（可选）
  pageSize: {
    type: Number,
    default: 6
  }
})

const emit = defineEmits(['load-more'])

const containerRef = ref(null)

const handleScroll = () => {
  if (props.loading || !props.hasMore) return
  
  let scrollTop, clientHeight, scrollHeight
  
  if (props.scrollTarget === 'window') {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    clientHeight = window.innerHeight
    scrollHeight = document.documentElement.scrollHeight
  } else {
    const container = containerRef.value
    if (!container) return
    scrollTop = container.scrollTop
    clientHeight = container.clientHeight
    scrollHeight = container.scrollHeight
  }
  
  if (scrollTop + clientHeight >= scrollHeight - props.threshold) {
    emit('load-more')
  }
}

onMounted(() => {
  if (props.scrollTarget === 'window') {
    window.addEventListener('scroll', handleScroll, { passive: true })
  } else if (containerRef.value) {
    containerRef.value.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  if (props.scrollTarget === 'window') {
    window.removeEventListener('scroll', handleScroll)
  } else if (containerRef.value) {
    containerRef.value.removeEventListener('scroll', handleScroll)
  }
})

// 监听hasMore变化，重置状态
watch(() => props.hasMore, (newValue) => {
  if (newValue) {
    // 有更多数据时，重新监听滚动
    if (props.scrollTarget === 'window') {
      window.removeEventListener('scroll', handleScroll)
      window.addEventListener('scroll', handleScroll, { passive: true })
    } else if (containerRef.value) {
      containerRef.value.removeEventListener('scroll', handleScroll)
      containerRef.value.addEventListener('scroll', handleScroll, { passive: true })
    }
  }
})
</script>

<style scoped>
.scroll-load-more {
  position: relative;
  width: 100%;
}

.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 14px;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-top: 2px solid var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.no-more-state {
  text-align: center;
  padding: 32px 0;
  color: var(--text-light);
  font-size: 14px;
}
</style>
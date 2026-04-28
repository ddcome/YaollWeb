<template>
  <aside class="toc-widget" v-if="headings.length > 0">
    <h3 class="toc-title">
      <i class="fas fa-list-ul"></i>
      文章目录
    </h3>
    <nav class="toc-nav">
      <ul class="toc-list">
        <li
          v-for="(heading, index) in headings"
          :key="index"
          :class="['toc-item', `level-${heading.level}`, { active: activeId === heading.id }]"
        >
          <a
            :href="`#${heading.id}`"
            @click.prevent="scrollToHeading(heading.id)"
            class="toc-link"
          >
            {{ heading.title }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  tocData: {
    type: Array,
    default: () => []
  }
})

const headings = ref([])
const activeId = ref('')

const parseHeadings = () => {
  if (props.tocData && props.tocData.length > 0) {
    headings.value = props.tocData
    return
  }

  if (!props.content) return

  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = props.content

  const headingElements = tempDiv.querySelectorAll('h2, h3, h4')
  
  headings.value = Array.from(headingElements).map(el => ({
    id: el.id || `heading-${Math.random().toString(36).substr(2, 9)}`,
    title: el.textContent,
    level: parseInt(el.tagName.charAt(1))
  }))
}

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
    activeId.value = id
  }
}

const handleScroll = () => {
  if (headings.value.length === 0) return

  const scrollPosition = window.scrollY + 100
  
  for (let i = headings.value.length - 1; i >= 0; i--) {
    const element = document.getElementById(headings.value[i].id)
    if (element && element.offsetTop <= scrollPosition) {
      activeId.value = headings.value[i].id
      break
    }
  }
}

onMounted(() => {
  parseHeadings()
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.toc-widget {
  position: sticky;
  top: 88px;
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

.toc-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.toc-title i {
  color: var(--primary-blue);
  font-size: 14px;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: 4px;
}

.toc-item.level-3 {
  padding-left: 16px;
}

.toc-item.level-4 {
  padding-left: 32px;
}

.toc-link {
  display: block;
  padding: 6px 12px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13.5px;
  line-height: 1.5;
  border-radius: 6px;
  transition: all 0.25s ease;
  border-left: 2px solid transparent;
}

.toc-link:hover {
  color: var(--primary-blue);
  background: var(--primary-blue-light);
  border-left-color: var(--primary-blue);
}

.toc-item.active .toc-link {
  color: var(--primary-blue);
  font-weight: 600;
  background: var(--primary-blue-light);
  border-left-color: var(--primary-blue);
}

@media (max-width: 1024px) {
  .toc-widget {
    display: none;
  }
}
</style>
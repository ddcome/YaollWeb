<template>
  <header class="app-header" :class="{ 'blue-theme': theme === 'blue', 'white-theme': theme === 'white' }">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <i class="fas fa-code logo-icon"></i>
          <span v-if="theme === 'blue'">{{ siteName }}</span>
          <span v-else class="logo-text">{{ siteName }}</span>
        </div>

        <nav class="nav-menu" v-if="showNav">
          <router-link to="/" :class="{ active: $route.path === '/' }">首页</router-link>
          <router-link to="/articles" :class="{ active: $route.path.startsWith('/article') }">知识库</router-link>
          <router-link to="/about" :class="{ active: $route.path === '/about' }">关于我</router-link>
        </nav>

        <button class="user-avatar-btn" v-if="showUserAvatar">
          <img src="https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg" alt="用户头像" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    default: 'blue'
  },
  siteName: {
    type: String,
    default: ''
  },
  showNav: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showUserAvatar: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 64px;
  display: flex;
  align-items: center;
}

.blue-theme {
  background-color: var(--primary-blue);
  color: white;
}

.white-theme {
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-primary);
}

.header-content {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 48px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  flex-shrink: 0;
}

.blue-theme .logo {
  color: white;
}

.white-theme .logo {
  color: var(--text-primary);
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: rgba(255,255,255,0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.white-theme .logo-icon {
  background: var(--primary-blue-light);
  color: var(--primary-blue);
}

.nav-menu {
  display: flex;
  gap: 8px;
}

.nav-menu a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  padding: 8px 16px;
  border-radius: 8px;
}

.blue-theme .nav-menu a {
  color: rgba(255,255,255,0.85);
}

.blue-theme .nav-menu a:hover,
.blue-theme .nav-menu a.active {
  color: white;
  background: rgba(255,255,255,0.15);
}

.white-theme .nav-menu a {
  color: var(--text-secondary);
}

.white-theme .nav-menu a:hover,
.white-theme .nav-menu a.active {
  color: var(--primary-blue);
  background: var(--primary-blue-light);
}

.user-avatar-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  cursor: pointer;
  padding: 0;
  background: transparent;
}

.user-avatar-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
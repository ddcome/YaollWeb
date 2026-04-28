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

        <div class="search-box" v-if="showSearch">
          <i class="fas fa-search search-icon"></i>
          <input type="text" placeholder="搜索..." />
        </div>

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
  justify-content: space-between;
  height: 100%;
  gap: 40px;
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
  gap: 32px;
  flex: 1;
}

.nav-menu a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: opacity 0.2s;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
}

.blue-theme .nav-menu a {
  color: rgba(255,255,255,0.85);
}

.blue-theme .nav-menu a:hover,
.blue-theme .nav-menu a.active {
  color: white;
  border-bottom-color: white;
}

.white-theme .nav-menu a {
  color: var(--text-secondary);
}

.white-theme .nav-menu a:hover,
.white-theme .nav-menu a.active {
  color: var(--primary-blue);
  border-bottom-color: var(--primary-blue);
}

.search-box {
  position: relative;
  width: 280px;
}

.search-box input {
  width: 100%;
  height: 36px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 14px;
  transition: all 0.2s;
}

.blue-theme .search-box input {
  background: rgba(255,255,255,0.15);
  color: white;
  padding: 0 16px 0 38px;
}

.blue-theme .search-box input::placeholder {
  color: rgba(255,255,255,0.6);
}

.blue-theme .search-box input:focus {
  background: rgba(255,255,255,0.25);
}

.white-theme .search-box input {
  background: var(--bg-gray);
  color: var(--text-primary);
  padding: 0 16px 0 38px;
  border: 1px solid transparent;
}

.white-theme .search-box input:focus {
  background: white;
  border-color: var(--primary-blue);
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}

.blue-theme .search-icon {
  color: rgba(255,255,255,0.6);
}

.white-theme .search-icon {
  color: var(--text-light);
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
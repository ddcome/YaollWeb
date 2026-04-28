<template>
  <div class="not-found-page">
    <Header theme="blue" site-name="" />

    <div class="not-found-container">
      <!-- 404 图形区域 -->
      <div class="error-illustration">
        <div class="error-card">
          <span class="error-number">404</span>
          <div class="decorative-shape shape-1"></div>
          <div class="decorative-shape shape-2"></div>
        </div>
      </div>

      <!-- 错误信息 -->
      <h1 class="error-title">404 - 页面迷路了</h1>

      <!-- 返回首页按钮 -->
      <router-link to="/" class="back-home-btn">
        <i class="fas fa-home"></i>
        返回首页
      </router-link>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 40px 20px;
}

.not-found-container {
  text-align: center;
  max-width: 500px;
}

/* 错误图形 */
.error-illustration {
  margin-bottom: 32px;
}

.error-card {
  position: relative;
  width: 320px;
  height: 200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #EBF1FF 0%, #E0E9FF 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 30px rgba(74, 123, 247, 0.12);
}

.error-number {
  font-size: 96px;
  font-weight: 800;
  color: var(--primary-blue);
  opacity: 0.3;
  letter-spacing: -4px;
  user-select: none;
}

.decorative-shape {
  position: absolute;
  background: rgba(74, 123, 247, 0.08);
  border-radius: 50%;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: -20px;
  right: -20px;
}

.shape-2 {
  width: 60px;
  height: 60px;
  bottom: -15px;
  left: -15px;
  border-radius: 12px;
  transform: rotate(25deg);
}

/* 标题 */
.error-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 28px;
  letter-spacing: -0.5px;
}

/* 返回按钮 */
.back-home-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: var(--primary-blue);
  color: white;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(74, 123, 247, 0.35);
}

.back-home-btn:hover {
  background: var(--primary-blue-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74, 123, 247, 0.45);
}

.back-home-btn i {
  font-size: 18px;
}

@media (max-width: 480px) {
  .error-card {
    width: 280px;
    height: 170px;
  }

  .error-number {
    font-size: 72px;
  }

  .error-title {
    font-size: 28px;
  }
}
</style>
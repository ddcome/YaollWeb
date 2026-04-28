<template>
  <div class="about-page">
    <Header theme="blue" site-name="" />

    <main class="main-content">
      <div class="container">
        <!-- 页面标题区 -->
        <section class="hero-section">
          <h1 class="page-title">关于博主</h1>
          <p class="page-subtitle">探索我的专业历程、技能专长与成就荣誉</p>
          <!-- 装饰图形 -->
          <div class="decoration-circles">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
          </div>
        </section>

        <!-- 三栏内容区 -->
        <div class="content-grid">
          <!-- 个人经历 -->
          <div class="info-card">
            <h2 class="card-title"><i class="fas fa-briefcase"></i> 个人经历</h2>
            <div class="timeline">
              <div class="timeline-item">
                <h3>高级前端工程师</h3>
                <p class="company">科技未来有限公司 | 2020 - 至今</p>
                <p class="description">负责公司核心产品前端架构设计与实现，优化前端性能提升30%</p>
              </div>
              <div class="timeline-item">
                <h3>前端开发工程师</h3>
                <p class="company">创新科技集团 | 2017 - 2020</p>
                <p class="description">参与企业级SaaS平台开发，主导多个核心功能模块实现</p>
              </div>
              <div class="timeline-item">
                <h3>前端实习生</h3>
                <p class="company">数字梦想工作室 | 2016 - 2017</p>
                <p class="description">参与多个Web项目开发，积累实战经验</p>
              </div>
            </div>
          </div>

          <!-- 专业技能 -->
          <div class="info-card">
            <h2 class="card-title"><i class="fas fa-cogs"></i> 专业技能</h2>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">JavaScript</span>
                  <span class="skill-percent">90%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-fill" style="width: 90%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">React</span>
                  <span class="skill-percent">85%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-fill" style="width: 85%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">CSS/Tailwind</span>
                  <span class="skill-percent">80%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-fill" style="width: 80%"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">Node.js</span>
                  <span class="skill-percent">75%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-fill" style="width: 75%"></div>
                </div>
              </div>
            </div>
            <!-- 技能标签云 -->
            <div class="tags-cloud">
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Webpack</span>
              <span class="tech-tag">性能优化</span>
              <span class="tech-tag">响应式设计</span>
              <span class="tech-tag">UI/UX</span>
              <span class="tech-tag">GraphQL</span>
              <span class="tech-tag">PWA</span>
            </div>
          </div>

          <!-- 荣誉成就 -->
          <div class="info-card">
            <h2 class="card-title"><i class="fas fa-trophy"></i> 荣誉成就</h2>
            <div class="achievements-list">
              <div class="achievement-item">
                <h3>前端技术卓越奖</h3>
                <p class="award-date">2023年度 | 科技未来有限公司</p>
                <p class="award-desc">因主导前端架构优化项目，显著提升系统性能而获得</p>
              </div>
              <div class="achievement-item">
                <h3>最佳开源贡献者</h3>
                <p class="award-date">2022年度 | 前端技术社区</p>
                <p class="award-desc">为多个知名前端开源项目提交高质量PR，获得社区认可</p>
              </div>
              <div class="achievement-item">
                <h3>技术博客TOP作者</h3>
                <p class="award-date">2021年度 | 开发者周刊</p>
                <p class="award-desc">个人技术博客年度阅读量突破100万，多篇文章被官方推荐</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-gray);
}

.main-content {
  flex: 1;
  padding-bottom: 60px;
}

/* Hero区域 */
.hero-section {
  position: relative;
  text-align: center;
  padding: 64px 20px 48px;
  overflow: hidden;
}

.page-title {
  font-size: 42px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.page-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.decoration-circles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.circle-1 {
  width: 200px;
  height: 200px;
  background: var(--primary-blue);
  top: -40px;
  left: 15%;
}

.circle-2 {
  width: 150px;
  height: 150px;
  background: var(--primary-blue);
  bottom: -30px;
  right: 20%;
}

.circle-3 {
  width: 120px;
  height: 120px;
  background: var(--primary-blue);
  top: 10%;
  right: 25%;
}

/* 三栏网格 */
.content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.info-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-title i {
  color: var(--primary-blue);
  font-size: 18px;
}

/* 时间线 */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.timeline-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.company {
  font-size: 13px;
  color: var(--text-light);
  margin-bottom: 8px;
}

.description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 技能列表 */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.skill-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.skill-percent {
  font-size: 13px;
  color: var(--text-light);
  font-weight: 600;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: var(--bg-gray);
  border-radius: 4px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-blue), #6B9FFF);
  border-radius: 4px;
  transition: width 0.5s ease;
}

/* 标签云 */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 6px 14px;
  background: var(--bg-gray);
  border-radius: 16px;
  font-size: 12px;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  transition: all 0.2s;
}

.tech-tag:hover {
  background: var(--primary-blue-light);
  color: var(--primary-blue);
  border-color: var(--primary-blue-light);
}

/* 成就列表 */
.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.achievement-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.award-date {
  font-size: 13px;
  color: var(--text-light);
  margin-bottom: 8px;
}

.award-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 32px;
  }
}
</style>
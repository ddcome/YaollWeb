<template>
  <aside class="profile-card">
    <!-- 星星动画背景 -->
    <div class="stars-background">
      <span v-for="n in 30" :key="n" :class="`star star-${n}`"></span>
    </div>

    <div class="profile-content">
      <div class="profile-header">
        <img src="https://assets.mockplus.cn/ai/newImages/pexels/2632.jpg" alt="头像" class="avatar" />
      </div>
      <h2 class="profile-name">XXX</h2>
      <p class="profile-title">全栈开发工程师 | 技术博主</p>

      <!-- 打字机动画 -->
      <p class="profile-bio typing-wrapper">
        <span class="typing-text">{{ displayText }}<span class="cursor">|</span></span>
      </p>

      <button class="contact-btn">联系我</button>

      <div class="skills-section">
        <h3 class="section-label">技能标签</h3>
        <div class="tags-list">
          <span class="tag"><i class="fab fa-js"></i> JavaScript</span>
          <span class="tag"><i class="fab fa-css3-alt"></i> CSS3</span>
          <span class="tag"><i class="fab fa-html5"></i> HTML5</span>
          <span class="tag"><i class="fab fa-react"></i> React</span>
          <span class="tag"><i class="fab fa-node-js"></i> Node.js</span>
        </div>
      </div>

      <div class="social-section">
        <h3 class="section-label">社交账号</h3>
        <div class="social-icons">
          <a href="#" class="social-btn github"><i class="fab fa-github"></i></a>
          <a href="#" class="social-btn twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-btn linkedin"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="social-btn youtube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const texts = ['Built with ❤️', '以为曜离，灼灼其林', 'Made with ☕', 'Crafted with 💡', 'Designed with 🎨']
const displayText = ref('')
let textIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

const typeEffect = () => {
  const currentText = texts[textIndex]

  if (!isDeleting) {
    displayText.value = currentText.substring(0, charIndex + 1)
    charIndex++

    if (charIndex === currentText.length) {
      isDeleting = true
      timer = setTimeout(typeEffect, 2000)
      return
    }

    timer = setTimeout(typeEffect, 80)
  } else {
    displayText.value = currentText.substring(0, charIndex - 1)
    charIndex--

    if (charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
      timer = setTimeout(typeEffect, 400)
      return
    }

    timer = setTimeout(typeEffect, 40)
  }
}

onMounted(() => {
  typeEffect()
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.profile-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  box-shadow: var(--shadow-sm);
  position: sticky;
  overflow: hidden;
  position: relative;
}

/* 星星动画背景 */
.stars-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.star {
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  background: rgba(180, 190, 210, 0.35);
  /* 使用 clip-path 画一个标准五角星 */
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  /* 原来的动画和变量保留 */
  animation: twinkle var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes twinkle {
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

.star-1 { top: 5%; left: 10%; --duration: 3s; --delay: 0s; }
.star-2 { top: 12%; left: 85%; --duration: 4s; --delay: 0.5s; }
.star-3 { top: 25%; left: 20%; --duration: 3.5s; --delay: 1s; }
.star-4 { top: 18%; left: 70%; --duration: 4.5s; --delay: 1.5s; }
.star-5 { top: 35%; left: 90%; --duration: 3s; --delay: 0.3s; }
.star-6 { top: 42%; left: 15%; --duration: 4s; --delay: 0.8s; }
.star-7 { top: 55%; left: 80%; --duration: 3.5s; --delay: 1.2s; }
.star-8 { top: 48%; left: 45%; --duration: 4.2s; --delay: 0.6s; }
.star-9 { top: 65%; left: 25%; --duration: 3.8s; --delay: 1.8s; }
.star-10 { top: 72%; left: 75%; --duration: 4.3s; --delay: 0.2s; }
.star-11 { top: 80%; left: 50%; --duration: 3.2s; --delay: 1.1s; }
.star-12 { top: 88%; left: 12%; --duration: 4.6s; --delay: 0.9s; }
.star-13 { top: 92%; left: 88%; --duration: 3.7s; --delay: 1.4s; }
.star-14 { top: 8%; left: 50%; --duration: 4.1s; --delay: 0.7s; }
.star-15 { top: 28%; left: 60%; --duration: 3.9s; --delay: 1.6s; }
.star-16 { top: 38%; left: 35%; --duration: 4.4s; --delay: 0.4s; }
.star-17 { top: 58%; left: 95%; --duration: 3.3s; --delay: 1.3s; }
.star-18 { top: 68%; left: 5%; --duration: 4.7s; --delay: 0.1s; }
.star-19 { top: 78%; left: 40%; --duration: 3.6s; --delay: 1.7s; }
.star-20 { top: 85%; left: 62%; --duration: 4s; --delay: 0.5s; }
.star-21 { top: 15%; left: 30%; --duration: 3.4s; --delay: 1.9s; }
.star-22 { top: 52%; left: 68%; --duration: 4.8s; --delay: 0.25s; }
.star-23 { top: 62%; left: 88%; --duration: 3.1s; --delay: 1.05s; }
.star-24 { top: 22%; left: 78%; --duration: 4.2s; --delay: 0.55s; }
.star-25 { top: 45%; left: 8%; --duration: 3.7s; --delay: 1.35s; }
.star-26 { top: 75%; left: 33%; --duration: 4.5s; --delay: 0.85s; }
.star-27 { top: 95%; left: 58%; --duration: 3.2s; --delay: 1.65s; }
.star-28 { top: 32%; left: 98%; --duration: 4.3s; --delay: 0.15s; }
.star-29 { top: 82%; left: 18%; --duration: 3.8s; --delay: 1.45s; }
.star-30 { top: 2%; left: 65%; --duration: 4.1s; --delay: 0.75s; }

.profile-content {
  position: relative;
  z-index: 1;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary-blue-light);
}

.profile-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 8px;
}

.profile-title {
  font-size: 14px;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 16px;
}

.typing-wrapper {
  min-height: 24px;
  margin-bottom: 24px;
}

.typing-text {
  color: var(--primary-blue);
  font-style: italic;
  font-size: 13.5px;
  line-height: 1.6;
  display: block;
  text-align: center;
}

.cursor {
  display: inline-block;
  animation: blink 0.7s infinite;
  color: var(--primary-blue);
  font-weight: 300;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.contact-btn {
  width: 100%;
  height: 40px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 28px;
}

.contact-btn:hover {
  background: var(--primary-blue-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.skills-section,
.social-section {
  margin-bottom: 24px;
}

.section-label {
  font-size: 13px;
  color: var(--text-light);
  margin-bottom: 12px;
  font-weight: 500;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--bg-gray);
  border-radius: 16px;
  font-size: 13px;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.tag i {
  font-size: 12px;
  color: var(--primary-blue);
}

.social-icons {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.social-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 14px;
}

.social-btn.github { background: #24292e; }
.social-btn.twitter { background: #1DA1F2; }
.social-btn.linkedin { background: #0077B5; }
.social-btn.youtube { background: #FF0000; }

.social-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: var(--shadow-md);
}
</style>
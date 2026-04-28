<template>
  <div class="ai-dialog-float" :class="{ 'ai-dialog-fullscreen': isFullscreen }">
    <div class="ai-dialog" :class="{ 'ai-dialog-open': isOpen, 'ai-dialog-fullscreen': isFullscreen }">
      <div class="ai-dialog-header">
        <div class="ai-avatar">
          <i class="fas fa-robot"></i>
        </div>
        <div class="ai-info">
          <h3 class="ai-name">知识库助手</h3>
          <p class="ai-status">在线</p>
        </div>
        <div class="ai-header-actions">
          <button class="ai-action-btn" @click="toggleFullscreen" title="放大/缩小">
            <i v-if="!isFullscreen" class="fas fa-expand"></i>
            <i v-else class="fas fa-compress"></i>
          </button>
          <button class="ai-close-btn" @click="isOpen = !isOpen" title="收起/展开">
            <i class="fas fa-chevron-down" v-if="isOpen"></i>
            <i class="fas fa-chevron-up" v-else></i>
          </button>
        </div>
      </div>
      
      <div class="ai-dialog-content" v-show="isOpen">
        <div class="ai-messages" ref="messagesContainer">
          <div class="ai-message message">
            <div class="message-avatar">
              <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
              <p>你好！我是知识库助手，可以帮你搜索和解答技术问题。请问有什么可以帮助你的？</p>
            </div>
          </div>
          
          <div v-for="(msg, index) in messages" :key="index" class="message" :class="msg.role === 'user' ? 'user-message' : 'ai-message'">
            <div class="message-avatar">
              <i v-if="msg.role === 'user'" class="fas fa-user"></i>
              <i v-else class="fas fa-robot"></i>
            </div>
            <div class="message-content">
              <p>{{ msg.content }}</p>
            </div>
          </div>
          
          <div v-if="isLoading" class="ai-message message">
            <div class="message-avatar">
              <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
              <div class="loading-indicator">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="ai-input-area">
          <input 
            type="text" 
            v-model="inputMessage" 
            placeholder="输入你的问题..." 
            class="ai-input"
            @keyup.enter="sendMessage"
          />
          <button class="ai-send-btn" @click="sendMessage" :disabled="!inputMessage.trim() || isLoading">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const isOpen = ref(true)
const isFullscreen = ref(false)
const inputMessage = ref('')
const messages = ref([])
const isLoading = ref(false)
const messagesContainer = ref(null)

// 切换全屏状态
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
}

// 发送消息
const sendMessage = () => {
  if (!inputMessage.value.trim() || isLoading.value) return
  
  const userMessage = inputMessage.value.trim()
  messages.value.push({ role: 'user', content: userMessage })
  inputMessage.value = ''
  
  // 模拟AI响应
  isLoading.value = true
  
  // 滚动到底部
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
  
  // 模拟API调用延迟
  setTimeout(() => {
    const aiResponse = generateResponse(userMessage)
    messages.value.push({ role: 'assistant', content: aiResponse })
    isLoading.value = false
    
    // 滚动到底部
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    })
  }, 1500)
}

// 生成模拟响应
const generateResponse = (question) => {
  const responses = {
    '前端框架': '目前流行的前端框架包括React、Vue和Angular。React由Facebook开发，组件化思想强；Vue是渐进式框架，学习曲线平缓；Angular由Google维护，功能全面但相对复杂。',
    'JavaScript': 'JavaScript是一种轻量级的编程语言，主要用于网页交互。它可以在浏览器中运行，也可以通过Node.js在服务器端运行。ES6+引入了许多新特性，如箭头函数、Promise、async/await等。',
    'TypeScript': 'TypeScript是JavaScript的超集，添加了静态类型系统。它可以帮助开发者在编译时发现错误，提高代码质量和可维护性。许多大型项目和框架都采用TypeScript。',
    'CSS': 'CSS（层叠样式表）用于描述HTML元素的显示方式。现代CSS包括Flexbox和Grid布局、变量、动画等特性。CSS预处理器如Sass和Less可以提高开发效率。',
    'React': 'React是一个用于构建用户界面的JavaScript库。它采用组件化思想，使用虚拟DOM提高性能。React Native可以用于开发移动应用。',
    'Vue': 'Vue是一个渐进式JavaScript框架，易于学习和使用。它提供了双向数据绑定、组件化开发和响应式系统。Vue 3引入了Composition API，提供了更灵活的代码组织方式。',
    'Node.js': 'Node.js是基于Chrome V8引擎的JavaScript运行环境，可以在服务器端运行JavaScript。它使用事件驱动、非阻塞I/O模型，适合构建高性能的网络应用。',
    'Webpack': 'Webpack是一个模块打包工具，可以将多个JavaScript文件、CSS、图片等资源打包成一个或多个文件。它支持代码分割、热模块替换等特性。',
    'RESTful API': 'RESTful API是一种基于HTTP的API设计风格，使用GET、POST、PUT、DELETE等HTTP方法来操作资源。它简单、灵活，被广泛应用于Web服务。',
    'GraphQL': 'GraphQL是一种用于API的查询语言，由Facebook开发。它允许客户端精确指定需要的数据，减少了过度获取和多次请求的问题。'
  }
  
  // 简单的关键词匹配
  for (const [key, value] of Object.entries(responses)) {
    if (question.includes(key)) {
      return value
    }
  }
  
  return '抱歉，我暂时无法回答这个问题。你可以尝试询问关于前端开发、JavaScript、框架等相关话题。'
}
</script>

<style scoped>
.ai-dialog-float {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
  transition: all 0.3s ease;
}

.ai-dialog-float.ai-dialog-fullscreen {
  top: 64px; /* 导航栏高度 */
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 64px);
}

.ai-dialog {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  width: 320px;
  transition: all 0.3s ease;
  max-height: 500px;
  display: flex;
  flex-direction: column;
}

.ai-dialog.ai-dialog-fullscreen {
  width: 100%;
  height: 100%;
  max-height: none;
  border-radius: 0;
  box-shadow: none;
}

.ai-dialog-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: var(--primary-blue-light);
  cursor: pointer;
  transition: all 0.2s;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.ai-dialog.ai-dialog-fullscreen .ai-dialog-header {
  border-radius: 0;
}

.ai-dialog-header:hover {
  background: var(--primary-blue-light-hover);
}

.ai-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-blue);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.ai-avatar i {
  font-size: 14px;
}

.ai-info {
  flex: 1;
  min-width: 0;
}

.ai-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 2px 0;
}

.ai-status {
  font-size: 12px;
  color: var(--text-secondary);
  margin: 0;
}

.ai-header-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.ai-action-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.ai-action-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
}

.ai-close-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.ai-close-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
}

.ai-dialog-content {
  max-height: 400px;
  display: flex;
  flex-direction: column;
}

.ai-dialog.ai-dialog-fullscreen .ai-dialog-content {
  max-height: none;
  flex: 1;
}

.ai-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  max-height: 320px;
  scroll-behavior: smooth;
}

.ai-dialog.ai-dialog-fullscreen .ai-messages {
  max-height: none;
  padding: 24px;
}

.ai-messages::-webkit-scrollbar {
  width: 4px;
}

.ai-messages::-webkit-scrollbar-track {
  background: var(--bg-gray);
  border-radius: 2px;
}

.ai-messages::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 2px;
}

.message {
  display: flex;
  margin-bottom: 12px;
  animation: fadeIn 0.3s ease;
}

.ai-dialog.ai-dialog-fullscreen .message {
  margin-bottom: 16px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  flex-shrink: 0;
}

.ai-message .message-avatar {
  background: var(--primary-blue-light);
  color: var(--primary-blue);
}

.user-message .message-avatar {
  background: var(--bg-gray);
  color: var(--text-secondary);
}

.message-avatar i {
  font-size: 12px;
}

.message-content {
  flex: 1;
  max-width: 80%;
}

.ai-message .message-content {
  background: var(--bg-gray);
  border-radius: 16px 16px 16px 4px;
  padding: 8px 12px;
}

.user-message .message-content {
  background: var(--primary-blue);
  color: white;
  border-radius: 16px 16px 4px 16px;
  padding: 8px 12px;
  margin-left: auto;
}

.ai-dialog.ai-dialog-fullscreen .message-content {
  padding: 12px 16px;
  font-size: 14px;
}

.message-content p {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
}

.ai-dialog.ai-dialog-fullscreen .message-content p {
  font-size: 14px;
  line-height: 1.5;
}

.loading-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-secondary);
  animation: pulse 1.5s infinite ease-in-out;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.ai-input-area {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid var(--border-color);
  background: white;
}

.ai-dialog.ai-dialog-fullscreen .ai-input-area {
  padding: 16px 24px;
}

.ai-input {
  flex: 1;
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--border-color);
  border-radius: 18px;
  font-size: 13px;
  outline: none;
  transition: all 0.2s;
}

.ai-dialog.ai-dialog-fullscreen .ai-input {
  height: 44px;
  padding: 0 16px;
  font-size: 14px;
  border-radius: 22px;
}

.ai-input:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(74, 123, 247, 0.1);
}

.ai-send-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: var(--primary-blue);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}

.ai-dialog.ai-dialog-fullscreen .ai-send-btn {
  width: 44px;
  height: 44px;
}

.ai-send-btn:hover:not(:disabled) {
  background: var(--primary-blue-hover);
  transform: scale(1.05);
}

.ai-send-btn:disabled {
  background: var(--border-color);
  cursor: not-allowed;
  transform: none;
}

.ai-send-btn i {
  font-size: 14px;
}

.ai-dialog.ai-dialog-fullscreen .ai-send-btn i {
  font-size: 16px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .ai-dialog-float {
    bottom: 24px;
    right: 24px;
  }
  
  .ai-dialog {
    width: 280px;
  }
  
  .ai-dialog-float.ai-dialog-fullscreen {
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
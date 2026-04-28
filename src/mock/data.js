export const mockArticles = [
  {
    id: 1,
    title: '深入理解现代前端框架的演进与未来趋势',
    description: '探索2023年前端开发的最新趋势和技术栈选择，帮助开发者把握行业方向...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2026-03-15',
    readCount: '2.4k',
    type: 'rich-text',
    tags: ['前端开发', '框架对比', '技术趋势'],
    content: `
      <h2 id="intro">1. 引言</h2>
      <p>在过去的十年中，前端开发经历了翻天覆地的变化。从最初的jQuery时代到现在的React、Vue、Angular三足鼎立，前端技术的演进速度令人惊叹。本文将深入探讨这些主流框架的发展历程、核心特性以及未来的发展趋势。</p>
      
      <h2 id="frameworks">2. 前端主流框架</h2>
      
      <h3>2.1 React</h3>
      <p>React由Facebook于2013年发布，是目前最流行的前端框架之一。它采用虚拟DOM和组件化的思想，极大地提高了开发效率。</p>
      
      <pre><code>// React组件示例
function Welcome({ name }) {
  return &lt;h1&gt;Hello, {name}&lt;/h1&gt;;
}</code></pre>
      
      <h3>2.2 Vue.js</h3>
      <p>Vue.js由尤雨溪于2014年创建，以其简洁的API和优秀的文档著称。Vue 3引入了Composition API，使得代码组织更加灵活。</p>
      
      <h3>2.3 Angular</h3>
      <p>Angular是Google维护的企业级框架，提供了完整的解决方案，包括路由、表单处理、HTTP客户端等。</p>
      
      <h2 id="comparison">3. 性能对比</h2>
      <table>
        <tr><th>框架</th><th>包大小</th><th>首次加载</th><th>更新性能</th></tr>
        <tr><td>React</td><td>42KB</td><td>快</td><td>优秀</td></tr>
        <tr><td>Vue 3</td><td>33KB</td><td>快</td><td>优秀</td></tr>
        <tr><td>Angular</td><td>170KB</td><td>较慢</td><td>良好</td></tr>
      </table>
      
      <h2 id="future">4. 未来趋势</h2>
      <ul>
        <li><strong>服务端渲染（SSR）</strong>：Next.js、Nuxt.js等框架的兴起</li>
        <li><strong>WebAssembly</strong>：提升Web应用性能的新选择</li>
        <li><strong>微前端</strong>：大型应用架构的新范式</li>
        <li><strong>TypeScript普及</strong>：类型安全成为标配</li>
      </ul>
      
      <blockquote>
        <p>"最好的框架是能够解决你问题的那个框架。"</p>
      </blockquote>
      
      <h2 id="conclusion">5. 总结展望</h2>
      <p>前端技术的发展永无止境。作为开发者，我们需要保持学习的热情，同时也要理性地选择适合项目的技术栈。未来，随着Web标准的不断完善和新技术的涌现，前端开发将会变得更加高效和有趣。</p>
    `,
    toc: [
      { id: 'intro', title: '1. 引言', level: 2 },
      { id: 'frameworks', title: '2. 前端主流框架', level: 2 },
      { id: 'comparison', title: '3. 性能对比', level: 2 },
      { id: 'future', title: '4. 未来趋势', level: 2 },
      { id: 'conclusion', title: '5. 总结展望', level: 2 }
    ]
  },
  {
    id: 2,
    title: 'JavaScript异步编程完全指南',
    description: '深入理解Promise、async/await和事件循环机制，全面掌握JS异步编程...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2026-02-28',
    readCount: '1.8k',
    type: 'markdown',
    tags: ['JavaScript', '异步编程'],
    content: `# JavaScript异步编程完全指南

## 1. 为什么需要异步？

JavaScript是单线程语言，但许多操作（如网络请求、文件读取）需要时间。如果同步执行，会阻塞整个程序。

## 2. 回调函数

最早的异步方案：

\`\`\`javascript
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
\`\`\`

**问题**：回调地狱（Callback Hell）

## 3. Promise

ES6引入的Promise解决了回调地狱：

\`\`\`javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## 4. async/await

ES2017的语法糖，让异步代码看起来像同步：

\`\`\`javascript
async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## 5. 事件循环

理解事件循环是掌握异步的关键：

1. **调用栈（Call Stack）**：执行同步代码
2. **任务队列（Task Queue）**：存放异步回调
3. **事件循环（Event Loop）**：不断检查调用栈是否为空

> **宏任务 vs 微任务**
> - 宏任务：setTimeout, setInterval, I/O
> - 微任务：Promise.then, MutationObserver

## 6. 实战技巧

### 并行请求
\`\`\`javascript
const [users, posts] = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts')
]);
\`\`\`

### 错误边界
\`\`\`javascript
try {
  await riskyOperation();
} catch (error) {
  // 处理错误
}
\`\`\`
`,
    toc: [
      { id: '', title: '1. 为什么需要异步？', level: 2 },
      { id: '', title: '2. 回调函数', level: 2 },
      { id: '', title: '3. Promise', level: 2 },
      { id: '', title: '4. async/await', level: 2 },
      { id: '', title: '5. 事件循环', level: 2 },
      { id: '', title: '6. 实战技巧', level: 2 }
    ]
  },
  {
    id: 3,
    title: 'Tailwind CSS高级技巧与最佳实践',
    description: '10个提升开发效率的Tailwind CSS实用技巧和最佳实践...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2026-02-10',
    readCount: '3.1k',
    type: 'markdown',
    tags: ['CSS', 'Tailwind'],
    content: `# Tailwind CSS高级技巧

## 1. 自定义配置

扩展默认主题：

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#4A7BF7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}
\`\`\`

## 2. 组件提取

使用@apply指令：

\`\`\`css
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}
\`\`\`

## 3. 响应式设计

移动优先的方法：

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  Content
</div>
\`\`\`

## 4. 暗色模式

使用class策略：

\`\`\`html
<div class="bg-white dark:bg-gray-900">
  Adaptive content
</div>
\`\`\`
`,
    toc: [
      { id: '', title: '1. 自定义配置', level: 2 },
      { id: '', title: '2. 组件提取', level: 2 },
      { id: '', title: '3. 响应式设计', level: 2 },
      { id: '', title: '4. 暗色模式', level: 2 }
    ]
  },
  {
    id: 4,
    title: 'React性能优化实战指南',
    description: '深入理解React渲染机制，掌握提升应用性能的关键技术...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2026-01-25',
    readCount: '2.7k',
    type: 'rich-text',
    tags: ['React', '性能优化'],
    content: `<h2>1. 理解React渲染机制</h2><p>React使用虚拟DOM来提高渲染效率。当状态变化时，React会比较新旧虚拟DOM的差异，只更新必要的部分。</p><h2>2. 使用React.memo</h2><pre><code>const MemoizedComponent = React.memo(function MyComponent(props) { /* 渲染 */ });</code></pre><h2>3. useMemo和useCallback</h2><p>这两个Hook可以帮助我们避免不必要的重新计算和重新创建函数。</p>`,
    toc: [
      { id: '', title: '1. 理解React渲染机制', level: 2 },
      { id: '', title: '2. 使用React.memo', level: 2 },
      { id: '', title: '3. useMemo和useCallback', level: 2 }
    ]
  },
  {
    id: 5,
    title: 'Node.js微服务架构设计实践',
    description: '如何使用Node.js构建可扩展的微服务架构，提升系统可靠性...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2026-01-12',
    readCount: '1.5k',
    type: 'video',
    tags: ['Node.js', '微服务', '架构'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7mu',
    duration: '45:20',
    content: null
  },
  {
    id: 6,
    title: '云原生应用开发从入门到精通',
    description: '从容器化到Kubernetes，构建现代化云原生应用的完整流程...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-12-30',
    readCount: '2.2k',
    type: 'video',
    tags: ['云原生', 'Docker', 'K8s'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7mv',
    duration: '38:15',
    content: null
  },
  {
    id: 7,
    title: 'TypeScript高级类型系统详解',
    description: '深入理解TypeScript的类型系统，掌握高级类型技巧和最佳实践...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-12-20',
    readCount: '1.9k',
    type: 'rich-text',
    tags: ['TypeScript', '类型系统'],
    content: `<h2>1. TypeScript类型系统简介</h2><p>TypeScript提供了强大的类型系统，帮助开发者在编译时发现错误。</p><h2>2. 高级类型技巧</h2><p>泛型、条件类型、映射类型等高级特性的使用方法。</p>`,
    toc: [
      { id: '', title: '1. TypeScript类型系统简介', level: 2 },
      { id: '', title: '2. 高级类型技巧', level: 2 }
    ]
  },
  {
    id: 8,
    title: 'CSS Grid布局完全指南',
    description: '掌握CSS Grid布局的核心概念和实战技巧，创建复杂的响应式布局...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-12-15',
    readCount: '2.5k',
    type: 'markdown',
    tags: ['CSS', 'Grid布局'],
    content: `# CSS Grid布局完全指南

## 1. Grid基础概念

Grid布局的核心是容器和项目的概念。

## 2. 网格线和轨道

理解网格线和轨道的概念是使用Grid的关键。

## 3. 响应式Grid

使用媒体查询和Grid结合创建响应式布局。`,
    toc: [
      { id: '', title: '1. Grid基础概念', level: 2 },
      { id: '', title: '2. 网格线和轨道', level: 2 },
      { id: '', title: '3. 响应式Grid', level: 2 }
    ]
  },
  {
    id: 9,
    title: 'React Server Components实战',
    description: '探索React 18的Server Components特性，提升应用性能...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-12-10',
    readCount: '3.2k',
    type: 'rich-text',
    tags: ['React', 'Server Components'],
    content: `<h2>1. Server Components简介</h2><p>React Server Components允许在服务器端渲染组件，减少客户端包大小。</p><h2>2. 实战应用</h2><p>如何在Next.js中使用Server Components构建高性能应用。</p>`,
    toc: [
      { id: '', title: '1. Server Components简介', level: 2 },
      { id: '', title: '2. 实战应用', level: 2 }
    ]
  },
  {
    id: 10,
    title: '微前端架构实践指南',
    description: '从理论到实践，掌握微前端架构的设计与实现...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-12-05',
    readCount: '2.1k',
    type: 'video',
    tags: ['微前端', '架构'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7mw',
    duration: '42:10',
    content: null
  },
  {
    id: 11,
    title: 'Web性能优化实战',
    description: '15个提升Web应用性能的实用技巧，从加载到渲染全面优化...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-11-28',
    readCount: '2.8k',
    type: 'markdown',
    tags: ['性能优化', 'Web'],
    content: `# Web性能优化实战

## 1. 资源优化

图片压缩、代码分割、按需加载等技术。

## 2. 渲染优化

减少重排重绘，使用CSS transform等技巧。

## 3. 网络优化

缓存策略、CDN使用、HTTP/2等网络优化技术。`,
    toc: [
      { id: '', title: '1. 资源优化', level: 2 },
      { id: '', title: '2. 渲染优化', level: 2 },
      { id: '', title: '3. 网络优化', level: 2 }
    ]
  },
  {
    id: 12,
    title: 'GraphQL从入门到精通',
    description: '学习GraphQL的核心概念和实战应用，构建现代API...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-11-20',
    readCount: '1.7k',
    type: 'rich-text',
    tags: ['GraphQL', 'API'],
    content: `<h2>1. GraphQL简介</h2><p>GraphQL是一种用于API的查询语言，提供了更灵活的数据获取方式。</p><h2>2. 实战应用</h2><p>如何在前端应用中集成GraphQL，以及后端服务器的实现。</p>`,
    toc: [
      { id: '', title: '1. GraphQL简介', level: 2 },
      { id: '', title: '2. 实战应用', level: 2 }
    ]
  },
  {
    id: 13,
    title: 'WebAssembly入门与实践',
    description: '探索WebAssembly的核心概念和使用场景，提升Web应用性能...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-11-15',
    readCount: '2.3k',
    type: 'rich-text',
    tags: ['WebAssembly', '性能优化'],
    content: `<h2>1. WebAssembly简介</h2><p>WebAssembly是一种低级编程语言，可在现代Web浏览器中运行。</p><h2>2. 实战应用</h2><p>如何使用WebAssembly加速计算密集型任务。</p>`,
    toc: [
      { id: '', title: '1. WebAssembly简介', level: 2 },
      { id: '', title: '2. 实战应用', level: 2 }
    ]
  },
  {
    id: 14,
    title: 'Docker容器化实践指南',
    description: '从基础到高级，掌握Docker容器化技术和最佳实践...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-11-10',
    readCount: '1.9k',
    type: 'markdown',
    tags: ['Docker', '容器化'],
    content: `# Docker容器化实践指南

## 1. Docker基础

Docker的核心概念和基本命令。

## 2. 容器编排

使用Docker Compose管理多容器应用。

## 3. 生产环境部署

Docker在生产环境中的最佳实践。`,
    toc: [
      { id: '', title: '1. Docker基础', level: 2 },
      { id: '', title: '2. 容器编排', level: 2 },
      { id: '', title: '3. 生产环境部署', level: 2 }
    ]
  },
  {
    id: 15,
    title: 'Vue 3 Composition API实战',
    description: '深入理解Vue 3的Composition API，构建更可维护的组件...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-11-05',
    readCount: '2.6k',
    type: 'rich-text',
    tags: ['Vue 3', 'Composition API'],
    content: `<h2>1. Composition API简介</h2><p>Vue 3的Composition API提供了更灵活的代码组织方式。</p><h2>2. 实战应用</h2><p>如何使用Composition API构建复杂组件。</p>`,
    toc: [
      { id: '', title: '1. Composition API简介', level: 2 },
      { id: '', title: '2. 实战应用', level: 2 }
    ]
  },
  {
    id: 16,
    title: '响应式设计最佳实践',
    description: '掌握现代响应式设计的原则和技术，创建适配各种设备的界面...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-10-30',
    readCount: '2.4k',
    type: 'markdown',
    tags: ['响应式设计', 'CSS'],
    content: `# 响应式设计最佳实践

## 1. 响应式原则

移动优先设计和断点策略。

## 2. 弹性布局

Flexbox和Grid的最佳使用方式。

## 3. 响应式图片

不同设备的图片优化策略。`,
    toc: [
      { id: '', title: '1. 响应式原则', level: 2 },
      { id: '', title: '2. 弹性布局', level: 2 },
      { id: '', title: '3. 响应式图片', level: 2 }
    ]
  },
  {
    id: 17,
    title: 'Node.js性能优化指南',
    description: '提升Node.js应用性能的10个实用技巧和最佳实践...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-10-25',
    readCount: '1.8k',
    type: 'rich-text',
    tags: ['Node.js', '性能优化'],
    content: `<h2>1. Node.js性能瓶颈</h2><p>常见的Node.js性能问题和解决方案。</p><h2>2. 优化技巧</h2><p>内存管理、异步编程和缓存策略。</p>`,
    toc: [
      { id: '', title: '1. Node.js性能瓶颈', level: 2 },
      { id: '', title: '2. 优化技巧', level: 2 }
    ]
  },
  {
    id: 18,
    title: '前端安全最佳实践',
    description: '保护前端应用免受常见安全威胁的实用指南...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-10-20',
    readCount: '2.1k',
    type: 'markdown',
    tags: ['前端安全', 'Web安全'],
    content: `# 前端安全最佳实践

## 1. XSS攻击防护

防止跨站脚本攻击的方法。

## 2. CSRF防护

跨站请求伪造的防护策略。

## 3. 安全头部配置

HTTP安全头部的最佳配置。`,
    toc: [
      { id: '', title: '1. XSS攻击防护', level: 2 },
      { id: '', title: '2. CSRF防护', level: 2 },
      { id: '', title: '3. 安全头部配置', level: 2 }
    ]
  },
  {
    id: 19,
    title: 'TypeScript实战技巧',
    description: '提升TypeScript开发效率的实用技巧和最佳实践...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-10-15',
    readCount: '2.7k',
    type: 'rich-text',
    tags: ['TypeScript', '开发技巧'],
    content: `<h2>1. TypeScript高级类型</h2><p>泛型、条件类型和映射类型的使用。</p><h2>2. 开发工具配置</h2><p>tsconfig.json的最佳配置和编辑器集成。</p>`,
    toc: [
      { id: '', title: '1. TypeScript高级类型', level: 2 },
      { id: '', title: '2. 开发工具配置', level: 2 }
    ]
  },
  {
    id: 20,
    title: '前端工程化实践',
    description: '从代码规范到自动化部署，构建完整的前端工程化流程...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-10-10',
    readCount: '2.3k',
    type: 'markdown',
    tags: ['前端工程化', 'DevOps'],
    content: `# 前端工程化实践

## 1. 代码规范

ESLint、Prettier和Git hooks的配置。

## 2. 构建工具

Webpack、Vite和Rollup的使用。

## 3. 自动化部署

CI/CD流程的搭建和优化。`,
    toc: [
      { id: '', title: '1. 代码规范', level: 2 },
      { id: '', title: '2. 构建工具', level: 2 },
      { id: '', title: '3. 自动化部署', level: 2 }
    ]
  },
  {
    id: 21,
    title: 'React Hooks最佳实践',
    description: '掌握React Hooks的使用技巧，避免常见陷阱...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-10-05',
    readCount: '2.9k',
    type: 'rich-text',
    tags: ['React', 'Hooks'],
    content: `<h2>1. Hooks基础</h2><p>useState、useEffect等基础Hooks的使用。</p><h2>2. 自定义Hooks</h2><p>创建可复用的自定义Hooks。</p>`,
    toc: [
      { id: '', title: '1. Hooks基础', level: 2 },
      { id: '', title: '2. 自定义Hooks', level: 2 }
    ]
  },
  {
    id: 22,
    title: 'CSS动画实战',
    description: '创建流畅、性能优化的CSS动画效果...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-09-30',
    readCount: '2.2k',
    type: 'markdown',
    tags: ['CSS', '动画'],
    content: `# CSS动画实战

## 1. 基础动画

CSS transitions和animations的使用。

## 2. 性能优化

硬件加速和减少重排重绘的技巧。

## 3. 复杂动画

使用CSS变量和关键帧创建复杂动画。`,
    toc: [
      { id: '', title: '1. 基础动画', level: 2 },
      { id: '', title: '2. 性能优化', level: 2 },
      { id: '', title: '3. 复杂动画', level: 2 }
    ]
  },
  {
    id: 23,
    title: '前端状态管理方案对比',
    description: 'Redux、MobX、Vuex等状态管理库的对比与选择...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-09-25',
    readCount: '2.5k',
    type: 'rich-text',
    tags: ['状态管理', '前端架构'],
    content: `<h2>1. 状态管理库对比</h2><p>Redux、MobX、Vuex等库的优缺点。</p><h2>2. 选择指南</h2><p>根据项目需求选择合适的状态管理方案。</p>`,
    toc: [
      { id: '', title: '1. 状态管理库对比', level: 2 },
      { id: '', title: '2. 选择指南', level: 2 }
    ]
  },
  {
    id: 24,
    title: '前端测试策略',
    description: '从单元测试到端到端测试，构建完整的前端测试体系...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-09-20',
    readCount: '1.9k',
    type: 'markdown',
    tags: ['前端测试', 'Jest'],
    content: `# 前端测试策略

## 1. 单元测试

使用Jest进行组件和函数测试。

## 2. 集成测试

测试组件之间的交互。

## 3. 端到端测试

使用Cypress进行端到端测试。`,
    toc: [
      { id: '', title: '1. 单元测试', level: 2 },
      { id: '', title: '2. 集成测试', level: 2 },
      { id: '', title: '3. 端到端测试', level: 2 }
    ]
  },
  {
    id: 25,
    title: '前端性能监控',
    description: '构建前端性能监控系统，实时追踪应用性能...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-09-15',
    readCount: '2.1k',
    type: 'rich-text',
    tags: ['性能监控', '前端监控'],
    content: `<h2>1. 性能指标</h2><p>Core Web Vitals和其他重要性能指标。</p><h2>2. 监控工具</h2><p>使用Lighthouse、Web Vitals等工具监控性能。</p>`,
    toc: [
      { id: '', title: '1. 性能指标', level: 2 },
      { id: '', title: '2. 监控工具', level: 2 }
    ]
  },
  {
    id: 26,
    title: '前端国际化实践',
    description: '构建支持多语言的前端应用，实现无缝国际化...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-09-10',
    readCount: '1.8k',
    type: 'markdown',
    tags: ['国际化', 'i18n'],
    content: `# 前端国际化实践

## 1. 国际化工具

i18next、react-i18next等工具的使用。

## 2. 翻译管理

翻译文件的管理和自动化。

## 3. 日期和数字格式化

不同地区的日期和数字格式处理。`,
    toc: [
      { id: '', title: '1. 国际化工具', level: 2 },
      { id: '', title: '2. 翻译管理', level: 2 },
      { id: '', title: '3. 日期和数字格式化', level: 2 }
    ]
  },
  {
    id: 27,
    title: '前端微服务架构',
    description: '探索前端微服务的设计理念和实现方案...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-09-05',
    readCount: '2.4k',
    type: 'video',
    tags: ['微服务', '前端架构'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7mx',
    duration: '40:15',
    content: null
  },
  {
    id: 28,
    title: '前端架构设计原则',
    description: '构建可扩展、可维护的前端架构的核心原则...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-08-30',
    readCount: '2.6k',
    type: 'rich-text',
    tags: ['前端架构', '设计原则'],
    content: `<h2>1. 架构设计原则</h2><p>模块化、关注点分离等核心原则。</p><h2>2. 架构模式</h2><p>MVC、MVVM、Flux等架构模式的应用。</p>`,
    toc: [
      { id: '', title: '1. 架构设计原则', level: 2 },
      { id: '', title: '2. 架构模式', level: 2 }
    ]
  },
  {
    id: 29,
    title: '前端组件库开发',
    description: '从设计到实现，构建企业级前端组件库...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-08-25',
    readCount: '2.2k',
    type: 'markdown',
    tags: ['组件库', '前端开发'],
    content: `# 前端组件库开发

## 1. 组件设计

组件API设计和使用体验。

## 2. 构建工具

使用Storybook等工具开发组件库。

## 3. 文档系统

构建完整的组件文档。`,
    toc: [
      { id: '', title: '1. 组件设计', level: 2 },
      { id: '', title: '2. 构建工具', level: 2 },
      { id: '', title: '3. 文档系统', level: 2 }
    ]
  },
  {
    id: 30,
    title: '前端安全审计',
    description: '识别和修复前端应用中的安全漏洞...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-08-20',
    readCount: '1.9k',
    type: 'rich-text',
    tags: ['前端安全', '安全审计'],
    content: `<h2>1. 安全审计工具</h2><p>使用安全扫描工具识别漏洞。</p><h2>2. 漏洞修复</h2><p>常见安全漏洞的修复方法。</p>`,
    toc: [
      { id: '', title: '1. 安全审计工具', level: 2 },
      { id: '', title: '2. 漏洞修复', level: 2 }
    ]
  },
  {
    id: 31,
    title: '前端性能优化案例',
    description: '通过实际案例学习前端性能优化的具体方法...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-08-15',
    readCount: '2.5k',
    type: 'video',
    tags: ['性能优化', '案例分析'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7my',
    duration: '35:20',
    content: null
  },
  {
    id: 32,
    title: '前端开发工具链',
    description: '打造高效的前端开发工具链，提升开发效率...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-08-10',
    readCount: '2.1k',
    type: 'markdown',
    tags: ['开发工具', '前端工程化'],
    content: `# 前端开发工具链

## 1. 编辑器配置

VS Code的最佳配置和插件。

## 2. 开发环境

使用Docker构建统一的开发环境。

## 3. 调试工具

Chrome DevTools等调试工具的使用技巧。`,
    toc: [
      { id: '', title: '1. 编辑器配置', level: 2 },
      { id: '', title: '2. 开发环境', level: 2 },
      { id: '', title: '3. 调试工具', level: 2 }
    ]
  },
  {
    id: 33,
    title: '前端数据可视化',
    description: '使用Chart.js、D3.js等库创建交互式数据可视化...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-08-05',
    readCount: '2.3k',
    type: 'rich-text',
    tags: ['数据可视化', 'Chart.js'],
    content: `<h2>1. 数据可视化库</h2><p>Chart.js、D3.js等库的使用。</p><h2>2. 交互式图表</h2><p>创建响应式、交互式的数据图表。</p>`,
    toc: [
      { id: '', title: '1. 数据可视化库', level: 2 },
      { id: '', title: '2. 交互式图表', level: 2 }
    ]
  },
  {
    id: 34,
    title: '前端无障碍设计',
    description: '构建无障碍的前端应用，确保所有用户都能使用...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-07-30',
    readCount: '1.8k',
    type: 'markdown',
    tags: ['无障碍设计', 'WCAG'],
    content: `# 前端无障碍设计

## 1. WCAG标准

Web内容无障碍指南的核心要求。

## 2. 无障碍实现

语义化HTML和ARIA属性的使用。

## 3. 测试工具

使用无障碍测试工具确保合规。`,
    toc: [
      { id: '', title: '1. WCAG标准', level: 2 },
      { id: '', title: '2. 无障碍实现', level: 2 },
      { id: '', title: '3. 测试工具', level: 2 }
    ]
  },
  {
    id: 35,
    title: '前端PWA开发',
    description: '构建渐进式Web应用，提供类原生应用的体验...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-07-25',
    readCount: '2.4k',
    type: 'rich-text',
    tags: ['PWA', '渐进式Web应用'],
    content: `<h2>1. PWA基础</h2><p>Service Worker和Web App Manifest的配置。</p><h2>2. 离线功能</h2><p>实现离线访问和缓存策略。</p>`,
    toc: [
      { id: '', title: '1. PWA基础', level: 2 },
      { id: '', title: '2. 离线功能', level: 2 }
    ]
  },
  {
    id: 36,
    title: '前端WebRTC应用',
    description: '使用WebRTC构建实时通信应用，如视频通话...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-07-20',
    readCount: '2.1k',
    type: 'video',
    tags: ['WebRTC', '实时通信'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7mz',
    duration: '38:45',
    content: null
  },
  {
    id: 37,
    title: '前端WebAssembly应用',
    description: '使用WebAssembly提升前端应用性能的实战案例...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-07-15',
    readCount: '2.3k',
    type: 'rich-text',
    tags: ['WebAssembly', '性能优化'],
    content: `<h2>1. WebAssembly应用场景</h2><p>适合使用WebAssembly的场景。</p><h2>2. 实战案例</h2><p>使用WebAssembly加速图像处理。</p>`,
    toc: [
      { id: '', title: '1. WebAssembly应用场景', level: 2 },
      { id: '', title: '2. 实战案例', level: 2 }
    ]
  },
  {
    id: 38,
    title: '前端GraphQL实践',
    description: '使用GraphQL构建现代API，提升前端开发效率...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-07-10',
    readCount: '1.9k',
    type: 'markdown',
    tags: ['GraphQL', 'API设计'],
    content: `# 前端GraphQL实践

## 1. GraphQL基础

查询语言和类型系统的理解。

## 2. 前端集成

使用Apollo Client等库集成GraphQL。

## 3. 性能优化

GraphQL查询的优化策略。`,
    toc: [
      { id: '', title: '1. GraphQL基础', level: 2 },
      { id: '', title: '2. 前端集成', level: 2 },
      { id: '', title: '3. 性能优化', level: 2 }
    ]
  },
  {
    id: 39,
    title: '前端微前端架构实践',
    description: '构建可扩展的微前端架构，实现团队独立开发...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-07-05',
    readCount: '2.5k',
    type: 'video',
    tags: ['微前端', '架构设计'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7na',
    duration: '42:30',
    content: null
  },
  {
    id: 40,
    title: '前端CSS预处理器',
    description: '掌握Sass、Less等CSS预处理器，提升CSS开发效率...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-06-30',
    readCount: '2.2k',
    type: 'markdown',
    tags: ['CSS', '预处理器'],
    content: `# 前端CSS预处理器

## 1. Sass基础

变量、嵌套和混合器的使用。

## 2. 高级特性

函数、继承和导入的使用。

## 3. 最佳实践

组织CSS代码的最佳方式。`,
    toc: [
      { id: '', title: '1. Sass基础', level: 2 },
      { id: '', title: '2. 高级特性', level: 2 },
      { id: '', title: '3. 最佳实践', level: 2 }
    ]
  },
  {
    id: 41,
    title: '前端TypeScript实战',
    description: '使用TypeScript构建类型安全的前端应用...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-06-25',
    readCount: '2.7k',
    type: 'rich-text',
    tags: ['TypeScript', '前端开发'],
    content: `<h2>1. TypeScript配置</h2><p>tsconfig.json的最佳配置。</p><h2>2. 类型定义</h2><p>接口、类型别名和泛型的使用。</p>`,
    toc: [
      { id: '', title: '1. TypeScript配置', level: 2 },
      { id: '', title: '2. 类型定义', level: 2 }
    ]
  },
  {
    id: 42,
    title: '前端React Native开发',
    description: '使用React Native构建跨平台移动应用...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-06-20',
    readCount: '2.3k',
    type: 'video',
    tags: ['React Native', '移动开发'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7nb',
    duration: '45:10',
    content: null
  },
  {
    id: 43,
    title: '前端服务端渲染',
    description: '使用Next.js、Nuxt.js等框架实现服务端渲染...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-06-15',
    readCount: '2.4k',
    type: 'rich-text',
    tags: ['SSR', '服务端渲染'],
    content: `<h2>1. SSR基础</h2><p>服务端渲染的原理和优势。</p><h2>2. Next.js实践</h2><p>使用Next.js构建SSR应用。</p>`,
    toc: [
      { id: '', title: '1. SSR基础', level: 2 },
      { id: '', title: '2. Next.js实践', level: 2 }
    ]
  },
  {
    id: 44,
    title: '前端WebSocket应用',
    description: '使用WebSocket构建实时通信应用...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-06-10',
    readCount: '2.1k',
    type: 'markdown',
    tags: ['WebSocket', '实时通信'],
    content: `# 前端WebSocket应用

## 1. WebSocket基础

WebSocket协议和API的使用。

## 2. 实时应用

构建实时聊天和通知系统。

## 3. 性能优化

WebSocket连接的管理和优化。`,
    toc: [
      { id: '', title: '1. WebSocket基础', level: 2 },
      { id: '', title: '2. 实时应用', level: 2 },
      { id: '', title: '3. 性能优化', level: 2 }
    ]
  },
  {
    id: 45,
    title: '前端缓存策略',
    description: '设计高效的前端缓存策略，提升应用性能...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-06-05',
    readCount: '2.2k',
    type: 'rich-text',
    tags: ['缓存策略', '性能优化'],
    content: `<h2>1. 浏览器缓存</h2><p>HTTP缓存和Service Worker缓存。</p><h2>2. 应用缓存</h2><p>Redux Persist等状态缓存方案。</p>`,
    toc: [
      { id: '', title: '1. 浏览器缓存', level: 2 },
      { id: '', title: '2. 应用缓存', level: 2 }
    ]
  },
  {
    id: 46,
    title: '前端错误监控',
    description: '构建前端错误监控系统，及时发现和修复问题...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-05-30',
    readCount: '1.9k',
    type: 'markdown',
    tags: ['错误监控', '前端监控'],
    content: `# 前端错误监控

## 1. 错误捕获

try-catch和window.onerror的使用。

## 2. 监控工具

Sentry等错误监控工具的集成。

## 3. 错误分析

错误数据的分析和处理。`,
    toc: [
      { id: '', title: '1. 错误捕获', level: 2 },
      { id: '', title: '2. 监控工具', level: 2 },
      { id: '', title: '3. 错误分析', level: 2 }
    ]
  },
  {
    id: 47,
    title: '前端国际化最佳实践',
    description: '构建支持多语言的前端应用，实现无缝国际化...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/9228.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-05-25',
    readCount: '2.3k',
    type: 'rich-text',
    tags: ['国际化', 'i18n'],
    content: `<h2>1. 国际化库选择</h2><p>i18next、react-i18next等库的对比。</p><h2>2. 翻译管理</h2><p>使用专业工具管理翻译文件。</p>`,
    toc: [
      { id: '', title: '1. 国际化库选择', level: 2 },
      { id: '', title: '2. 翻译管理', level: 2 }
    ]
  },
  {
    id: 48,
    title: '前端性能预算',
    description: '设置和监控前端性能预算，确保应用性能...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-05-20',
    readCount: '2.1k',
    type: 'video',
    tags: ['性能预算', '性能监控'],
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7nc',
    duration: '36:45',
    content: null
  },
  {
    id: 49,
    title: '前端架构演进',
    description: '从传统MVC到现代微前端，前端架构的演进历程...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-05-15',
    readCount: '2.6k',
    type: 'rich-text',
    tags: ['前端架构', '架构演进'],
    content: `<h2>1. 架构演进历程</h2><p>从MVC到微前端的发展。</p><h2>2. 现代架构模式</h2><p>组件化、服务化等现代架构模式。</p>`,
    toc: [
      { id: '', title: '1. 架构演进历程', level: 2 },
      { id: '', title: '2. 现代架构模式', level: 2 }
    ]
  },
  {
    id: 50,
    title: '前端未来趋势',
    description: '展望前端技术的未来发展趋势和方向...',
    coverImage: 'https://assets.mockplus.cn/ai/newImages/pexels/974.jpg',
    author: {
      name: 'XXX',
      avatar: 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg'
    },
    publishDate: '2025-05-10',
    readCount: '2.8k',
    type: 'markdown',
    tags: ['前端趋势', '技术展望'],
    content: `# 前端未来趋势

## 1. 技术趋势

WebAssembly、WebGPU等新技术的发展。

## 2. 开发模式

低代码、无代码等新开发模式。

## 3. 架构趋势

微前端、Serverless等架构的普及。`,
    toc: [
      { id: '', title: '1. 技术趋势', level: 2 },
      { id: '', title: '2. 开发模式', level: 2 },
      { id: '', title: '3. 架构趋势', level: 2 }
    ]
  }
]

export const getArticleById = (id) => {
  return mockArticles.find(article => article.id === parseInt(id))
}

export const getHomeArticles = () => {
  return mockArticles
}

export default mockArticles
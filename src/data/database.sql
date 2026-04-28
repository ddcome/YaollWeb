-- 数据库表结构设计

-- 用户表
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 文章表
CREATE TABLE IF NOT EXISTS articles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    cover_image VARCHAR(255) NOT NULL,
    author_id INT NOT NULL,
    publish_date DATE NOT NULL,
    read_count VARCHAR(50) NOT NULL,
    type ENUM('rich-text', 'markdown', 'video') NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- 标签表
CREATE TABLE IF NOT EXISTS tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 文章标签关联表
CREATE TABLE IF NOT EXISTS article_tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    article_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (article_id) REFERENCES articles(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id),
    UNIQUE KEY (article_id, tag_id)
);

-- 文章目录表
CREATE TABLE IF NOT EXISTS article_toc (
    id INT PRIMARY KEY AUTO_INCREMENT,
    article_id INT NOT NULL,
    toc_id VARCHAR(100),
    title VARCHAR(255) NOT NULL,
    level INT NOT NULL,
    order_index INT NOT NULL,
    FOREIGN KEY (article_id) REFERENCES articles(id)
);

-- 视频表
CREATE TABLE IF NOT EXISTS videos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    article_id INT NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    duration VARCHAR(20) NOT NULL,
    FOREIGN KEY (article_id) REFERENCES articles(id)
);

-- 初始化数据

-- 插入用户数据
INSERT INTO users (name, avatar) VALUES 
('XXX', 'https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg');

-- 插入标签数据
INSERT INTO tags (name) VALUES 
('前端开发'), ('框架对比'), ('技术趋势'), ('JavaScript'), ('异步编程'),
('CSS'), ('Tailwind'), ('React'), ('性能优化'), ('Node.js'),
('微服务'), ('架构'), ('TypeScript'), ('类型系统'), ('Grid布局'),
('Server Components'), ('WebAssembly'), ('Docker'), ('容器化'),
('Vue 3'), ('Composition API'), ('响应式设计'), ('前端安全'),
('Web安全'), ('开发技巧'), ('前端工程化'), ('DevOps'),
('Hooks'), ('动画'), ('状态管理'), ('前端架构'),
('前端测试'), ('Jest'), ('性能监控'), ('前端监控'),
('国际化'), ('i18n'), ('前端架构'), ('设计原则'),
('组件库'), ('安全审计'), ('案例分析'), ('开发工具'),
('数据可视化'), ('Chart.js'), ('无障碍设计'), ('WCAG'),
('PWA'), ('渐进式Web应用'), ('WebRTC'), ('实时通信'),
('GraphQL'), ('API设计'), ('微前端'), ('架构设计'),
('预处理器'), ('React Native'), ('移动开发'), ('SSR'),
('服务端渲染'), ('WebSocket'), ('缓存策略'), ('错误监控'),
('前端监控');
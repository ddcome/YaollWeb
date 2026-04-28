# YaollWeb 后端API接口文档

## 1. 接口概览

| 模块 | 功能 | 接口 | 方法 |
|------|------|------|------|
| 文章管理 | 获取文章列表 | /api/articles | GET |
| 文章管理 | 获取文章详情 | /api/articles/{id} | GET |
| 文章管理 | 获取相关文章 | /api/articles/{id}/related | GET |
| 文章管理 | 文章点赞 | /api/articles/{id}/like | POST |
| 文章管理 | 文章收藏 | /api/articles/{id}/collect | POST |
| 视频管理 | 获取视频列表 | /api/videos | GET |
| 视频管理 | 获取视频详情 | /api/videos/{id} | GET |
| 视频管理 | 获取相关视频 | /api/videos/{id}/related | GET |
| 视频管理 | 视频点赞 | /api/videos/{id}/like | POST |
| 视频管理 | 视频收藏 | /api/videos/{id}/collect | POST |
| 评论管理 | 获取评论列表 | /api/comments | GET |
| 评论管理 | 发布评论 | /api/comments | POST |
| 评论管理 | 评论点赞 | /api/comments/{id}/like | POST |
| 用户管理 | 获取用户信息 | /api/users/{id} | GET |
| 标签管理 | 获取标签列表 | /api/tags | GET |
| 搜索管理 | 全局搜索 | /api/search | GET |

## 2. 详细接口说明

### 2.1 文章管理接口

#### 2.1.1 获取文章列表
- **接口**：`/api/articles`
- **方法**：`GET`
- **功能**：获取文章列表，支持分页、类型筛选、标签筛选和排序
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | page | number | 否 | 页码，默认1 |
  | pageSize | number | 否 | 每页数量，默认6 |
  | type | string | 否 | 文章类型，可选值：rich-text, markdown, video |
  | tag | string | 否 | 标签筛选 |
  | sort | string | 否 | 排序方式，可选值：latest, popular, featured |
  | search | string | 否 | 搜索关键词 |
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "title": "深入理解现代前端框架的演进与未来趋势",
          "description": "探索2023年前端开发的最新趋势和技术栈选择...",
          "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png",
          "author": {
            "id": 1,
            "name": "XXX",
            "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg"
          },
          "publishDate": "2026-03-15",
          "readCount": "2.4k",
          "type": "rich-text",
          "tags": ["前端开发", "框架对比", "技术趋势"],
          "duration": null
        }
      ],
      "total": 50,
      "page": 1,
      "pageSize": 6,
      "hasMore": true
    }
  }
  ```

#### 2.1.2 获取文章详情
- **接口**：`/api/articles/{id}`
- **方法**：`GET`
- **功能**：获取文章详细信息
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | id | number | 是 | 文章ID |
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "title": "深入理解现代前端框架的演进与未来趋势",
      "description": "探索2023年前端开发的最新趋势和技术栈选择...",
      "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png",
      "author": {
        "id": 1,
        "name": "XXX",
        "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg"
      },
      "publishDate": "2026-03-15",
      "readCount": "2.4k",
      "type": "rich-text",
      "tags": ["前端开发", "框架对比", "技术趋势"],
      "content": "<h2 id=\"intro\">1. 引言</h2><p>在过去的十年中，前端开发经历了翻天覆地的变化...</p>",
      "toc": [
        { "id": "intro", "title": "1. 引言", "level": 2 },
        { "id": "frameworks", "title": "2. 前端主流框架", "level": 2 }
      ]
    }
  }
  ```

#### 2.1.3 获取相关文章
- **接口**：`/api/articles/{id}/related`
- **方法**：`GET`
- **功能**：获取与指定文章相关的文章列表
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | id | number | 是 | 文章ID |
  | limit | number | 否 | 返回数量，默认4 |
- **响应**：
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": 2,
        "title": "JavaScript异步编程完全指南",
        "description": "深入理解Promise、async/await和事件循环机制...",
        "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg",
        "readCount": "1.8k",
        "publishDate": "2026-02-28"
      }
    ]
  }
  ```

#### 2.1.4 文章点赞
- **接口**：`/api/articles/{id}/like`
- **方法**：`POST`
- **功能**：给文章点赞
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | id | number | 是 | 文章ID |
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "liked": true,
      "likeCount": 250
    }
  }
  ```

### 2.2 视频管理接口

#### 2.2.1 获取视频列表
- **接口**：`/api/videos`
- **方法**：`GET`
- **功能**：获取视频列表，支持分页和排序
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | page | number | 否 | 页码，默认1 |
  | pageSize | number | 否 | 每页数量，默认6 |
  | sort | string | 否 | 排序方式，可选值：latest, popular |
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 5,
          "title": "Node.js微服务架构设计实践",
          "description": "如何使用Node.js构建可扩展的微服务架构...",
          "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg",
          "author": {
            "id": 1,
            "name": "XXX",
            "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg"
          },
          "publishDate": "2026-01-12",
          "readCount": "1.5k",
          "duration": "45:20",
          "videoUrl": "https://www.bilibili.com/video/BV1xx411c7mu"
        }
      ],
      "total": 15,
      "page": 1,
      "pageSize": 6,
      "hasMore": true
    }
  }
  ```

#### 2.2.2 获取视频详情
- **接口**：`/api/videos/{id}`
- **方法**：`GET`
- **功能**：获取视频详细信息
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | id | number | 是 | 视频ID |
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "id": 5,
      "title": "Node.js微服务架构设计实践",
      "description": "如何使用Node.js构建可扩展的微服务架构...",
      "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/6654.jpg",
      "author": {
        "id": 1,
        "name": "XXX",
        "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg"
      },
      "publishDate": "2026-01-12",
      "readCount": "1.5k",
      "duration": "45:20",
      "videoUrl": "https://www.bilibili.com/video/BV1xx411c7mu",
      "tags": ["Node.js", "微服务", "架构"]
    }
  }
  ```

#### 2.2.3 获取相关视频
- **接口**：`/api/videos/{id}/related`
- **方法**：`GET`
- **功能**：获取与指定视频相关的视频列表
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | id | number | 是 | 视频ID |
  | limit | number | 否 | 返回数量，默认5 |
- **响应**：
  ```json
  {
    "code": 200,
    "data": [
      {
        "id": 6,
        "title": "云原生应用开发从入门到精通",
        "description": "从容器化到Kubernetes，构建现代化云原生应用...",
        "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/8853.jpg",
        "duration": "38:15",
        "readCount": "2.2k"
      }
    ]
  }
  ```

### 2.3 评论管理接口

#### 2.3.1 获取评论列表
- **接口**：`/api/comments`
- **方法**：`GET`
- **功能**：获取评论列表，支持按文章/视频ID筛选
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | targetId | number | 是 | 文章或视频ID |
  | targetType | string | 是 | 目标类型，可选值：article, video |
  | page | number | 否 | 页码，默认1 |
  | pageSize | number | 否 | 每页数量，默认10 |
  | sort | string | 否 | 排序方式，可选值：hot, latest |
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "content": "非常详细的分析！对React和Vue的对比很到位...",
          "author": {
            "id": 2,
            "name": "张明",
            "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg"
          },
          "createdAt": "2026-03-16",
          "likeCount": 156
        }
      ],
      "total": 21,
      "page": 1,
      "pageSize": 10,
      "hasMore": true
    }
  }
  ```

#### 2.3.2 发布评论
- **接口**：`/api/comments`
- **方法**：`POST`
- **功能**：发布评论
- **请求体**：
  ```json
  {
    "targetId": 1,
    "targetType": "article",
    "content": "这是一条评论内容"
  }
  ```
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "id": 22,
      "content": "这是一条评论内容",
      "author": {
        "id": 1,
        "name": "当前用户",
        "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg"
      },
      "createdAt": "2026-04-27"
    }
  }
  ```

### 2.4 用户管理接口

#### 2.4.1 获取用户信息
- **接口**：`/api/users/{id}`
- **方法**：`GET`
- **功能**：获取用户详细信息
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | id | number | 是 | 用户ID |
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "id": 1,
      "name": "XXX",
      "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg",
      "bio": "专注前端技术与人工智能",
      "website": "https://example.com",
      "socialLinks": {
        "github": "https://github.com/xxx",
        "twitter": "https://twitter.com/xxx"
      }
    }
  }
  ```

### 2.5 标签管理接口

#### 2.5.1 获取标签列表
- **接口**：`/api/tags`
- **方法**：`GET`
- **功能**：获取所有标签列表
- **参数**：无
- **响应**：
  ```json
  {
    "code": 200,
    "data": [
      { "id": 1, "name": "前端开发" },
      { "id": 2, "name": "JavaScript" },
      { "id": 3, "name": "React" }
    ]
  }
  ```

### 2.6 搜索管理接口

#### 2.6.1 全局搜索
- **接口**：`/api/search`
- **方法**：`GET`
- **功能**：搜索文章和视频
- **参数**：
  | 参数名 | 类型 | 必填 | 描述 |
  |--------|------|------|------|
  | keyword | string | 是 | 搜索关键词 |
  | page | number | 否 | 页码，默认1 |
  | pageSize | number | 否 | 每页数量，默认10 |
  | type | string | 否 | 搜索类型，可选值：article, video, all |
- **响应**：
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": 1,
          "title": "深入理解现代前端框架的演进与未来趋势",
          "description": "探索2023年前端开发的最新趋势和技术栈选择...",
          "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png",
          "type": "article",
          "publishDate": "2026-03-15",
          "readCount": "2.4k"
        }
      ],
      "total": 15,
      "page": 1,
      "pageSize": 10,
      "hasMore": true
    }
  }
  ```

## 3. 数据模型

### 3.1 文章模型

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | number | 文章ID |
| title | string | 标题 |
| description | string | 描述 |
| coverImage | string | 封面图URL |
| authorId | number | 作者ID |
| publishDate | date | 发布日期 |
| readCount | string | 阅读量 |
| type | string | 类型（rich-text, markdown, video） |
| content | text | 内容 |
| createdAt | timestamp | 创建时间 |
| updatedAt | timestamp | 更新时间 |

### 3.2 视频模型

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | number | 视频ID |
| articleId | number | 关联的文章ID |
| videoUrl | string | 视频URL |
| duration | string | 时长 |

### 3.3 用户模型

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | number | 用户ID |
| name | string | 用户名 |
| avatar | string | 头像URL |
| bio | string | 个人简介 |
| website | string | 个人网站 |
| socialLinks | json | 社交链接 |
| createdAt | timestamp | 创建时间 |

### 3.4 评论模型

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | number | 评论ID |
| targetId | number | 目标ID（文章或视频） |
| targetType | string | 目标类型 |
| content | text | 评论内容 |
| authorId | number | 作者ID |
| likeCount | number | 点赞数 |
| createdAt | timestamp | 创建时间 |

### 3.5 标签模型

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | number | 标签ID |
| name | string | 标签名称 |
| createdAt | timestamp | 创建时间 |

### 3.6 文章标签关联模型

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | number | 关联ID |
| articleId | number | 文章ID |
| tagId | number | 标签ID |

### 3.7 文章目录模型

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | number | 目录ID |
| articleId | number | 文章ID |
| tocId | string | 目录ID |
| title | string | 目录标题 |
| level | number | 层级 |
| orderIndex | number | 排序索引 |

## 4. 错误码

| 错误码 | 描述 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |
| 401 | 未授权 |
| 403 | 禁止访问 |

## 5. 接口使用示例

### 5.1 获取文章列表

**请求**：
```bash
GET /api/articles?page=1&pageSize=6&type=rich-text
```

**响应**：
```json
{
  "code": 200,
  "data": {
    "list": [
      {
        "id": 1,
        "title": "深入理解现代前端框架的演进与未来趋势",
        "description": "探索2023年前端开发的最新趋势和技术栈选择...",
        "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png",
        "author": {
          "id": 1,
          "name": "XXX",
          "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg"
        },
        "publishDate": "2026-03-15",
        "readCount": "2.4k",
        "type": "rich-text",
        "tags": ["前端开发", "框架对比", "技术趋势"]
      }
    ],
    "total": 20,
    "page": 1,
    "pageSize": 6,
    "hasMore": true
  }
}
```

### 5.2 获取文章详情

**请求**：
```bash
GET /api/articles/1
```

**响应**：
```json
{
  "code": 200,
  "data": {
    "id": 1,
    "title": "深入理解现代前端框架的演进与未来趋势",
    "description": "探索2023年前端开发的最新趋势和技术栈选择...",
    "coverImage": "https://assets.mockplus.cn/ai/newImages/pexels/xcxcode.png",
    "author": {
      "id": 1,
      "name": "XXX",
      "avatar": "https://assets.mockplus.cn/ai/newImages/pexels/9877.jpg"
    },
    "publishDate": "2026-03-15",
    "readCount": "2.4k",
    "type": "rich-text",
    "tags": ["前端开发", "框架对比", "技术趋势"],
    "content": "<h2 id=\"intro\">1. 引言</h2><p>在过去的十年中，前端开发经历了翻天覆地的变化...</p>",
    "toc": [
      { "id": "intro", "title": "1. 引言", "level": 2 },
      { "id": "frameworks", "title": "2. 前端主流框架", "level": 2 }
    ]
  }
}
```

## 6. 部署说明

### 6.1 环境要求
- Node.js 14.0+
- MongoDB 4.0+ 或 MySQL 8.0+
- Redis（可选，用于缓存）

### 6.2 配置文件

```json
{
  "server": {
    "port": 3000,
    "host": "localhost"
  },
  "database": {
    "type": "mongodb",
    "url": "mongodb://localhost:27017/yaollweb"
  },
  "jwt": {
    "secret": "your-secret-key",
    "expiresIn": "7d"
  },
  "cors": {
    "origin": "*"
  }
}
```

### 6.3 启动命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```
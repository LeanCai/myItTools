# cnb.cool + EdgeOne Pages 部署指南

## 🚀 快速部署（5分钟）

### 1. 注册 cnb.cool
- 访问 [cnb.cool](https://cnb.cool)，使用腾讯云账号登录

### 2. 创建仓库
- 在 cnb.cool 创建新仓库
- 将代码推送到 cnb.cool 仓库（分支：`cnb-cool-edgeone`）

### 3. 配置 EdgeOne Pages
- 进入仓库 → 设置 → EdgeOne Pages
- 点击「授权绑定」
- 配置如下：
  - **构建命令**：`pnpm install && pnpm run build`
  - **输出目录**：`dist`
  - **重写规则**：`/* /index.html 200`（SPA 必加）

### 4. 推送代码
```bash
git push origin cnb-cool-edgeone
```

## 📋 配置说明

### 环境变量
- `BASE_URL`：默认 `/`，部署到 EdgeOne Pages 时使用根路径

### 构建配置
```yaml
# cnb.cool 自动构建配置（可直接复制）
build:
  command: pnpm install && pnpm run build
  output_dir: dist
```

### 重写规则（SPA 应用）
```
/* /index.html 200
```

## 🌐 访问地址
部署成功后，访问地址类似：
- `https://your-project.edgepages.dev`

## 🎯 优势
- ✅ 国内访问极快（腾讯 CDN）
- ✅ 永久免费
- ✅ 自动 HTTPS
- ✅ 支持自定义域名
- ✅ 无需备案（使用 edgepages.dev 域名）

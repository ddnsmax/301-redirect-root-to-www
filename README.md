# 301 跳转项目

这个项目可以同时支持：

- EdgeOne Pages
- Cloudflare Pages

## 环境变量

只需要设置 1 个环境变量：

```bash
TARGET_URL=https://www.baidu.com
```

说明：

- `TARGET_URL` 就是你要跳转到的目标地址
- 建议带上 `https://`
- 末尾带不带 `/` 都可以
- 改完环境变量后，重新部署一次

## Cloudflare Pages

这个项目不是框架项目，创建项目时这样填：

- Framework preset：None
- Root directory：`/`
- Build command：`exit 0`
- Build output directory：`public`
- Install command：留空

然后再到：

- Settings → Environment variables

新增：

```bash
TARGET_URL=https://www.baidu.com
```

## EdgeOne Pages

创建项目时这样填：

- Framework preset：不选或选 Other
- Root directory：`/`
- Output directory：`/`
- Build command：留空
- Install command：留空

然后到环境变量里新增：

```bash
TARGET_URL=https://www.baidu.com
```

## 目录说明

- `edge-functions/`：给 EdgeOne Pages 用
- `functions/`：给 Cloudflare Pages 用
- `public/_routes.json`：让 Cloudflare Pages 所有路径都走 Functions

## 使用方法

1. 把代码Fork到自己仓库
2. 在 Cloudflare Pages 或 EdgeOne Pages 导入仓库
3. 按上面的参数填写
4. 设置 `TARGET_URL`
5. 部署完成后访问域名即可

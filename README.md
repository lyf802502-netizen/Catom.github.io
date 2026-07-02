# Catom.github.io

这是一个从 Gmeek 模板改造而来的个人静态主页项目。当前版本只使用原生 HTML、CSS、JavaScript，不再依赖 Gmeek、Issue 生成文章或 Python 构建流程。

## 目录结构

```text
docs/
  index.html    # 页面结构
  styles.css    # 页面样式与响应式布局
  main.js       # 主题切换、导航高亮等交互
.github/workflows/pages.yml  # GitHub Pages 静态部署流程
```

## 本地预览

直接用浏览器打开 `docs/index.html` 即可预览。也可以使用任意静态服务器预览 `docs` 目录。

## 部署到 GitHub Pages

1. 将代码 push 到 GitHub 的 `main` 分支。
2. 进入仓库 `Settings -> Pages`。
3. 将 `Build and deployment -> Source` 设置为 `GitHub Actions`。
4. 等待 `Deploy static site` 工作流执行完成。

如果使用当前远程仓库地址，页面通常会部署到：

```text
https://lyf802502-netizen.github.io/Catom.github.io/
```

## 修改个人信息

主要内容集中在 `docs/index.html`：

- 修改标题、简介和联系方式。
- 替换 GitHub 链接。
- 在「项目展示」区域补充真实项目。
- 如需替换头像，修改 `.avatar` 图片的 `src`。

import { defineConfig } from "vitepress";
import { nav, sidebar } from "../config";
import { type DefaultTheme } from "vitepress/types/default-theme";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",

  // 站点的标题。使用默认主题时，这将显示在导航栏中
  title: "iMatebook",

  description:
    "技术博客，专注学习与总结。专注 Android/Java/Kotlin、Flutter/Dart跨平台、UniApp 跨平台、Vue/JavaScript/TypeScript/ES6/css3、以及Node、git、github等技术文章",

  // 站点将部署到的 base URL。
  // 默认情况下，我们假设站点将部署在域名 （/）的根路径上。如果站点在子路径中提供服务，例如 https://website.com/imatebook/，则需要在 VitePress 配置中将 base选项设置为 '/imatebook/'
  // base: "/imatebook",

  // markdown 页面的目录，相对于项目根目录。
  srcDir: "./src",

  // 项目的构建输出位置，相对于项目根目录。默认值： ./.vitepress/dist
  outDir: "../dist",

  // 指定放置生成的静态资源的目录。默认值：assets。该路径应位于 outDir 内，并相对于它进行解析。
  // assetsDir: "static",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/logo.png",

    // 导航栏
    nav: nav,

    // 侧边栏
    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/dongfangwangyou" },
    ],

    // 本地搜索。VitePress支持使用浏览器内置索引进行模糊全文搜索，这得益于minisearch
    search: {
      provider: "local",
    },
    footer: {
      message:
        '基于 <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a> 许可发布',
      copyright:
        'Copyright © 2019-2024 <a href="https://github.com/dongfangwangyou">dongfangwangyou</a>',
    },
    notFound: {
      code: "404",
      title: "未找到相关内容哟~",
      quote: "作者正在奋笔疾书，请您耐心等待...",
      linkText: "返回首页",
    },
  },

  // vite 配置
  // vite: {},

  // vue 配置
  // vue: {},

  // Markdown 配置
  // markdown: {},
});

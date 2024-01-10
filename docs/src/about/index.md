---
# 页面的标题。它与 config.title 相同，并且覆盖站点级配置
title: 关于

# 标题的后缀。它与 config.titleTemplate 相同，它会覆盖站点级别的配置
titleTemplate: About

# 页面的描述。它与 config.description 相同，它会覆盖站点级别的配置
description: 关于我

# 指定要为当前页面注入的额外 head 标签。将附加在站点级配置注入的头部标签之后。
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO

# 指定页面的布局。默认值：doc
# doc——它将默认文档样式应用于 markdown 内容
# home——“主页”的特殊布局。可以添加额外的选项，例如 hero 和 features，以快速创建漂亮的落地页
# page——表现类似于 doc，但它不对内容应用任何样式。当想创建一个完全自定义的页面时很有用
layout: doc

# 是否显示导航栏。默认值：true
navbar: true

# 是否显示 侧边栏。默认值：true
sidebar: false

# 定义侧边栏组件在 doc 布局中的位置。默认值：true
# 将此值设置为 false 可禁用侧边栏容器。
# 将此值设置为 true 会将侧边栏渲染到右侧。
# 将此值设置为 left 会将侧边栏渲染到左侧
aside: false

# 大纲中显示的标题级别。默认值：2。它与 config.themeConfig.outline.level 相同，它会覆盖站点级的配置。
outline: 2

# 是否在当前页面的页脚中显示最近更新时间的文本。默认值：false。如果指定了日期时间，则会显示该日期时间而不是上次 git 修改的时间戳
lastUpdated: false

# 是否在当前页的页脚显示编辑链接。默认值：true
editLink: false

# 是否显示页脚。默认值：true
footer: false
---

# 关于

## 📚Blog

这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是 Android/Java/Kotlin、Flutter/Dart、Vue/JS/TS、以及 UniApp、快应用、微信/抖音/快手小程序等技术。

将产品的灵感、开发遇到的问题、以及学习笔记、经典面试题库等资料汇总整理。

即是分享，也是沉淀。

如果你喜欢这个博客&主题欢迎到[GitHub](https://github.com/dongfangwangyou/imatebook)点个 Star，

<!-- 或者交换[友链](/friends/) ( •̀ ω •́ )✧ -->

:::tip
文章内容仅是我个人的小总结，资历尚浅，如有误还请指正。
:::

[更新日志](https://github.com/dongfangwangyou/imatebook/commits/master)

## 🎨Theme

[<img src="https://github-readme-stats.vercel.app/api/pin/?username=xugaoyi&amp;repo=vuepress-theme-vdoing" alt="ReadMe Card" class="no-zoom">](https://github.com/dongfangwangyou/imatebook)
[<img src="https://github-readme-stats.vercel.app/api/pin/?username=xugaoyi&amp;repo=vuepress-theme-vdoing-doc" alt="ReadMe Card" class="no-zoom">](https://doc.xugaoyi.com/)

本站主题是 [`iMatebook`](https://github.com/dongfangwangyou/imatebook)，这是一款简洁高效的 vitePress 知识管理&博客 主题。旨在轻松打造一个`结构化`与`碎片化`并存的个人在线知识库&博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ [Github 地址](https://github.com/dongfangwangyou/imatebook) | [在线 vscode 预览源码](https://github1s.com/xugaoyi/vuepress-theme-vdoing)

## 赞助商

> 进入以下链接注册一下，赞助商会为博主赞助一笔小费，感谢~

<p align="center">
<a href="http://apifox.cn/a103xugaoyi" target="_blank"><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/blog-gitalk-comment@master/img/Apifox-860x320.ic7tz1417sw.png" alt="赞助商" style="width: 400px;border-radius: 2px;"></a>
</p>

## 🐼Me

web 前端小学生

### 技能

- 熟悉 JavaScript、HTML、CSS、Vue、React 的拼写
- 了解 Linux、windows、macOS 的开关机方式
- 精通 Git 的 pull 和 push，并注册了 GitHub 帐号刷了一些 star

<!-- 本人↓↓↓ -->

## 前端学习

<br/>
<img src="https://open.weixin.qq.com/qr/code?username=gh_0cf4b813918c"  style="width:100px;" />
关注公众号，回复`前端资源`，即可获取这些 [前端学习资源](https://github.com/xugaoyi/blog-gitalk-comment/wiki/Front-end-Study)。

## :email: 联系

- 微信 或 QQ: <a :href="qqUrl" class='qq'>{{ QQ }}</a>
- Email: <a href="mailto:dongfangwangyou@126.com">dongfangwangyou@126.com</a>
- GitHub: <https://github.com/dongfangwangyou>
  <!-- - Vdoing主题文档：<https://doc.xugaoyi.com> -->
  <!-- - Vdoing交流QQ群：694387113 -->

<!-- 运行时API -->
<script setup>
    import { ref} from 'vue';
    const QQ = '980635625'
    const qqUrl = ref(`tencent://message/?uin=${QQ}&Site=&Menu=yes`)
    // mounted(()=>{
    //     const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    //     if(flag){
    //         qqUrl.value = `mqqwpa://im/chat?chat_type=wpa&uin=${this.QQ}&version=1&src_type=web&web_src=oicqzone.com`
    //     }
    // })
</script>

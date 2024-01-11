---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: iMatebook
  text: 关于技术的、工作的、学习的、生活的...
  tagline: Android & Kotlin & Java、Flutter & Dart、JS & CSS & HTML & TS & Vue、以及 uniApp、快应用、微信 & 抖音 & 快手小程序...
  image:
    src: "https://istatic.netlify.app/blog/logo_large.png"
    alt: logo
  actions:
    - theme: brand
      text: 开始学习之旅
      link: /android/
    - theme: alt
      text: API 速查
      link: /api

features:
  - title: Android
    details: AS、基础、进阶、FFMPEG、优秀三方库或解决方案、以及《避坑指南》与《面试宝典》
    link: /android/
  - title: Flutter
    details: Flutter 基础、Flutter进阶、以及《避坑指南》与《面试宝典》
    link: /flutter/
  - title: Web
    details: JS、CSS、HTML、TS、Vue、以及《避坑指南》与《面试宝典》
    link: /web/
  - title: uniApp
    details: HBuild X、uni-app、uniCloud、以及《避坑指南》与《面试宝典》
    link: /uni/
  - title: 快应用
    details: IDE、以及《避坑指南》与《面试宝典》
    link: /quick-app/
  - title: 小程序
    details: 微信小程序、抖音小程序、快手小程序等、以及《避坑指南》与《面试宝典》
    link: /applet/
---

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<div :class="$style.layout">
   <h2 :class="$style.h2">特色功能</h2>
   <h4 :class="$style.h4">一站式技术搜索</h4>
   <div>本站内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档,快速到达你想要找的内容。</div>
   <h4 :class="$style.h4">深色模式</h4>
   <div>关爱程序员，保护视力，点击右上角的主题模式按钮试试吧~</div>
   The count is: {{ count }}
  <button :class="$style.button" @click="count++">Increment</button>
</div>

<style module>
.layout {
    margin:0 12vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.h2 {
    margin: 20px 0 5px;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
}
.h4 {
    margin: 10px 0 5px;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
}
.button {
  color: red;
  font-weight: bold;
}
</style>

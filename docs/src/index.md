---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# layout = home 时，自定义博客列表样式（目前只支持list一种样式），默认不显示，
nativeBlog: list,

hero:
  name: iMatebook
  text: 关于技术的、工作的、学习的、生活的...
  tagline: Android & Kotlin & Java、Flutter & Dart、JS & CSS & HTML & TS & Vue、以及 uniApp、快应用、微信 & 抖音 & 快手小程序...
  image:
    src: "https://icdn.netlify.app/blog/logo_large.png"
    alt: logo
  actions:
    - theme: brand
      text: 项目速览
      link: /about/product
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
.button {
  color: red;
  font-weight: bold;
}
</style>

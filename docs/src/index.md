---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: iMatebook
  text: 关于技术的、工作的、学习的、生活的...
  tagline: Android & Kotlin & Java、Flutter & Dart、HTML & CSS & JS & TS & Vue、以及 uniApp、快应用、微信 & 抖音 & 快手小程序...
  image:
    src: "/images/logo_large.png"
    alt: logo
  actions:
    - theme: brand
      text: 全部项目
      link: /pages/about/product/
    - theme: alt
      text: 技术博客
      link: /pages/technology/blog/

features:
  - title: 优秀项目
    details: 点击查看全部项目
    link: /pages/about/product/
  - title: 精选博客
    details: 精选技术博客
    link: /pages/technology/blog/
  - title: API 速查
    details: Android、Flutter、JS 等API速查
    link: /web/
  - title: 命令速查
    details: flutter、npm 等命令速查
    link: /web/
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

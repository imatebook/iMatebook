<script setup lang="ts">
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
const { theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()

</script>

<template>
  <footer v-if="theme.footer && frontmatter.footer !== false" class="n-footer" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <p class="link">
        <a href="/pages/about/" target="_self">关于我们</a>
        <a href="/pages/about/me" target="_self">关于作者</a>
        <a href="/pages/about/product/" target="_self">我的项目</a>
        <a href="/pages/about/product/" target="_self">项目经历</a>
      </p>
      <p v-if="theme.footer.message" class="message" v-html="theme.footer.message"></p>
      <p v-if="theme.footer.createYear && theme.footer.copyrightHtml" class="copyright">
        <span v-if="theme.footer.createYear">Copyright © {{ theme.footer.createYear }}-{{ new Date().getFullYear()
        }}</span>
        <span v-html="theme.footer.copyrightHtml"></span>
      </p>
      <p v-else-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright"></p>
    </div>
  </footer>
</template>

<style scoped>
.n-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);


}

.n-footer.has-sidebar {
  display: none;
}

.n-footer :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.n-footer :deep(a:hover) {
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .n-footer {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.link,
.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link a {
  margin: 0 10px;
  font-weight: 500;
  text-decoration: none;
}

.link a :hover {
  color: aqua;
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
const { theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()

</script>

<template>
  <footer v-if="theme.footer && frontmatter.footer !== false" class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <p class="link">
        <a href="/about/" target="_self">关于我们</a>
        <a href="/about/me" target="_self">关于作者</a>
        <a href="/about/product" target="_self">关于项目</a>
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
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.VPFooter.has-sidebar {
  display: none;
}

.VPFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .VPFooter {
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
  text-decoration: none;
  margin: 0 10px;
}
</style>

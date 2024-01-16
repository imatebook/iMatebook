// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import NativeBlogList from "../../native/components/NativeBlogList.vue";
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "home-features-after": () => h(NativeBlogList),
    });
  },
  // Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;

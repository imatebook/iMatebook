// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "../../native/styles/index.scss";
import NativeHomeLayout from "../../native/components/NativeHomeLayout.vue";
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "home-features-after": () => h(NativeHomeLayout),
    });
  },
  // Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    console.log(`====`);
    console.log(siteData);
    // console.log(siteData.value);
    console.log(`====`);
  },
} satisfies Theme;

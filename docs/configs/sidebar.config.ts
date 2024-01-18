import { DefaultTheme } from "vitepress/theme";
export const sidebar: DefaultTheme.Sidebar = {
  "/pages/android/": [
    {
      text: "Android",
      items: [
        {
          text: "Android开发者",
          items: [
            { text: "Android基础", link: "/pages/android/base/" },
            { text: "Android进阶", link: "/pages/android/base/" },
          ],
          collapsed: false,
        },

        {
          text: "Android面试宝典",
          items: [
            {
              text: "Android面试专题：Java基础知识点",
              link: "/pages/android/interview/java/base",
            },
            {
              text: "Android面试专题：常问的基础知识点",
              link: "/pages/android/interview/base/android",
            },
            {
              text: "Android面试专题：性能优化",
              link: "/pages/android/interview/base/android",
            },
          ],
          collapsed: false,
        },
        {
          text: "Kotlin学习笔记",
          link: "/pages/android/kotlin/",
          collapsed: false,
        },
        {
          text: "FFmpeg学习笔记",
          link: "/pages/android/ffmpeg/",
          collapsed: false,
        },
        {
          text: "AndroidStudio使用教程",
          link: "/pages/android/studio/",
          collapsed: false,
        },
      ],
    },
  ],
  "/pages/flutter/": [
    {
      text: "Flutter",
      items: [{ text: "Flutter 基础", link: "/pages/flutter/" }],
    },
  ],
  "/pages/web/": [
    {
      text: "Web开发者",
      items: [
        { text: "HTML", link: "/pages/web/html/" },
        { text: "CSS", link: "/pages/web/css/" },
        { text: "JavaScript", link: "/pages/web/js/" },
      ],
    },
  ],
  "/pages/uni/": [
    {
      text: "UniApp",
      items: [{ text: "UniApp 基础", link: "/pages/uni/" }],
    },
  ],
  "/pages/applet/": [
    {
      text: "小程序",
      items: [{ text: "微信小程序 ", link: "/pages/applet/" }],
    },
  ],
};

import { DefaultTheme } from "vitepress/theme";
export const sidebar: DefaultTheme.Sidebar = {
  "/android/": [
    {
      text: "Android",
      items: [
        {
          text: "Android开发者",
          items: [
            { text: "Android基础", link: "/android/base/" },
            { text: "Android进阶", link: "/android/base/" },
          ],
          collapsed: false,
        },

        {
          text: "Android面试宝典",
          items: [
            {
              text: "Android面试专题：Java基础知识点",
              link: "/android/interview/java/base",
            },
            {
              text: "Android面试专题：常问的基础知识点",
              link: "/android/interview/base/android",
            },
            {
              text: "Android面试专题：性能优化",
              link: "/android/interview/base/android",
            },
          ],
          collapsed: false,
        },
        {
          text: "Kotlin学习笔记",
          link: "/android/kotlin/",
          collapsed: false,
        },
        {
          text: "FFmpeg学习笔记",
          link: "/android/ffmpeg/",
          collapsed: false,
        },
        {
          text: "AndroidStudio使用教程",
          link: "/android/studio/",
          collapsed: false,
        },
      ],
    },
  ],
  "/flutter/": [
    {
      text: "Flutter",
      items: [{ text: "Flutter 基础", link: "/flutter/" }],
    },
  ],
  "/web/": [
    {
      text: "Web开发者",
      items: [
        { text: "HTML", link: "/web/html/" },
        { text: "CSS", link: "/web/css/" },
        { text: "JavaScript", link: "/web/js/" },
      ],
    },
  ],
  "/uni/": [
    {
      text: "UniApp",
      items: [{ text: "UniApp 基础", link: "/uni/" }],
    },
  ],
  "/applet/": [
    {
      text: "小程序",
      items: [{ text: "微信小程序 ", link: "/applet/" }],
    },
  ],
};

export const sidebar = {
  "/android/": [
    {
      text: "Android",
      items: [
        {
          text: "Android 基础",
          items: [{ text: "", link: "/android/base/" }],
          collapsed: false,
        },
        {
          text: "kotlin 基础",
          items: [{ text: "", link: "/android/kotlin/" }],
          collapsed: false,
        },
        {
          text: "Android Studio",
          items: [
            { text: "Android Studio 安装", link: "/android/studio/" },
            { text: "Android Studio 配置", link: "/android/studio/" },
          ],
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
      text: "Web",
      items: [{ text: "Web 基础", link: "/web/" }],
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

import { DefaultTheme } from "vitepress/theme";
export const nav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "技术",
    items: [
      {
        text: "技术文档",
        items: [
          { text: "《Git 使用教程》", link: "/technology/git/" },
          { text: "《Markdown 使用教程》", link: "/technology/md/" },
        ],
      },
      {
        text: "解决方案",
        items: [
          { text: "FFmpeg 音视频", link: "https://github.com/FFmpeg/FFmpeg" },
          {
            text: "Tencent RTC 实时音视频",
            link: "https://cloud.tencent.com/product/trtc",
          },
          { text: "Agora RTC 实时音视频", link: "https://www.shengwang.cn/" },
          { text: "ZEGO RTC 实时音视频", link: "https://www.zego.im/" },
          { text: "UMeng", link: "https://www.umeng.com/" },
          { text: "Bugly", link: "https://bugly.qq.com/v2/" },
        ],
      },
      {
        text: "技术博客",
        items: [{ text: "", link: "/technology/blog/" }],
      },
    ],
  },

  {
    text: "Android",
    // activeMatch: "/android/",
    // base: "/android/",
    items: [
      {
        text: "Android基础",
        items: [{ text: "", link: "/android/base/" }],
      },
      {
        text: "Android进阶",
        items: [{ text: "", link: "/android/base/" }],
      },
      {
        text: "",
        items: [{ text: "kotlin 基础", link: "https://book.kotlincn.net/" }],
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
      },
      {
        text: "Android开发者",
        items: [
          {
            text: "Android开发者平台",
            link: "https://developer.android.google.cn/?hl=zh-cn",
          },
          {
            text: "AndroidGradle插件版本说明",
            link: "https://developer.android.com/build/releases/gradle-plugin?hl=zh-cn",
          },
          { text: "AndroidStudio专题：下载、安装、配置", link: "/android/studio/" },
        ],
      },
    ],
  },
  {
    text: "Flutter",
    items: [
      {
        text: "",
        items: [
          { text: "dart", link: "https://dart.cn/" },
          { text: "flutter", link: "https://flutter.cn/" },
          { text: "flutter package", link: "https://pub-web.flutter-io.cn/" },
        ],
      },
      {
        text: "",
        items: [
          {
            text: "flutter_lints",
            link: "https://pub-web.flutter-io.cn/packages/flutter_lints",
          },
          {
            text: "url_launcher",
            link: "https://pub-web.flutter-io.cn/packages/url_launcher",
          },
          {
            text: "shared_preferences",
            link: "https://pub-web.flutter-io.cn/packages/shared_preferences",
          },
          { text: "dio", link: "https://pub-web.flutter-io.cn/" },
          {
            text: "webview_flutter",
            link: "https://pub-web.flutter-io.cn/packages/webview_flutter",
          },
          {
            text: "lottie",
            link: "https://pub-web.flutter-io.cn/packages/lottie",
          },
          {
            text: "shimmer",
            link: "https://pub-web.flutter-io.cn/packages/shimmer",
          },
        ],
      },
    ],
  },
  {
    text: "Web",
    items: [
      {
        items: [
          { text: "CSS", link: "/pages/markdown-examples" },
          { text: "JavaScript", link: "/pages/api-examples" },
          { text: "HTML", link: "/pages/8309a5b876fc95e3/" },
        ],
      },
      {
        items: [
          {
            text: "NodeJS",
            link: "https://www.nodeapp.cn/",
          },
          {
            text: "Vue 文档",
            link: "https://cn.vuejs.org/guide/introduction.html",
          },
        ],
      },
      { text: "web 面试宝典", link: "/android/" },
    ],
  },
  {
    text: "uniApp",
    items: [
      {
        items: [
          { text: "uni-app 文档", link: "https://uniapp.dcloud.net.cn/" },
          { text: "uni-app 学习手册", link: "/technology/md/" },
        ],
      },
      {
        items: [
          {
            text: "uniCloud 文档",
            link: "https://doc.dcloud.net.cn/uniCloud/",
          },
          {
            text: "uniCloud 服务空间",
            link: "https://unicloud.dcloud.net.cn/",
          },
          { text: "uniCloud 学习手册", link: "/technology/md/" },
        ],
      },
      { text: "HBuild X", link: "https://hx.dcloud.net.cn/README" },
      { text: "插件市场", link: "https://ext.dcloud.net.cn/" },
    ],
  },
  {
    text: "快应用",
    items: [
      { text: "快应用开发者中心", link: "https://www.quickapp.cn/" },
      { text: "快应用开发者文档", link: "https://doc.quickapp.cn/" },
    ],
  },
  {
    text: "小程序",
    items: [
      {
        text: "微信小程序",
        items: [
          { text: "微信公众平台", link: "https://mp.weixin.qq.com/" },
          {
            text: "微信开放文档·小程序",
            link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
          },
          { text: "微信小程序学习手册", link: "/applet/wx/" },
        ],
      },
      {
        text: "抖音小程序",
        items: [
          {
            text: "抖音开发平台",
            link: "https://developer.open-douyin.com/console",
          },
          {
            text: "抖音开放文档·小程序",
            link: "https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/overview/learning-path",
          },
        ],
      },
      {
        text: "快手小程序",
        items: [
          {
            text: "快手开发者平台",
            link: "https://mp.kuaishou.com/project/home",
          },
          {
            text: "快手开发者文档·小程序",
            link: "https://mp.kuaishou.com/docs/develop/guide/introduction.html",
          },
        ],
      },
    ],
  },
  {
    text: "收藏夹",
    link: "/favorite/",
  },
  // { text: "站点导航", link: "/nav" },
  {
    text: "关于",
    items: [
      {
        text: "关于博客",
        link: "/about/",
      },
      {
        text: "关于作者",
        link: "/about/me",
      },
    ],
  },
];

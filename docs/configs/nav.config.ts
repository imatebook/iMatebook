import { DefaultTheme } from "vitepress/theme";
export const nav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "技术",
    items: [
      {
        items: [
          {
            text: "HarmonyOS 鸿蒙官网",
            link: "https://www.harmonyos.com/cn/develop",
          },
        ],
      },
      {
        text: "技术文档",
        items: [
          { text: "《Git 使用教程》", link: "/pages/technology/git/" },
          { text: "《Markdown 使用教程》", link: "/pages/technology/md/" },
        ],
      },
      {
        text: "IM 即时通讯",
        items: [
          {
            text: "Tencent IM",
            link: "https://cloud.tencent.com/product/im",
          },
          { text: "融云 IM", link: "https://www.rongcloud.cn/product/im" },
          { text: "网易云信 RTC", link: "https://yunxin.163.com/im" },
        ],
      },
      {
        text: "RTC 音视频",
        items: [
          {
            text: "Tencent RTC",
            link: "https://cloud.tencent.com/product/trtc",
          },
          { text: "Agora RTC", link: "https://www.shengwang.cn/" },
          { text: "ZEGO RTC", link: "https://www.zego.im/" },
          { text: "相芯美颜 & 视频特效", link: "https://www.faceunity.com/" },
        ],
      },
      {
        text: "解决方案",
        items: [
          { text: "FFmpeg 音视频", link: "https://github.com/FFmpeg/FFmpeg" },

          { text: "UMeng", link: "https://www.umeng.com/" },
          { text: "Bugly", link: "https://bugly.qq.com/v2/" },
        ],
      },
      {
        text: "技术博客",
        items: [{ text: "", link: "/pages/technology/blog/" }],
      },
    ],
  },

  {
    text: "Android",
    items: [
      {
        text: "Android开发者",
        items: [
          { text: "Android基础", link: "/pages/android/base/" },
          { text: "Android进阶", link: "/pages/android/base/" },
          {
            text: "Android开发者平台",
            link: "https://developer.android.google.cn/?hl=zh-cn",
          },
        ],
      },
      {
        text: "",
        items: [
          {
            text: "maven2",
            link: "https://repo.maven.apache.org/maven2/",
          },
          {
            text: "maven central repository",
            link: "https://central.sonatype.com/",
          },
          {
            text: "gradle 下载",
            link: "https://services.gradle.org/distributions/",
          },
        ],
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
      },
      {
        text: "Kotlin学习笔记",
        link: "/pages/android/kotlin/",
      },
      {
        text: "RxJava学习笔记",
        link: "/pages/android/rxjava/",
      },
      {
        text: "FFmpeg学习笔记",
        link: "/pages/android/ffmpeg/",
      },
      {
        text: "AndroidStudio使用教程",
        link: "/pages/android/studio/",
      },
    ],
  },
  {
    text: "Flutter",
    items: [
      {
        text: "",
        items: [
          { text: "dart 中文文档", link: "https://dart.cn/" },
          { text: "flutter 中文文档", link: "https://flutter.cn/" },
          { text: "flutter 高效指南", link: "https://dart.cn/guides/language/effective-dart" },
          { text: "flutter package", link: "https://pub-web.flutter-io.cn/" },
        ],
      },
      {
        text: "",
        items: [
          { text: "Flutter 命令行速查", link: "/pages/flutter/command/quick" },
          { text: "Flutter 命令行", link: "https://flutter.cn/" },
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
        text: "Web开发者",
        items: [
          { text: "HTML", link: "/pages/web/html/" },
          { text: "CSS", link: "/pages/web/css/" },
          { text: "JavaScript", link: "/pages/web/js/" },
          { text: "npm常见命令", link: "/pages/web/npm/" },
        ],
      },

      {
        items: [
          {
            text: "NodeJS 文档",
            link: "https://www.nodeapp.cn/",
          },
          {
            text: "Vue 文档",
            link: "https://cn.vuejs.org/guide/introduction.html",
          },
        ],
      },
      {
        items: [
          {
            text: "weui 组件库",
            link: "https://wechat-miniprogram.github.io/weui/docs/",
          },
          {
            text: "vant 组件库",
            link: "https://vant-contrib.gitee.io/vant/#/zh-CN",
          },
        ],
      },
    ],
  },
  {
    text: "uniApp",
    items: [
      {
        items: [
          { text: "uni-app 文档", link: "https://uniapp.dcloud.net.cn/" },
          { text: "uni-app 学习手册", link: "/pages/technology/md/" },
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
          { text: "uniCloud 学习手册", link: "/pages/technology/md/" },
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
      {
        text: "快应用开发工具",
        link: "https://www.quickapp.cn/docCenter/IDEPublicity",
      },
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
    link: "/pages/favorite/",
  },
  // { text: "站点导航", link: "/nav" },
  {
    text: "关于",
    items: [
      {
        text: "关于我们",
        link: "/pages/about/",
      },
      {
        text: "关于作者",
        link: "/pages/about/me",
      },
      {
        text: "我的项目",
        link: "/pages/about/product/",
      },
    ],
  },
];

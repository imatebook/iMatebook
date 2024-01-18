---
title: 关于作者
titleTemplate: About
description: 关于作者
layout: doc

navbar: true
sidebar: false
aside: false
outline: 2
lastUpdated: false
editLink: false
footer: true
---

# 关于作者

[王敬佩](https://github.com/dongfangwangyou/imatebook)，9 年软件开发经验，深耕 **Android** 原生开发，掌握 **Android** & **Kotlin** & **Java**、**Flutter** & **Dart**、**HTML** & **CSS** & **JS** & **TS** & **Vue**、**UniApp**、**快应用**、以及 **微信** & **抖音** & **快手**小程序等技术；

同时，具有丰富的项目开发经验，项目涉及 **IM 即时通讯**、**RTC 语音社交/视频直播**、**Saas 内容分销（小说、短剧）**、**Koc 达人（小说、短剧方向）**、**Koc 书单（视频生成、剪辑）**、以及**新闻阅读**、**移动办公**、**智慧城市**、**电子商务**等领域。

## :emoji: me

<!-- web 前端小学生

### 技能

- 熟悉 JavaScript、HTML、CSS、Vue、React 的拼写
- 了解 Linux、windows、macOS 的开关机方式
- 精通 Git 的 pull 和 push，并注册了 GitHub 帐号刷了一些 star -->

<!-- 本人↓↓↓ -->

<!-- ## 前端学习

<br/>
<img src="https://open.weixin.qq.com/qr/code?username=gh_0cf4b813918c"  style="width:100px;" />
关注公众号，回复`前端资源`，即可获取这些 [前端学习资源](https://github.com/xugaoyi/blog-gitalk-comment/wiki/Front-end-Study)。 -->

## :email: 联系

- 微信 或 QQ: <a :href="qqUrl" class='qq'>{{ QQ }}</a>
- Email: <a href="mailto:dongfangwangyou@126.com">dongfangwangyou@126.com</a>
- GitHub: <https://github.com/dongfangwangyou>
  <!-- - Vdoing主题文档：<https://doc.xugaoyi.com> -->
  <!-- - Vdoing交流QQ群：694387113 -->

<!-- 运行时API -->
<script setup>
    import { ref} from 'vue';
    const QQ = '980635625'
    const qqUrl = ref(`tencent://message/?uin=${QQ}&Site=&Menu=yes`)
    // mounted(()=>{
    //     const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    //     if(flag){
    //         qqUrl.value = `mqqwpa://im/chat?chat_type=wpa&uin=${this.QQ}&version=1&src_type=web&web_src=oicqzone.com`
    //     }
    // })
</script>

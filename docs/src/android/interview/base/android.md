---
title: Android面试常见58题
titleTemplate: 《Android面试宝典》系列
description: Android基础面试题、Android面试常见58题
layout: doc
navbar: true
sidebar: true
outline: 2
lastUpdated: true
editLink: false
footer: true
---

# 📚 Android 面试常问的基础知识点

## 1. 四大组件是什么

- **Activity**：用户可操作的可视化界面，为用户提供一个完成操作指令的窗口。一个 **Activity** 通常是一个单独的屏幕，**Activity** 通过 **Intent** 来进行通讯。_Android 中会维持一个 **Activity Stack** ，当一个新 **Activity** 创建时，它就会放到栈顶，这个 **Activity** 就处于运行状态。_
- **Service**：服务，运行在手机后台，适合执行不需要和用户交互且还需要长期运行的任务。
- **ContentProvider**：内容提供者，跨进程数据共享的一种方式。将一个应用程序的指定数据集提供给其他程序，其他应用可以通过**ContentResolve** 类从该内容提供者中获取或存入数据；当数据被修改后，**ContentResolve** 接口的 **notifyChange** 函数会通知那些注册监控特定 URI 的 **ContentObserver** 对象。

## 2. 四大组件的生命周期和简单用法

## 3. Activity 之间的通讯方式

## 4. Activity 各种情况下的生命周期

## 5. 横竖屏切换的时候，Activity 各种情况下的生命周期

## 6. Activity 和 Fragment 之间生命周期比较

## 7. Activity 上有 Dialog 的时候按 HOME 键时的生命周期

## 8. 两个 Activity 之间跳转时必然会执行的是哪几个方法？

前一个 Activity 的 **onPause**，后一个 Activity 的 **onResume**

## 9. 前台切换到后台，然后再回到前台，Activity 生命周期回调方法。弹出 Dialog，生命值周期回调方法

- 前台切换到后台 ，会执行 **onPause** -> **onStop**，再回到前台，会执行 onRestart->onStart->onResume
- 弹出 Dialog，并不会影响 Activity 生命周期

## 10. Activity 的四种启动模式对比

- **standard**：标准启动模式（默认），每启动一次 Activity，都会创建一个实例，即使从 ActivityA startActivity ActivityA,也会再次创建 A 的实例放于栈顶，当回退时，回到上一个 ActivityA 的实例。
- **singleTop**：栈顶复用模式，每次启动 Activity，如果待启动的 Activity 位于栈顶，则不会重新创建 Activity 的实例，即不会走 **onCreate** -> **onStart**，会直接进入 Activity 的**onPause** -> **onNewIntent** -> **onResume** 方法
- **singleInstance**: 单一实例模式，整个手机操作系统里只有一个该 Activity 实例存在，没有其他 Actvity，后续请求均不会创建新的 Activity。若 task 中存在实例，执行实例的 **onNewIntent()**。应用场景：闹钟、浏览器、电话
- **singleTask**：栈内复用，启动的 Activity 如果在指定的 taskAffinity 的 task 栈中存在相应的实例，则会把它上面的 Activity 都出栈，直到当前 Activity 实例位于栈顶，执行相应的 **onNewIntent()**方法。如果指定的 task 不存在，创建指定的 taskAffinity 的 task,taskAffinity 的作用，进入指写 taskAffinity 的 task,如果指定的 task 存在，将 task 移到前台，如果指定的 task 不存在，创建指定的 taskAffinity 的 task. 应用场景：应用的主页面

## 11. Activity 状态保存于恢复

Activity 被主动回收时，如按下 Back 键，系统不会保存它的状态，只有被动回收时，虽然这个 Activity 实例已被销毁，但系统在新建一个 Activity 实例时，会带上先前被回收 Activity 的信息。在当前 Activity 被销毁前调用 **onSaveInstanceState**(**onPause** 和 **onStop** 之间保存)，重新创建 Activity 后会在 **onCreate** 后调用 **onRestoreInstanceState**（**onStart** 和 **onResume** 之间被调用），它们的参数 Bundle 用来数据保存和读取的。
保存 View 状态有两个前提：View 的子类必须实现了 **onSaveInstanceState**; 必须要设定 Id，这个 ID 作为 Bundle 的 Key

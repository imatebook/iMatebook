---
title: Java中==和equals()和hashCode()的区别
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

# Java 中==和 equals()和 hashCode()的区别：

#### 1. == 含义

- 基本数据类型（byte、short、char、int、long、float、double、boolean）之间，使用==比较的是它们的值是否相同。
- 引用数据类型（类、接口、数组...）之间，使用==比较的是它们在内存中的存放地址（确切说是 **堆内存** 地址）是否相同。

> **注意**：对于引用数据类型，除非是同一个 new 出来的对象，它们的比较后的结果为 true，否则比较后结果为 false。因为每 new 一次，都会重新开辟堆内存空间。
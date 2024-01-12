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

# 📚 Android面试常见58题

## Java 部分

#### 1. Java 中 == 和 equals 和 hashCode 的区别 [详解](./1.md)

- **==** 一般比较基本数据类型的 **值**；
- **equals** 一般（**@override**）比较引用数据类型的 **内容**；
  > 在不覆写 equals()的情况下，默认比较内存地址，在 Object 中定义实现==；
  > 一般覆写 equals()后，比较的是内容，如:String
- **hashCode** 是 **Object** 定义的一个方法，默认返回一个**离散的 int 型整数**；
  在集合类（**HashMap**、**HashSet**）操作中，为了提高查询速度；

- **equals 和 hashCode 的关系:**

  > - 如果两个对象 **equals** 返回 true，**hashCode** 一定相等；
  > - 如果两个对象 **equals** 返回 false，**hashCode** 有可能相等；
  > - 如果两个对象 **hashCode** 相等，**equals** 不一定返回 true;
  > - 如果两个对象 **hashCode** 不相等，**equals** 一定返回 false;

#### 2. int 与 integer 的区别

- **int** 是基本类型；
- **integer** 对象 **int** 的封装类

#### 3. String、StringBuffer、StringBuilder 的区别

- **String**：字符串常量，不适用于经常要改变值的情况，每次改变相当于生成一个新的对象；
- **StringBuffer**：字符串变量 （线程安全）；
- **StringBuilder**：字符串变量（线程不安全）， 确保单线程下可用，效率略高于 StringBuffer；

## Android 部分

---
title: Android面试专题：Java基础知识点
titleTemplate: 《Android面试宝典》系列
description: Android面试专题：Java基础知识点、《Android面试宝典》系列
# outline: 3
editLink: false
---

# 📚 Android 面试专题：Java 基础知识点

## 一、 数据类型

### 1. Java 有哪些数据类型？

- **基本数据类型**：byte、short、int、long、float、double、char、boolean
- **引用数据类型**：class、interface、[]
  > byte、boolean 占用 1 字节，short、char 占用 2 字节，int、float 占用 4 字节，long、double 占用 8 字节

---

### 2. Java 中 == 和 equals 和 hashCode 的区别 [详解](./detail.md)

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

### 3. int 与 Integer 的区别

- **int** 是 Java 中的一种基本数据类型；**Integer** 是 **int** 的包装类；
- **int** 是直接存储数据的值，默认值是 0；**Integer** 变量必须实例化才能使用，当 **new** 一个 **Integer** 时，实际是生成一个指向此对象的引用，默认值是 null；

### 4. String 转换成 Integer 的方式及原理

```Java
  String text = "1";
  Integer value = Integer.parse(value);
```

```Java
  Integer value = 1;
  String text = value.toString();
```

### 5. String、StringBuffer、StringBuilder 的区别

- **String**：字符串常量，不适用于经常要改变值的情况，每次改变相当于生成一个新的对象；
- **StringBuffer**：字符串变量 （线程安全）；
- **StringBuilder**：字符串变量（线程不安全）， 确保单线程下可用，效率略高于 StringBuffer；

### 6. 进程和线程的区别

进程是 CPU 资源分配的最小单位，线程是 CPU 调度的最小单位；
进程之间不能共享资源，而线程共享所在进程的地址空间和其他资源；
一个进程内可以拥有多个线程，进程可开启进程，也可开启线程；
一个线程只能属于一个进程，线程可直接使用同进程的资源，线程依赖于进程而存在。

## 二、关键字

### 6. final、finally、finalize 的区别

- **final**：饰类、成员变量和成员方法，类不可被继承，成员变量不可变，成员方法不可重写；
- **finally**：与 try...catch...共同使用，确保无论是否出现异常都能被调用到；
- **finalze**：类的方法，垃圾回收之前会调用此方法，子类可以重写 finalze()方法实现对资源的回收；

### 7. Serializable 和 Parcelable 的区别

- **Serializable**：Java 序列化接口。在硬盘上读写，读写过程中有大量临时变量的生成，内部执行大量的 I/O 操作，效率很低；
- **Parcelable**：Android 序列化接口。在内存中读写，效率高，使用麻烦（AS 有相关插件，一键生成所需方法），对象不能保存到磁盘中

### 8. 静态属性和静态方法是否可以被继承？是否可以被重写？以及原因？

**可继承**；**不可重写**，而是被隐藏
如果子类定义了静态属性和方法，那么这时候父类的静态属性和方法称之隐藏；如果您想调用父类的静态属性和方法，直接通过父类名.变量名或方法完成

## 二、面向对象

### 9. 什么是内部类？内部类的作用

Java 中内部类主要分为**成员内部类**、**局部内部类**（嵌套在方法和作用域内）、**匿名内部类**（没有构造方法）、**静态内部类**（static 修饰的类，不依赖外部类，不能使用任何外部类的非 static 成员变量和方法）。

内部类可以直接访问外部类的属性

### 10. 成员部类、局部内部类、匿名内部类、静态内部类的理解，以及项目中的应用

Java 中内部类主要分为**成员内部类**、**局部内部类**（嵌套在方法和作用域内）、**匿名内部类**（没有构造方法）、**静态内部类**（static 修饰的类，不依赖外部类，不能使用任何外部类的非 static 成员变量和方法）。

使用内部类最吸引人的原因是：每个内部类都能独立的继承一个（接口的）实现，所以无论外部类是否已经继承了某个（接口的）实现，对于内部类都没有影响。

因为 Java 不支持多继承，支持实现多个接口。都有时候会存在一些使用接口很难解决的问题，这个时候我们可以利用内部类提供的、可以继承多个具体的或者抽象的类的能力来解决程序设计问题。可以这样说，接口只是解决了部分问题，而内部类使得多重继承的解决方案变得更加完美。

## 三、I/O

[[toc]]

---
title: Flutter命令速查
titleTemplate: Flutter
description: Flutter命令、Flutter命令介绍、Flutter命令速查、Flutter命令行速查
sidebar: false
editLink: false
prev: false
next: false
---

# Flutter 命令速查

1. `flutter help` 查看具体命令帮助
2. `flutter create` 创建项目
3. `flutter run` 运行项目
4. `flutter doctor` 环境诊断
5. `flutter channel` 查看 Flutter SDK 所有分支

```markdown
`flutter channel stable` 或 `flutter channel beta` 切换分支
`flutter upgrade` 版本升级（Flutter SDK）
```

6. `flutter pub get`
7. `flutter pub upgrade` 仅更新项目依赖的 packages，或者修改 pubspec.yaml 文件后
8. `flutter pub add xxx` 添加第三方依赖
9. `flutter devices` 列出所有连接的设备
10. `flutter emulators` 查看可用模拟器
11. `flutter run --verbose-system-logs` 在运行时显示系统日志
12. `flutter create --platforms=windows,macos,linux` 旧项目新增平台支持，在 3.x 以上版本新增支持桌面平台
13. `flutter config` flutter 开启或者关闭某平台支持

```markdown
`flutter config --enable-web true`
`flutter config --no-enable-web`
```

14. `flutter analyze` 自动分析代码

```markdown
`flutter analyze -d <DEVICE_ID>`
`flutter analyze -d windows`
```

15. `flutter test` 自动测试代码
16. `flutter build` 各平台打包命令

```markdown
`flutter build apk` 默认打 release 包
`flutter build apk --release` 打 release 包
`flutter build apk --debug` 打 Debug 包
`flutter build ios` 默认打 release 包
`flutter build ios --release` 打 release 包
`flutter build ios --debug` 打 Debug 包
`flutter build web`
`flutter build windows`
```

---
title: 活动页面 Action Page
pubDate: 2024-09-20
tags: [💻IT]
level: 1
---

我一直觉得，以软件或者 App 为单位的开发，过于重量级了。因为用户往往更喜欢轻量级地使用软硬件完成他的需求，毕竟重量级的太复杂学习成本太高了。

所以，我觉得，以活动 Action 为单位，是更好的开发粒度，对应于用户的单次满足需求的活动， 可以对应带参数的 URL。

Action 类似 Android 里的 Activity，可以独立于原本的 App 来使用，关键就在于按需调出来使用。

一般用户软件都是有界面的，那么 Action 带的界面就是 Action Page，也就是活动页面，一般 Action 一个 Page 即可，类似浏览器页面。

所以前端的开发单位最好就是 Page，Page 自带上下文 Context，然后可把一组相关 Page 打包成 App 方便发布，可以合并优化 Context。

至于比 Page 更小的单位，比如 Block、Component 等，不能独立跟用户交互，可以作为 Page 和 App 的组成模块或者辅助模块。

如果开发 App，可以考虑将浏览器整合进来，作为整合与管理 Action Page 的现成成熟工具，比自己另造一个更方便。

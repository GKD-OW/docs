---
title: 自定义房名/游戏内图标
lang: zh-CN
---

# 自定义房名/游戏内图标

> 原作者[@终焉硝烟狂欢](https://weibo.com/gunpowdermayhem)，原文链接：[微博](https://weibo.com/ttarticle/p/show?id=2309404416231540129893)

可以同时应用于房名/游戏内

## 房名图标说明

固定格式：`<TXC000000000*****>`

一共有9个0 (零)，后面的星号是可以改的地方

`< >`括号不可去掉

![demo](http://http.cdn.sylibs.com/workshop/docs/use_styler/be971962ly1g6yc0vzzffj20c104j3yz.jpg)

## 游戏内(队伍名)图标说明

* 队伍1：`<TX`
* 队伍2：`C000000000*****`

一共有9个0 (零)，后面的星号是可以改的地方

最后的`>`括号不需要

![demo](http://http.cdn.sylibs.com/workshop/docs/use_styler/be971962ly1g6yc3djv3hj20tt0agta2.jpg)

## ​如何添加到游戏中

只需要按照下方添加一条「持续-每名玩家」的规则即可

也可以直接使用我做好的预设代码：`9P3GM`

动作中的「事件玩家」则是所有人头上都会显示图标

图标只会显示在玩家正上方并跟随玩家移动

**如何改为仅房主显示**

* 将「持续-每名玩家」改成「全局」
* 将「事件玩家」改成「主机玩家」

![demo](http://http.cdn.sylibs.com/workshop/docs/use_styler/be971962ly1g6yc7xpmdvj20fw06jgm9.jpg)
![demo](http://http.cdn.sylibs.com/workshop/docs/use_styler/be971962ly1g6ycljc63rj20ex07jain.jpg)
![demo](http://http.cdn.sylibs.com/workshop/docs/use_styler/be971962ly1g6ycna5pnxj20g50eq14n.jpg)

## 生成器

你可以使用[生成器](https://ow-styler.owmod.net/)来帮助你找到需要的图片、一键生成代码
---
title: 比赛
lang: zh-CN
---

# 比赛



## 开启游戏预设完成条件    Enable Built-In Game Mode Completion

_启用"关闭游戏预设完成模式"动作的效果._



## 开启游戏预设计分模式    Enable Built-In Game Mode Scoring

_启用"关闭游戏预设计分模式"动作的效果._



## 开启游戏预设通告模式    Enable Built-In Game Mode Announcer

_启用"关闭游戏预设通告模式"动作的效果._



## 开启游戏预设重生模式    Enable Built-In Game Mode Respawning

_启用"关闭游戏预设重生模式"动作的效果._

- `玩家`下列玩家的重生受到影响.



## 开启游戏预设音乐模式    Enable Built-In Game Mode Music

_启用"关闭游戏预设音乐模式"动作的效果._



## 关闭游戏预设完成条件    Disable Built-In Game Mode Completion

_取消游戏模式自带的完成条件,比赛只由程序命令完成._



## 关闭游戏预设计分模式    Disable Built-In Game Mode Scoring

_取消游戏模式本身对玩家和队伍进行的计分,分数只会由程序命令改变._



## 关闭游戏预设通告模式    Disable Built-In Game Mode Announcer

_禁用游戏模式中所有提示语音,直到重新启用或比赛结束为止._



## 关闭游戏预设重生模式    Disable Built-In Game Mode Respawning

_使一名或多名玩家不再自动重生,只允许其在程序命令控制下重生._

- `玩家`下列玩家的重生受到影响.



## 关闭游戏预设音乐模式    Disable Built-In Game Mode Music

_禁用游戏模式中所有音乐,直到重新启用或比赛结束为止._



## 宣告回合胜利    Declare Round Victory

_宣布一支队伍为当前回合的胜利方(只在占领要点模式和决斗先锋模式中可用._

- `本回合获胜队伍`本回合获胜队伍



## 宣告玩家胜利    Declare Player Victory

_立即结束比赛并指定一名玩家为胜利者.此动作只在自由混战模式中生效._

- `玩家`获胜的玩家.



## 宣告队伍胜利    Declare Team Victory

_立即结束比赛,并指定获胜的队伍.此动作在自由混战模式中无效._

- `队伍`获胜的队伍.



## 宣布比赛为平局    Declare Match Draw

_立即结束比赛,且结果为平局.此动作在自由混战模式中无效._



## 比赛时间暂停    Pause Match Time

_暂停比赛时间.玩家、目标点逻辑、以及游戏模式的进展标准不会受暂停的影响_



## 比赛时间继续    Unpause Match Time

_取消比赛时间暂停._



## 前往集结英雄    Go To Assemble Heroes

_回到比赛模式的集结英雄阶段.只有在游戏正在进行中时生效._



## 设置比赛时间    Set Match Time

_设置当前比赛时间(玩家可在屏幕顶端看到).此行动可以用来缩短或延长比赛的持续时间,或改变集结英雄或准备阶段的时间._

- `时间`比赛时间,单位为秒.



## 设置慢动作    Set Slow Motion

_设置整个游戏的模拟速率,包括所有玩家、弹道、效果及游戏模式逻辑_

- `速度百分比`模拟速率与正常速率的百分比.此数值不得超过100%.



## 启用查看器记录    Enable Inspector Recording

_使地图工坊查看器可以继续录制新的条目(假如之前被禁用的话). 在特定时间开启录制可以更容易地对你的脚本逻辑中出问题的地方进行错误排查._



## 禁用查看器记录    Disable Inspector Recording

_使地图工坊查看器无法录制新的条目. 此功能可以降低你的脚本对服务器造成的负担, 特别是当修改数组时._



## 调用子程序    Call Subroutine

_暂停执行当前规则, 并开始执行子程序规则(事件类型为"子程序"的规则). 当子程序规则结束时, 原来的规则将恢复执行. 子程序可以使用相同的情景变量(如事件玩家)的原始值._



## 开始规则    Start Rule

_开始同时执行一个子程序规则(事件类型为"子程序"的规则). 原来规则的执行不会被打断. 子程序可以使用同样的情景变量(如事件玩家)的原始值._

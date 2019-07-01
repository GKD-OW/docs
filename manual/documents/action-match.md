# 比赛控制类

---

## 开启游戏预设完成条件    ENABLE BUILT-IN GAME MODE COMPLETION

_取消"关闭游戏预设完成模式"动作的效果._

---

## 开启游戏预设计分模式    ENABLE BUILT-IN GAME MODE SCORING

_取消"关闭游戏预设计分模式"动作的效果._

---

## 开启游戏预设通告模式    ENABLE BUILT-IN GAME MODE ANNOUNCER

_取消"关闭游戏预设通告模式"动作的效果._

---

## 开启游戏预设重生模式    ENABLE BUILT-IN GAME MODE RESPAWNING

_取消"关闭游戏预设重生模式"动作的效果._

- `玩家`下列玩家的重生受到影响.

---

## 开启游戏预设音乐模式    ENABLE BUILT-IN GAME MODE MUSIC

_取消"关闭游戏预设音乐模式"动作的效果._

---

## 关闭游戏预设完成条件    DISABLE BUILT-IN GAME MODE COMPLETION

_取消游戏模式自带的完成条件,比赛只由程序命令完成._

---

## 关闭游戏预设计分模式    DISABLE BUILT-IN GAME MODE SCORING

_取消游戏模式本身对玩家和队伍进行的计分,分数只会由程序命令改变._

---

## 关闭游戏预设通告模式    DISABLE BUILT-IN GAME MODE ANNOUNCER

_禁用游戏模式中所有提示语音,直到重新启用或比赛结束为止._

---

## 关闭游戏预设重生模式    DISABLE BUILT-IN GAME MODE RESPAWNING

_使一名或多名玩家不再自动重生,只允许其在程序命令控制下重生._

- `玩家`下列玩家的重生受到影响.

---

## 关闭游戏预设音乐模式    DISABLE BUILT-IN GAME MODE MUSIC

_禁用游戏模式中所有音乐,直到重新启用或比赛结束为止._

---

## 宣告回合胜利    DECLARE ROUND VICTORY

_宣布一支队伍为当前回合的胜利方(只在占领要点模式和决斗先锋模式中可用._

- `本回合获胜队伍`本回合获胜队伍

---

## 宣告玩家胜利    DECLARE PLAYER VICTORY

_立即结束比赛并指定一名玩家为胜利者.此动作只在自由混战模式中生效._

- `玩家`获胜的玩家.

---

## 宣告队伍胜利    DECLARE TEAM VICTORY

_立即结束比赛,并指定获胜的队伍.此动作在自由混战模式中无效._

- `队伍`获胜的队伍.

---

## 宣布比赛为平局    DECLARE MATCH DRAW

_立即结束比赛,且结果为平局.此动作在自由混战模式中无效._

---

## 比赛时间暂停    PAUSE MATCH TIME

_暂停比赛时间.玩家、目标点逻辑、以及游戏模式的进展标准不会受暂停的影响_

---

## 比赛时间继续    UNPAUSE MATCH TIME

_取消比赛时间暂停._

---

## 前往集结英雄    GO TO ASSEMBLE HEROES

_回到比赛模式的集结英雄阶段.只有在游戏正在进行中时生效._

---

## 设置比赛时间    SET MATCH TIME

_设置当前比赛时间(玩家可在屏幕顶端看到).此行动可以用来缩短或延长比赛的持续时间,或改变集结英雄或准备阶段的时间._

- `时间`比赛时间,单位为秒.

---

## 设置慢动作    SET SLOW MOTION

_设置整个游戏的模拟速率,包括所有玩家、弹道、效果及游戏模式逻辑_

- `速度百分比`模拟速率与正常速率的百分比.此数值不得超过100%.
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{401:function(v,_,t){"use strict";t.r(_);var l=t(27),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"自瞄和透视"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自瞄和透视"}},[v._v("#")]),v._v(" 自瞄和透视")]),v._v(" "),t("h2",{attrs:{id:"自瞄"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自瞄"}},[v._v("#")]),v._v(" 自瞄")]),v._v(" "),t("h3",{attrs:{id:"规则1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则1"}},[v._v("#")]),v._v(" 规则1")]),v._v(" "),t("p",[v._v("事件")]),v._v(" "),t("ul",[t("li",[v._v("持续 - 每名玩家")]),v._v(" "),t("li",[v._v("队伍 双方 全部")])]),v._v(" "),t("p",[v._v("条件")]),v._v(" "),t("ul",[t("li",[v._v("按钮被按下(事件玩家, 主要攻击模式) == 真")])]),v._v(" "),t("p",[v._v("动作")]),v._v(" "),t("ul",[t("li",[v._v("开始朝向(事件玩家, 向量(位置(事件玩家), 位置(距离准心最近的玩家(事件玩家, 对方队伍(队伍(事件玩家))))), 1000, 至地图, 方向及角速率)")])]),v._v(" "),t("p",[v._v("解析")]),v._v(" "),t("ul",[t("li",[v._v("通过“条件”，我们找到了正在开枪的玩家（下面成为A玩家）")]),v._v(" "),t("li",[v._v("“开始朝向”可以移动玩家正面方向，我们要移动的是“事件玩家”，即A玩家")]),v._v(" "),t("li",[v._v("“方向”为向量，意思是从A玩家，到离准心最近的对方玩家")]),v._v(" "),t("li",[v._v("如何找到准心最近的对方玩家？这个玩家应该满足两个条件：一是距离A玩家的准心最近，二是属于对方队伍。")]),v._v(" "),t("li",[v._v("因此，我们从A玩家 - 队伍 - 对方队伍，即可找到对方玩家")]),v._v(" "),t("li",[v._v("最后，“角速度”用来让“自瞄”更“暴力”一些")]),v._v(" "),t("li",[v._v("另外，在这个例子中，我们只设定了“主要攻击模式”。如果需要设定辅助攻击模式，则需要再添加一个规则")])]),v._v(" "),t("h3",{attrs:{id:"规则2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则2"}},[v._v("#")]),v._v(" 规则2")]),v._v(" "),t("p",[v._v("事件")]),v._v(" "),t("ul",[t("li",[v._v("持续 - 每名玩家")]),v._v(" "),t("li",[v._v("队伍 双方 全部")])]),v._v(" "),t("p",[v._v("条件")]),v._v(" "),t("ul",[t("li",[v._v("按钮被按下(事件玩家, 主要攻击模式) == 假")])]),v._v(" "),t("p",[v._v("动作")]),v._v(" "),t("ul",[t("li",[v._v("停止朝向(事件玩家)")])]),v._v(" "),t("h2",{attrs:{id:"透视"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#透视"}},[v._v("#")]),v._v(" 透视")]),v._v(" "),t("p",[v._v("事件")]),v._v(" "),t("ul",[t("li",[v._v("持续 - 每名玩家")]),v._v(" "),t("li",[v._v("队伍 双方 全部")])]),v._v(" "),t("p",[v._v("条件")]),v._v(" "),t("ul",[t("li",[v._v("无")])]),v._v(" "),t("p",[v._v("动作")]),v._v(" "),t("ul",[t("li",[v._v("创建图标(所有玩家(所有队伍), 事件玩家, ARROW: DOWN, 可见和位置, 绿色, 假)")])]),v._v(" "),t("p",[v._v("解析")]),v._v(" "),t("ul",[t("li",[v._v("我们给事件玩家创建了一个箭头")]),v._v(" "),t("li",[v._v("这个箭头可以被所有队伍的所有玩家看见")])])])}),[],!1,null,null,null);_.default=a.exports}}]);
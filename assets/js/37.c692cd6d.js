(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{403:function(_,v,t){"use strict";t.r(v);var r=t(27),a=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"运行机制推测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行机制推测"}},[_._v("#")]),_._v(" 运行机制推测")]),_._v(" "),t("p",[_._v("注意：本文绝大部分内容均为主观推测​，因此正确性不做保证，仅供参考。")]),_._v(" "),t("p",[_._v("规则会同时在服务器与不同玩家的设备上运行。这保证了所有玩家的体验一致，但也导致了一些问题，例如服务器拥挤的情况下可能会感到不流畅，随机并不是真随机。")]),_._v(" "),t("p",[_._v("部分操作不会立刻生效，因为在OW中，命令的模拟（即实际运行命令）是周期性的，目前大致为16.6ms（60Hz）。又称每16.6ms是一个tick。例如，当你重生一名玩家后，立刻改变玩家的一些属性很可能无效。")]),_._v(" "),t("p",[_._v("所有能在屏幕上显示或能发出声音的东西，包括玩家、建筑、文字、图标、特效等，都可以被称作“实体”，但不包括HUD（广义的）部分。地图工坊仅能操作由地图工坊创建的实体，和一些实体的特定内容（例如访问玩家的部分状态）。地图工坊限制的实体数量，只包括由地图工坊创建的实体，并且所有玩家共享此上限。")]),_._v(" "),t("h2",{attrs:{id:"运行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行过程"}},[_._v("#")]),_._v(" 运行过程")]),_._v(" "),t("p",[_._v("OW的地图工坊很可能是单线程运行的（指规则运行过程）如果没有发生阻塞（即等待动作），则当前的动作会一直运行下去，不会被其他规则打断。")]),_._v(" "),t("p",[_._v("根据我们的测试，我们推测OW的运行过程如下：")]),_._v(" "),t("ul",[t("li",[_._v("维护一个运行队列。")]),_._v(" "),t("li",[_._v("每个tick，进行：\n"),t("ul",[t("li",[_._v("游戏本身的逻辑（如命中判定、移动模拟等）\n"),t("ul",[t("li",[_._v("如果在此过程中，触发了事件（如“玩家造成伤害”等），则将其放入队列。")])])]),_._v(" "),t("li",[_._v("等待队列是否有到达等待时间或条件不满足的\n"),t("ul",[t("li",[_._v("到达等待时间：加入到执行队列中。")]),_._v(" "),t("li",[_._v("条件不满足：根据动作处理。")])])]),_._v(" "),t("li",[_._v("检查每个可用的持续事件的条件是否满足，如果满足就加入到执行队列中。")]),_._v(" "),t("li",[_._v("更新部分带有“重新赋值”属性的实体、HUD。")])])]),_._v(" "),t("li",[_._v("按照运行队列执行。")])]),_._v(" "),t("h2",{attrs:{id:"优化建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化建议"}},[_._v("#")]),_._v(" 优化建议")]),_._v(" "),t("h3",{attrs:{id:"独立重复运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#独立重复运算"}},[_._v("#")]),_._v(" 独立重复运算")]),_._v(" "),t("p",[_._v("目前所观察到的现象表明：持续事件的“条件”、带有“重新赋值”属性的实体、HUD，会在每个tick进行运算。因此，有多个规则使用了同样的运算时，例如：（规则1、规则2、规则3事件均为“持续 - 每名玩家”）")]),_._v(" "),t("ul",[t("li",[_._v("规则1：相距距离(事件玩家, 全局变量(A)) < 5")]),_._v(" "),t("li",[_._v("规则2：相距距离(事件玩家, 全局变量(A)) > 0")]),_._v(" "),t("li",[_._v("规则3：相距距离(事件玩家, 全局变量(A)) == 5")])]),_._v(" "),t("p",[_._v("则可以写为：")]),_._v(" "),t("ul",[t("li",[_._v("规则A：\n"),t("ul",[t("li",[_._v("事件：持续 - 每名玩家")]),_._v(" "),t("li",[_._v("动作：\n"),t("ul",[t("li",[_._v("设置玩家变量(事件玩家, B, 相距距离(事件玩家, 全局变量(A)))")]),_._v(" "),t("li",[_._v("等待(0.016, 无视条件)")]),_._v(" "),t("li",[_._v("循环")])])])])]),_._v(" "),t("li",[_._v("规则1：玩家变量(事件玩家, B) < 5")]),_._v(" "),t("li",[_._v("规则2：玩家变量(事件玩家, B) > 0")]),_._v(" "),t("li",[_._v("规则3：玩家变量(事件玩家, B) == 5")])]),_._v(" "),t("p",[_._v("这样写有一个小问题：本来响应条件变化的时间不超过16.7ms，但现在则不超过33.3ms。但一般不会有太大负面作用。")]),_._v(" "),t("p",[_._v("另外，直接读取属性（如玩家是否按下按键、玩家的生命值、游戏时间等）的操作其实优化空间并不大，所以不需要单独独立出来。")]),_._v(" "),t("h3",{attrs:{id:"模拟局部变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模拟局部变量"}},[_._v("#")]),_._v(" 模拟局部变量")]),_._v(" "),t("p",[_._v("目前所观察到的现象表明：若无“等待”动作，规则运行不会被中断。因此，单个规则中若有多个同样的运算时，例如：")]),_._v(" "),t("ul",[t("li",[_._v("根据条件跳过(相距距离(事件玩家, 全局变量(A)) < 5, 1)")]),_._v(" "),t("li",[_._v("// xxx")]),_._v(" "),t("li",[_._v("根据条件跳过(相距距离(事件玩家, 全局变量(A)) > 10, 1)")]),_._v(" "),t("li",[_._v("// xxx")]),_._v(" "),t("li",[_._v("根据条件跳过(相距距离(事件玩家, 全局变量(A)) > 20, 1)")]),_._v(" "),t("li",[_._v("// xxx")])]),_._v(" "),t("p",[_._v("则可以写为：")]),_._v(" "),t("ul",[t("li",[_._v("设置玩家变量(事件玩家, B, 相距距离(事件玩家, 全局变量(A)))")]),_._v(" "),t("li",[_._v("根据条件跳过(玩家变量(事件玩家, B) < 5, 1)")]),_._v(" "),t("li",[_._v("// xxx")]),_._v(" "),t("li",[_._v("根据条件跳过(玩家变量(事件玩家, B) > 10, 1)")]),_._v(" "),t("li",[_._v("// xxx")]),_._v(" "),t("li",[_._v("根据条件跳过(玩家变量(事件玩家, B) > 20, 1)")]),_._v(" "),t("li",[_._v("// xxx")])]),_._v(" "),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[_._v("#")]),_._v(" 其他")]),_._v(" "),t("ul",[t("li",[_._v("因为运行机制，“等待”并不完全准确。一次等待时间，误差一般不超过16ms。")])]),_._v(" "),t("h2",{attrs:{id:"服务器意外关闭-的猜测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器意外关闭-的猜测"}},[_._v("#")]),_._v(" “服务器意外关闭”的猜测")]),_._v(" "),t("p",[_._v("关于“服务器意外关闭”，我们有一些猜测，可能并不完全准确。")]),_._v(" "),t("ul",[t("li",[_._v("“运行队列”可能到了某个上限")]),_._v(" "),t("li",[_._v("每个tick运行的时间超过了某个上限")])]),_._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[_._v("#")]),_._v(" 参考资料")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://gameinstitute.qq.com/community/detail/114516",target:"_blank",rel:"noopener noreferrer"}},[_._v("《守望先锋》架构设计与网络同步"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://gameinstitute.qq.com/community/detail/114122",target:"_blank",rel:"noopener noreferrer"}},[_._v("《守望先锋》中的网络脚本化的武器和技能系统"),t("OutboundLink")],1)])]),_._v(" "),t("p",[_._v("另外感谢"),t("a",{attrs:{href:"https://space.bilibili.com/2418570",target:"_blank",rel:"noopener noreferrer"}},[_._v("竹子菌"),t("OutboundLink")],1),_._v("、"),t("a",{attrs:{href:"https://weibo.com/u/6571188444",target:"_blank",rel:"noopener noreferrer"}},[_._v("昭华"),t("OutboundLink")],1),_._v("的协助")])])}),[],!1,null,null,null);v.default=a.exports}}]);
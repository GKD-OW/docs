module.exports = [{
		title: '概述',
		children: [
			'/',
			'/contribution.md'
		]
	}, {
		title: '教程',
		children: [
			'/tutorial/zero_based',
			'/tutorial/common',
			'/tutorial/mutation',
			'/tutorial/2d',
			'/tutorial/aiming_and_perspective',
			'/tutorial/observer',
			'/tutorial/core'
		]
	}, {
		title: '手册',
		children: [
			{
				title: '',
				path: '/manual/documents',
				children: [
					'/manual/documents/event.md',
					{
						title: '值(Value)',
						children: [
							"/manual/documents/value-effect-and-text-id.md",
							"/manual/documents/value-logical-operator.md",
							"/manual/documents/value-math.md",
							"/manual/documents/event-info.md",
							"/manual/documents/value-player.md",
							"/manual/documents/value-match-map-team.md",
							"/manual/documents/value-array.md",
							"/manual/documents/value-variable.md",
							"/manual/documents/value-constant.md"
						]
					}, {
						title: '动作(Action)',
						children: [
							"/manual/documents/action-control-flow.md",
							"/manual/documents/action-player.md",
							"/manual/documents/action-team.md",
							"/manual/documents/action-variable.md",
							"/manual/documents/action-match.md",
							"/manual/documents/action-effect-text.md"
						]
					},
					"/manual/documents/string.md",
					{
						title: "效果与音效(Effect And Sound)",
						path: "https://www.yuque.com/zhaohua-zgi3w/overwatch-document/tykhqq"
					},
					"/manual/documents/icon.md",
					"/manual/documents/contributor.md"
				]
			},
			'/manual/array',
			'/manual/continued_event',
			'/manual/vector'
		]
	}, {
		title: '国服作品',
		path: 'https://www.owmod.net/'
	},
	'/foreign'
];

module.exports = {
  base: "/",
  title: "熔火工坊文档",
  description: "地图工坊,守望先锋,地图工坊教程,地图工坊文档,熔火工坊文档",
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3]
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    ['vuepress-plugin-baidu-google-analytics', {
      hm: '11aad64b5d8c0e079f3128e410654304',
      ignore_hash: true
    }],
    ['vuepress-plugin-copy-via-link', {
      start: '#copy:',
      message: '复制成功',
      manual_copy: '复制失败，请手动复制'
    }]
  ],
  themeConfig: {
    repo: "GKD-OW/docs",
    editLinks: true,
    lang: 'zh-CN',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: 'QQ群',
      items: [{
          text: '交流群Ⅰ',
          link: 'https://jq.qq.com/?_wv=1027&k=5J2QSeu'
        },
        {
          text: '交流群Ⅱ',
          link: 'https://jq.qq.com/?_wv=1027&k=5uVyEyn'
        }
      ]
    }],
    sidebar: require('./list')
  }
};
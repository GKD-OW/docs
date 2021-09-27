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
      hm: '964e6c85881afa4ed3d6bbfcbe4bac27',
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
    editLinkText: '在 GitHub 上编辑',
    sidebarDepth: 1,
    lastUpdated: '上次更新',
    searchMaxSuggestions: 10,
    nav: [{
      text: '文档',
      link: '/'
    }, {
      text: '熔火工坊',
      link: 'https://www.owmod.net/'
    }, {
      text: 'QQ群',
      link: 'https://jq.qq.com/?_wv=1027&k=5J2QSeu'
    }],
    sidebar: require('./list')
  }
};
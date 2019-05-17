module.exports = {
  base: "/",
  title: "地图工坊",
  description: "地图工坊",
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3]
    }
  },
  plugins: [
    ['vuepress-plugin-baidu-google-analytics', {
      hm: '44b41bc63385a6b27e692272bb1fb393',
      ignore_hash: true
    }]
  ],
  themeConfig: {
    repo: "sylingd/ow-workshop",
    editLinks: true,
    lang: 'zh-CN',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 2,
    nav: [{
      text: '首页',
      link: '/'
    }],
    sidebar: require('./list')
  }
};
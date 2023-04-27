module.exports = {
  title: '真内控',
  description: '真内控学习记录.',

  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,

    // 搜索框
    search: true,
    searchMaxSuggestions: 10,
    algolia: {
      apiKey: '20b88bdd51332433b33016054db474d6',
      indexName: '0f70d0737b4a0098a574a4d5d45c229b',
      appId: '1QDEN86POS',
    },

    logo: "/logo.jpg",
    siteTitle: "真内控前端文档",

    // 导航栏配置
    nav: [
      { text: "首页", link: "/" },
      { text: "知识库", link: "/base/index" },
      {
        text: "代码",
        items: [
          { text: "Seven.js", link: "/seven/index" },
          // { text: "Item B", link: "/item-2" },
          // { text: "Item C", link: "/item-3" },
        ],
      },
      { text: "逻辑流程", link: "/add/index" },
      { text: "关于", link: "http://www.znk.group/" },
    ],

    // 侧边栏
    sidebar: {
      "/base/": [
        {
          text: "入门考核",
          collapsed: false,
          items: [
            { text: "考核一", link: "/base/" },
            { text: "考核二", link: "/base/2" },
            { text: "考核三", link: "/base/3" },
            { text: "入门考核大纲", link: "/base/cross" },
          ],
        },
        {
          text: "入岗考核",
          collapsed: true,
          items: [
            { text: "考核四", link: "/base/4" },
            { text: "考核五", link: "/base/5" },
            { text: "考核六", link: "/base/6" },
          ],
        },
        {
          text: "内控模式",
          collapsed: true,
          items: [
            { text: "14种内控模式", link: "/base/14" },
            { text: "常见外部制度要求", link: "/base/ism" },
            { text: "审计与纪检定性", link: "/base/env" },
          ],
        },
      ],
      "/seven/": [
        {
          text: "方法",
          collapsed: false,
          items: [
            { text: "系统", link: "/seven/" },
            { text: "字符串", link: "/seven/string" },
            { text: "数组", link: "/seven/array" },
            { text: "对象", link: "/seven/object" },
            { text: "$", link: "/seven/$" },
            { text: "$.F", link: "/seven/$F" },
            { text: "$.X", link: "/seven/$X" },
            { text: "$.Data", link: "/seven/$Data" },
            { text: "$.Loading", link: "/seven/$Loading" },
            { text: "_NK", link: "/seven/_NK" },
          ],
        },
      ],
      "/add/":[
        {
          text: "开发流程",link: "/add/"
        },
        {
          text: "测试流程",link: "/add/cash"
        }
      ]
    },

    // 页脚
    footer: {
      // message: "Released under the MIT License.",
      copyright: "Copyright © ZNK 2023.3-present Evan You",
    },
  },
};

/*
 * Author  rhys.zhao
 * Date  2023-03-02 14:02:43
 * LastEditors  hailie.pan
 * LastEditTime  2023-08-30 15:01:19
 * Description vuepress配置文件
 */

module.exports = {
  base: "/my-vuepress/",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/imgs/favicon.ico" }]],
  title: "重学React",
  description: "React官方文档学习总结",

  port: "8899",
  open: true,

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    // todo: 在这里修改你书写内容的logo
    logo: "/imgs/react-logo.png",
    repo: "HailiePan/react-learn",
    repoLabel: "点亮⭐收藏",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "为该章节纠错",
    lastUpdated: "上次更新",
    search: true,
    navbar: [
      {
        text: "😶‍🌫️ 基础篇",
        link: "/base/",
      },
      {
        text: "😶‍🌫️ 进阶篇",
        link: "/senior/",
      },
      {
        text: "🤔 原理篇",
        link: "/origin/",
      },
    ],
    sidebar: {
      "/base/": [
        {
          text: "基础篇",
          children: [
            "/base/README.md",
            // todo: 在这里添加你基础篇的文章
          ],
        },
      ],
      "/senior/": [
        {
          text: "进阶篇",
          children: [
            "/senior/README.md",
            // todo: 在这里添加你进阶篇的文章
          ],
        },
      ],
      "/origin/": [
        {
          text: "原理篇",
          children: [
            "/origin/README.md",
            // todo: 在这里添加你原理篇的文章
          ],
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};

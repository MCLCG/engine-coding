import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';
import { nav, sidebar } from './config/bar-config.ts';

export default defineConfig4CustomTheme({
  // 国际化
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Engine coding',
      description: '前端编码工程化文档',
    },
  },
  // 基础路由,后面所有的路由都会在上面加上这个值
  base: '/engine-coding/',
  // 自定义菜单布局
  themeConfig: {
    logo: '/img/avator.jpg',
    nav,
    sidebar,
    docsDir: 'docs',
    // 搜索展示10条
    searchMaxSuggestions: 10,
    // 导航栏的github链接
    repo: 'MCLCG/engine-coding',
    footer: {
      createYear: 2023,
      copyrightInfo:
        'encode studio | <a href="https://github.com/MCLCG/engine-coding" target="_blank">github</a>',
    },

    extendFrontmatter: {
      author: {
        name: '国国',
        link: 'https://github.com/MCLCG/engine-coding',
      },
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/img/avator.jpg' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端编码规范工程化',
      },
    ],
  ],
  plugins: <UserPlugins>[
    [
      // 复制插件
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],
    // 缩放插件
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
  extraWatchFiles: ['.vuepress/config.ts'],
});

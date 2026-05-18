import { defineConfig } from 'vitepress'

const guideSidebar = [
  { text: '新手入门', link: '/guide/getting-started' },
  { text: '生物群系', link: '/guide/biomes' },
  { text: '生物图鉴', link: '/guide/creatures' },
  { text: '合成配方', link: '/guide/crafting' },
  { text: '载具指南', link: '/guide/vehicles' }
]

const guideSidebarEn = [
  { text: 'Getting Started', link: '/guide/getting-started' },
  { text: 'Biomes', link: '/guide/biomes' },
  { text: 'Creatures', link: '/guide/creatures' },
  { text: 'Crafting', link: '/guide/crafting' },
  { text: 'Vehicles', link: '/guide/vehicles' }
]

const guideSidebarJa = [
  { text: 'はじめに', link: '/guide/getting-started' },
  { text: 'バイオーム', link: '/guide/biomes' },
  { text: '生物', link: '/guide/creatures' },
  { text: 'クラフト', link: '/guide/crafting' },
  { text: '乗り物', link: '/guide/vehicles' }
]

const guideSidebarKo = [
  { text: '시작하기', link: '/guide/getting-started' },
  { text: '바이옴', link: '/guide/biomes' },
  { text: '생물', link: '/guide/creatures' },
  { text: '제작법', link: '/guide/crafting' },
  { text: '탈것', link: '/guide/vehicles' }
]

export default defineConfig({
  base: '/',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['script', {}, `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wsxbsvfl4j");`]
  ],
  markdown: {
    theme: { light: 'github-light', dark: 'one-dark-pro' }
  },
  sitemap: {
    hostname: 'https://www.ludokfo.com'
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '深海迷航2 Wiki',
      description: '深海迷航2 玩家攻略资料站 — 全生物、全配方、全区域指南',

      themeConfig: {
        logo: '🌊',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索攻略内容' },
              modal: {
                displayDetails: '显示详情',
                resetButtonTitle: '清除',
                backButtonTitle: '返回',
                noResultsText: '没有找到相关结果',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        },
        nav: [
          { text: '首页', link: '/' },
          { text: '新手入门', link: '/guide/getting-started' },
          {
            text: '数据图鉴',
            items: [
              { text: '生物群系', link: '/guide/biomes' },
              { text: '生物图鉴', link: '/guide/creatures' },
              { text: '合成配方', link: '/guide/crafting' },
              { text: '载具指南', link: '/guide/vehicles' }
            ]
          }
        ],
        sidebar: {
          '/guide/': [{ text: '🎮 攻略导航', items: guideSidebar }]
        },
        footer: {
          message: '玩家自制攻略站 · 与 Unknown Worlds Entertainment 无关',
          copyright: 'Copyright © 2026 深海迷航2 Wiki'
        },
        outline: { level: [2, 3], label: '本页目录' },
        docFooter: { prev: '上一篇', next: '下一篇' }
      }
    },

    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Subnautica 2 Wiki',
      description: 'Subnautica 2 Strategy Guide — All Creatures, Recipes & Biomes',

      themeConfig: {
        logo: '🌊',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search guide content' },
              modal: {
                displayDetails: 'Show details',
                resetButtonTitle: 'Clear',
                backButtonTitle: 'Back',
                noResultsText: 'No results found',
                footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
              }
            }
          }
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Getting Started', link: '/en/guide/getting-started' },
          {
            text: 'Database',
            items: [
              { text: 'Biomes', link: '/en/guide/biomes' },
              { text: 'Creatures', link: '/en/guide/creatures' },
              { text: 'Crafting', link: '/en/guide/crafting' },
              { text: 'Vehicles', link: '/en/guide/vehicles' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [{ text: '🎮 Guide Navigation', items: guideSidebarEn }]
        },
        footer: {
          message: 'Fan-made guide · Not affiliated with Unknown Worlds Entertainment',
          copyright: 'Copyright © 2026 Subnautica 2 Wiki'
        },
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' }
      }
    },

    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'Subnautica 2 攻略 Wiki',
      description: 'Subnautica 2 攻略データベース — 全生物・全レシピ・全バイオーム',

      themeConfig: {
        logo: '🌊',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                displayDetails: '詳細を表示',
                resetButtonTitle: 'クリア',
                backButtonTitle: '戻る',
                noResultsText: '結果が見つかりません',
                footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' }
              }
            }
          }
        },
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'はじめに', link: '/ja/guide/getting-started' },
          {
            text: 'データベース',
            items: [
              { text: 'バイオーム', link: '/ja/guide/biomes' },
              { text: '生物', link: '/ja/guide/creatures' },
              { text: 'クラフト', link: '/ja/guide/crafting' },
              { text: '乗り物', link: '/ja/guide/vehicles' }
            ]
          }
        ],
        sidebar: {
          '/ja/guide/': [{ text: '🎮 ナビゲーション', items: guideSidebarJa }]
        },
        footer: {
          message: 'ファンメイド攻略 · Unknown Worlds Entertainmentとは関係ありません',
          copyright: 'Copyright © 2026 Subnautica 2 Wiki'
        },
        outline: { level: [2, 3], label: 'ページ目次' },
        docFooter: { prev: '前へ', next: '次へ' }
      }
    },

    ko: {
      label: '한국어',
      lang: 'ko-KR',
      title: 'Subnautica 2 공략 Wiki',
      description: 'Subnautica 2 공략 데이터베이스 — 모든 생물, 레시피, 바이옴',

      themeConfig: {
        logo: '🌊',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: '검색', buttonAriaLabel: '검색' },
              modal: {
                displayDetails: '상세 보기',
                resetButtonTitle: '초기화',
                backButtonTitle: '뒤로',
                noResultsText: '결과를 찾을 수 없습니다',
                footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' }
              }
            }
          }
        },
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '시작하기', link: '/ko/guide/getting-started' },
          {
            text: '데이터베이스',
            items: [
              { text: '바이옴', link: '/ko/guide/biomes' },
              { text: '생물', link: '/ko/guide/creatures' },
              { text: '제작법', link: '/ko/guide/crafting' },
              { text: '탈것', link: '/ko/guide/vehicles' }
            ]
          }
        ],
        sidebar: {
          '/ko/guide/': [{ text: '🎮 내비게이션', items: guideSidebarKo }]
        },
        footer: {
          message: '팬메이드 공략 · Unknown Worlds Entertainment와 무관',
          copyright: 'Copyright © 2026 Subnautica 2 Wiki'
        },
        outline: { level: [2, 3], label: '페이지 목차' },
        docFooter: { prev: '이전', next: '다음' }
      }
    }
  }
})

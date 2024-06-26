import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mutaradifaat Ul Quran",
  description: "A Digital version of the book",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Arabic Index', link: '/arabic-index' }
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Arabic Index',
            link: '/arabic-index',
            collapsed: true,
            // items: getArabicIndexAlphabets('/arabic-index'),
          },
          { text: 'Urdu Index', link: '/urdu-index', collapsed: true }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: '<link href="https://fonts.googleapis.com/css2?family=Gulzar&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">'}
    ]
  ]
})

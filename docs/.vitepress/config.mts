import { defineConfig } from 'vitepress'
import { getArabicIndexAlphabets } from '../../data/dataLayer';

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
            items: getArabicIndexAlphabets('/arabic-index'),
          },
          { text: 'Runtime API Examples', link: '/api-examples', collapsed: true }
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
      { href: 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400..700&display=swap', rel: 'stylesheet' }
    ]
  ]
})

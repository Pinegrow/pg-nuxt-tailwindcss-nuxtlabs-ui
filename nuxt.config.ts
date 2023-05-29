export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description:
        'Vue Designer Nuxt Tailwind CSS / NuxtLabs UI - Quick start template',
      author: 'Pinegrow',
      nav: [
        { text: 'Home', link: '/' },
        { text: `Quick Start`, link: '/quick-start' },
        { text: 'Subscribe', link: '/subscribe' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: [
    '@pinegrow/nuxt-module',
    // 'nuxt-icon', // not using this because the format nuxt-icon uses is not same as UIcon of @nuxthq/ui
    '@nuxthq/ui',
    '@nuxt/devtools',
    '@nuxt/content',
  ],
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), nuxtlabs/ui uses the unocss format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      tailwindcss: {
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // TODO: restartOnThemeUpdate is required at the moment to automatically restart nuxt dev server whenever theme is changed in Vue Designer's design panel (which is very slow at the moment)
        // restartOnThemeUpdate might not be required if the HMR issue with nuxt tailwind module is fixed - https://github.com/nuxt-modules/tailwindcss/issues/682
        // restartOnThemeUpdate: true,
      },
    },
  },
  ui: {
    icons: 'all',
  },
  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
})

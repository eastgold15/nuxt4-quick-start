// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-27",
  devtools: { enabled: true },
  devServer: {
    port: Number.parseInt(process.env.NUXT_PORT!) || 5000
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },
  future: {
    compatibilityVersion: 4
  },
  css: ["@/assets/style/main.css"],

  modules: [
    "@unocss/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "vue-sonner/nuxt",
    "@nuxt/icon"
  ],

  runtimeConfig: {
    count: 1,
    apiSecret: "", // 可以由 NUXT_API_SECRET 环境变量覆盖
    public: {
      // 可以由 NUXT_BASEURL_DEV 环境变量覆盖
      apiBase: "",
      apiBase_mock: ""
    }
  },

  $production: {
    app: {
      head: {
        title: "生产模板",
        titleTemplate: "%s - Nuxt 4 + UnoCSS + VueUse"
      }
    }
    // routeRules: {
    //   "/**": { isr: true },
    // },
  },
  $development: {
    //
    app: {
      head: {
        title: "开发模板",
        titleTemplate: "%s - Nuxt 4 + UnoCSS + VueUse"
      }
    },

    sourcemap: {
      server: true,
      client: true
    }

  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        jsx: "preserve"
      }
    }
  },
  icon: {
    customCollections: [
      {
        prefix: "my-icon",
        dir: "./app/assets/imgs"
      }
    ]
  },
  //
  colorMode: {
    preference: "light",
    fallback: "light",
    classPrefix: "",
    classSuffix: ""
  }

});

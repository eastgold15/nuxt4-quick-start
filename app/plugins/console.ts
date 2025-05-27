export default defineNuxtPlugin({
  name: "my-plugin",
  enforce: "pre", // 'pre' 或 'post'
  async setup(nuxtApp) {
    // 插件逻辑

    console.log("Nuxt plugin is running");
    console.log("Current environment:", process.env.NODE_ENV);
    console.log(process.env.NUXT_TEXT);
  },
  hooks: {
    "app:created": function () {
      const nuxtApp = useNuxtApp();
      // 在 app:created 钩子中执行逻辑
    }
  },
  env: {
    islands: true // 控制是否在 server-only/island 组件中运行
  }
});

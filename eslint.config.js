// 引入 @antfu/eslint-config，这是一个基于 Vue 3、TypeScript 和现代前端最佳实践的 ESLint 配置集合
import antfu from "@antfu/eslint-config";

// 导出默认配置，调用 antfu 函数并传入自定义配置对象
// https://github.com/antfu/eslint-config
export default antfu(
  {
    // === 忽略检查的文件路径 ===
    ignores: [
      "snapshot*",
      "**/snapshot*/**",
      "dist",
      "**/dist/**",
      "lib",
      "**/lib/**",
      "es",
      "**/es/**",
      "esm",
      "**/esm/**",
      "node_modules",
      "**/node_modules/**",
      "src/_common",
      "src/_common/**",
      "static",
      "**/static/**",
      "cypress",
      "**/cypress/**",
      "script/test/cypress",
      "script/test/cypress/**",
      "_site",
      "**/_site/**",
      "temp*",
      "**/temp*/**",
      "static/",
      "**/static/**/",
      "!.prettierrc.js",
      "!**/.prettierrc.js/**"
    ],

    // === 自动格式化相关配置 ===
    formatters: {
      css: true, // 启用 CSS 文件和 <style> 块的自动格式化
      html: true, // 启用 HTML 文件的自动格式化
      markdown: "prettier" // 使用 Prettier 格式化 Markdown 文件
    },

    // === UnoCSS 支持 ===
    unocss: true,

    // === 代码风格配置 ===
    stylistic: {
      indent: 2, // 缩进为 2 个空格
      quotes: "double", // 字符串使用双引号
      semi: true, // 语句末尾加分号
      jsx: true // 支持 JSX 语法
    },

    // === 启用 TypeScript 和 Vue 支持 ===
    typescript: true,
    vue: true,

    // === 减少强制性规则（更宽松）===
    lessOpinionated: true,

    // === 自定义规则覆盖 ===
    rules: {
      "style/semi": ["error", "always"], // 强制在语句末尾使用分号
      "style/comma-dangle": ["error", "never"], // 禁止末尾逗号
      "style/arrow-parens": ["error", "always"], // 箭头函数参数必须始终有括号
      "arrow-body-style": ["error", "as-needed"], // 当可以省略大括号时，强制省略
      "prefer-arrow-callback": ["error"], // 优先使用箭头函数作为回调
      "style/max-statements-per-line": ["error", { max: 2 }], // 每行最多允许两个语句
      "vue/no-unused-refs": "off", // 允许未使用的模板 ref
      "vue/component-name-in-template-casing": ["error", "kebab-case"], // Vue 模板中组件名必须是 kebab-case
      "n/prefer-global/process": ["error", "never"], // 不推荐全局使用 process
      "eqeqeq": ["error", "allow-null"], // 允许 == null 的比较
      "regexp/no-unused-capturing-group": ["error", {
        fixable: false,
        allowNamed: false
      }],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "unused-imports/no-unused-vars": ["off"], // 关闭“未使用导入”警告
      "curly": ["error", "multi-line"], // 多行语句必须使用大括号包裹
      "vue/block-order": [
        "error",
        {
          order: ["template", "script", "style"]
        }
      ] // Vue 块块顺序

    }
  },
  // === 针对 .ts 文件的特殊规则（当前为空）===
  {
    files: ["**/*.ts"],
    rules: {}
  }
);

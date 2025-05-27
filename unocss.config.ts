import type { Theme } from "@unocss/preset-wind4";
import { createRemToPxProcessor } from "@unocss/preset-wind4/utils";
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

// 自定义主题，变量到style/main.css中定义
const selfTheme: Theme["defaults"] = {
  // 这里的颜色，虽然写了--primary 但在main.css中使用记得写成--color-primary
  colors: {
    primary: "var(--primary)", // 只要你的class 中出现primary 就会被匹配，进而生成颜色
    secondary: "var(--secondary)",
    background: "var(--background)"
  }
};

export default defineConfig({
  shortcuts: [
    // 示例：定义一些快捷样式
    ["btn", "px-4 py-2 rounded text-white bg-primary hover:bg-secondary"]
  ],
  // theme是完全覆盖unocss带的默认主题，一般使用extendTheme，theme可以不写。
  /*   theme: {
  }, */
  // 继承默认主题，添加自定义主题去覆盖默认主题。定义主题使用css变量，这样跟换css 变量实现主题切换。
  extendTheme: (defaultTheme: Theme["defaults"]) => ({
    ...defaultTheme, // 默认主题
    colors: {
      ...defaultTheme.colors, // 保留默认颜色
      ...selfTheme.colors // 添加自定义颜色
    }
  }),

  presets: [
    presetWind4({
      preflights: {
        reset: true,
        theme: {
          mode: true,
          process: createRemToPxProcessor()

        }
      }
    }),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetTypography(),
    presetWebFonts({
      themeKey: "font"
    })
  ],
  postprocess: [createRemToPxProcessor()],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
});

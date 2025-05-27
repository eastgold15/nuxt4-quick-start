import type { Theme } from "@unocss/preset-wind4";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
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
    ["btn", "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"],
    ["icon-btn", "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600"]
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),

    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono"
      },
      processors: createLocalFontProcessor()
    })
  ],
  // theme是完全覆盖unocss带的默认主题，一般使用extendTheme，theme可以不写。
  /*   theme: {
  }, */
  // 继承默认主题，添加自定义主题去覆盖默认主题。定义主题使用css变量，这样跟换css 变量实现主题切换。
  extendTheme: (defaultTheme: Theme["defaults"]) => ({
    ...defaultTheme, // 默认主题
    colors: {
      ...defaultTheme?.colors, // 保留默认颜色
      ...selfTheme.colors // 添加自定义颜色
    }
  }),

  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
});

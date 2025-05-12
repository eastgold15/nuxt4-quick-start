import type { Theme } from '@unocss/preset-wind4'
import { postprocessors } from '@unocss/preset-wind4'
import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,

  transformerVariantGroup,
} from 'unocss'

// 自定义主题，变量到style/main.css中定义
const selfTheme: Theme['defaults'] = {

  colors: {
    veryCool: '#0000ff', // very-cool
    primary: 'var(--primary)', // 只要你的class 中出现primary 就会被匹配，进而生成颜色
    secondary: 'var(--secondary)',
    background: 'var(--background)',
    text: 'var(--text)',
  },
}

export default defineConfig({
  shortcuts: [
    // 示例：定义一些快捷样式
    ['btn', 'px-4 py-2 rounded text-white bg-primary hover:bg-secondary'],
  ],
  // 这个是完全覆盖默认主题
  theme: {
  },
  // 继承默认主题，添加自定义主题
  extendTheme: (defaultTheme: Theme['defaults']) => {
    return {
      ...defaultTheme,
      selfTheme,

    }
  },

  presets: [
    presetWind4({
      preflights: {
        reset: true,
        theme: {
          mode: true,
          process: createRemToPxProcessor(),

        },
      },
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      themeKey: 'font',
    }),
  ],
  postprocess: [createRemToPxProcessor()],
  transformers: [
    transformerVariantGroup(),
  ],
})

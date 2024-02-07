import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        display: 'Ubuntu:500,700',
        body: 'Inter:400,600'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})

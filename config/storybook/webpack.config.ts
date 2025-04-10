import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  // 1. Настройка резолвинга
  config.resolve = {
    ...config.resolve,
    modules: [...(config.resolve?.modules || []), paths.src],
    extensions: [...(config.resolve?.extensions || []), '.ts', '.tsx'],
    alias: {
      ...config.resolve?.alias,
      '@': paths.src,
    },
  }

  // Инициализация config.module, если его нет
  config.module = config.module || {}

  // Инициализация rules, если их нет
  config.module.rules = config.module.rules || []

  // 2. Правильная обработка SVG
  const validRules = config.module.rules.filter((rule): rule is RuleSetRule => !!rule && typeof rule === 'object')

  const svgRuleIndex = validRules.findIndex((rule) => {
    if (typeof rule.test === 'string') {
      return rule.test.includes('svg')
    }
    return rule.test?.toString().includes('svg')
  })
  if (svgRuleIndex !== -1) {
    config.module.rules.splice(svgRuleIndex, 1)
  }

  // 3. Добавляем свои лоадеры
  config.module.rules.push(
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    },
    buildCssLoaders(true),
    {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  )

  // Инициализация plugins, если их нет
  config.plugins = config.plugins || []

  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
      __API_URL__: JSON.stringify(''),
    }),
  )

  return config
}

// packages/service/craco.config.ts
import { getLoader, loaderByName } from '@craco/craco'
import { CracoConfig } from '@craco/types'

const cracoConfig: CracoConfig = {
  babel: {
    plugins: ['@emotion'],
  },
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'))
      if (isFound) {
        match.loader.include = undefined
        match.loader.exclude = /node_modules/
      }

      return webpackConfig
    },
  },
}

export default cracoConfig

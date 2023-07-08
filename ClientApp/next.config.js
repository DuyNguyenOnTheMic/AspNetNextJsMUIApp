/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/swagger/',
        destination: 'http://localholst:5099/swagger/',
      }
    ]
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }
    return config
  }
}

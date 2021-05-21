const config = {
  projectName: 'taro_zhihu',
  date: '2018-6-12',
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: 'dist',
  framework: 'react',
  defineConstants: {
  },
  mini: {

  },
  h5: {
    // NOTE H5 打包静态资源时带 hash 值，方便缓存、版本管理
    publicPath: '/',
    staticDirectory: 'static',
    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[chunkhash].js'
    },
    imageUrlLoaderOption: {
      limit: 5000,
      name: 'static/images/[name].[hash].[ext]'
    },
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[chunkhash].css',
    },
  },
  // h5: {
  //   publicPath: '/',
  //   staticDirectory: 'static',
  //   module: {
  //     postcss: {
  //       autoprefixer: {
  //         enable: true
  //       }
  //     }
  //   }
  // }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

### Taro简介
Taro 是由凹凸实验室打造的一套遵循 React 语法规范的多端统一开发框架。

使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信小程序、H5、App 端等）运行的代码。目前Taro支持编译出支持微信小程序、H5运行的代码，RN和支付宝小程序的支持还在开发中。具体介绍请看这篇[文章](https://aotu.io/notes/2018/06/07/Taro/)，[github地址](https://github.com/NervJS/taro)

### 前言
为了学习Taro和Ts,对github开源项目[知乎的小程序demo](https://github.com/jimczj/taro_zhihu)参考，并进行修改，实现一个Taro和Ts入门级demo项目（Taro+Ts+react+hooks）

### 安装
安装 Taro 开发工具 @tarojs/cli

使用 npm 或者 yarn 全局安装

```
npm install -g @tarojs/cli
// 或
yarn global add @tarojs/cli
```
下载代码
```
git clone https://github.com/running-snail-sfs/taro-ts-zhihu.git
# 安装依赖
cd taro-ts-zhihu
npm i
```

### 使用

文件目录如下：
```
├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── pages              页面文件目录
|   |   ├── index          index页面目录
|   |   |   ├── index.js   index页面逻辑
|   |   |   └── index.css  index页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```
进入项目目录开始开发，可以选择小程序预览模式，或者h5预览模式，若使用微信小程序预览模式，则需要自行下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，选择预览项目根目录。

**微信小程序编译预览模式:**


```
# npm script
npm run dev:weapp
# 或 仅限全局安装
taro build --type weapp --watch
```

**H5编译预览模式:**
```
# npm script
npm run dev:h5
# 或 仅限全局安装
taro build --type h5 --watch
```


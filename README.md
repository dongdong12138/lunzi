# 小车车轮子 - 一个 Vue UI 组件

作者：BarryDong

时间：2019/04/19

## 介绍

这是我在学习 Vue 过程中做的 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在 CSS 中开启 border-box
    
    ```
    *，
    *::before，
    *::after { box-sizing: border-box; }
    ```
    IE8 及以上浏览器支持此样式。
    
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```
    :root { /* 根元素，也可以换成 html */
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: #fff;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```
    IE15 及以上浏览器支持此样式。

2. 安装 lunzi-barrydong
    ```npm
    npm i --save lunzi-barrydong
    ```
3. 引入 lunzi-barrydong
    ```npm
    import {Button, ButtonGroup, Icon} from 'lunzi-barrydong'
    import 'lunzi-barrydong/dist/index.css'
    
    export default {
      name: 'App',
      components: {
        HelloWorld,
        'g-button': Button
      }
    }
    ```
4. 引入 svg symbols
    ```
    <script src="//at.alicdn.com/t/font_1154181_6rckzj2559r.js"></script>
    ```

## 文档
启动项目：npx parcel index.html --no-cache

## 提问

## 变更记录

## 联系方式

## 贡献代码




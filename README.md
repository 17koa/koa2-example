# koa2-example

## 准备

```
npm i -g coden
npm i -g typings
```

## 初始化

```
git clone https://github.com/17koa/koa2-example.git
cd koa2-example
npm i
typings install
npm start
```

## 实例

1. 最简单的koa2.js
1. koa2-example

## Koa2-example说明

```
  "koa": "^2.0.0",
  "koa-bodyparser": "^2.0.1",
  "koa-convert": "^1.2.0",
  "koa-json": "^1.1.1",
  "koa-logger": "^1.3.0",
  "koa-onerror": "^1.2.1",
  "koa-router": "^7.0.0",
  "koa-static": "^1.5.2",
  "koa-views": "^5.0.1"
```

为了支持koa2，下面组件要注意和1.x不一样

```
  "koa": "^2.0.0",
  "koa-router": "^7.0.0",
  "koa-views": "^5.0.1"
```

## 语法提示

```
typings install node koa --ambient --save
```

强制提示

```
/// <reference path="typings/main/ambient/node/index.d.ts"/>
/// <reference path="typings/main/ambient/koa/index.d.ts"/>
```

## 调试

http://i5ting.github.io/vsc/#107

# 项目简介
1、使用lerna包管理工具+ umi + react + electron + TypeScript搭建项目
2、使用husky和 lint-staged 来约束代码规范
3、rem屏幕适配、@emotion/styled css in ts、react hooks用法(app中自己手写)


# 项目运行

```
#项目clone
git clone https://github.com/dongodngtang/wanxing.git --recursive

#运行环境
yarn start:app的export NODE_OPTIONS=--openssl-legacy-provider;是解决node 17的问题
node版本>=16，我使用的是最新的v17.6.0。node版本管理工具nvm

#安装依赖
lerna bootstrap

#项目运行
yarn build:ele // ts会报错但不影响编译，问题还没定位到
yarn start



```

# 项目结构

```
project-tree

├─ packages
│ ├─ app //主项目业务
│ ├─ electron //PC端打包业务
├─ lerna.json
├─ package.json
└─ README.md


```



### 创建项目
通过npm初始化一个项目，然后在根目录中创建三个约定文件：index.html、index.js、main.js，其中index.html内容如下：
```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>index.html</h1>
  <script src="./index.js"></script>
</body>
</html>
```

### 安装

```shell
npm i @xbxie1/front-dev-server
```

### 添加命令
在 package.json 的 scripts 字段中添加下面键值对
```bash
dev: "devServer"
```
devServer是@xbxie1/front-dev-server提供的命令

### 启动开发服务器
在命令行执行 `npm run dev` 以启动开发服务器


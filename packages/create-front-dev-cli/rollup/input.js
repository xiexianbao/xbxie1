import prompts from 'prompts'
import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'

await prompts({
  type: 'text',
  name: 'projectName',
  message: 'Project name',
}).then(result => {
  // index.html
  writeFile(
  resolve('index.html'),
`<!DOCTYPE html>
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
`
  )
  
  // package.json
  writeFile(
  resolve('package.json'),
`{
  "name": "${result.projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "devServer"
  },
  "devDependencies": {
    "@xbxie1/front-dev-server": "^1.0.0"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
`
  )
  
  // index.js
  writeFile(resolve('index.js'), '')
  
  // main.js
  writeFile(resolve('main.js'), '')
})
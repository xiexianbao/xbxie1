import Koa from 'koa'
import chalk from 'chalk'
import router from './router.js'

const port = 3000

// 基于 Koa 创建 http 服务器
export function startHttpServer() {
  const app = new Koa()

  app
  .use(router.routes())
  .listen(port, 'localhost', () => {
    console.log(chalk.yellow(`开启 http 服务: ${port}`))
  })
}

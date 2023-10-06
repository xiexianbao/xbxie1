import Router from '@koa/router'
import { readFile } from 'node:fs/promises'

const router = new Router()

// 处理 index.js 请求
router.get('/index.js', async (ctx, next) => {
  const indexContent = await readFile('./index.js', {
    encoding: 'utf-8'
  })

  ctx.body = indexContent
  ctx.set('content-type', 'application/javascript')
})

// 处理除了 index.js 之外的请求，并都返回 index.html 的内容
router.get('/:path*', async (ctx, next) => {
  const htmlContent = await readFile('./index.html', {
    encoding: 'utf-8'
  })

  ctx.body = htmlContent
  ctx.set('content-type', 'text/html')
})

export default router
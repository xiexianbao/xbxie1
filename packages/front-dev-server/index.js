import { startHttpServer } from './src/http/index.js'
import { startWsServer } from './src/websocket/index.js'
import { startRollupWatcher } from './src/rollup/index.js'

startHttpServer()

const wsServer = startWsServer()

// 开启 rollup 监听
startRollupWatcher().on('event', event => {
  if (event.code === 'END') {
    reloadBrowser()
  }
})

// 通知浏览器重新加载
function reloadBrowser() {
  wsServer.clients.forEach(client => {
    client.send(JSON.stringify({
      type: 'reload'
    }))
  })
}
import { resolve } from 'node:path'

export default function inject() {
  return {
    name: 'inject',
    transform(code, id) {
      if (resolve('main.js') === id) {
        return injectedCode + code
      }
      return null
    }
  }
}

const injectedCode = `
const ws = new WebSocket('ws://localhost:3001')

ws.onopen = (event) => {
  console.log("open", event)
}

ws.onmessage = (event) => {
  console.log("message", event)
  const payload = JSON.parse(event.data)
  if (payload.type === 'reload') {
    location.reload()
  }
}
`
Плагин Vue-3 для поставки socket
https://stackoverflow.com/questions/64782385/how-to-vue3-composition-api-plugin




Plugin:
  import { io } from 'socket.io-client'
export default {
  install: (app, { connection, options }) => {
    const socket = io(connection, options)
    app.config.globalProperties.$socket = socket
    app.provide('socket', socket)
  }
}
In your main.js add the following
import Socketio from '@/plugins/Socket.io'
app.use(Socketio, {
  connection: 'http://localhost:4001',
  options: {
    // Your Socket.io options here
  }
})
main.js example
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Socketio from '@/plugins/Socket.io'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(Socketio, {
  connection: 'http://localhost:4001',
  options: {
    // Your Socket.io options here
  }
})
app.mount('#app')
Usages:
  Option API: this
In the option api you can use this.$socket to access the socket
<template>
// HTML here
</template>
<script>
  export default {
  mounted () {
  // You can use the socket like shown below
  this.$socket.on('foo', () => {
  console.log('bar')
})
}
}
</script>
Option API: inject
In the option api you also have the possibility to inject the plugin
<template>
// HTML here
</template>
<script>
  import { inject } from 'vue'
  export default {
  mounted () {
  const socket = inject('socket')
  // You can use the socket like shown below
  socket.on('foo', () => {
  console.log('bar')
})
}
}
</script>
Composition API inject
In the composition API your should use inject
<template>
{{ bar }}
</template>
<script>
  import { ref, inject } from 'vue'
  export default {
  setup() {
  const socket = inject('socket')
  return { ...foo(socket) }
}
}
  function foo(socket) {
  const bar = ref('')
  socket.on('foo', (value) => {
  bar.value = value
})
  return {
  bar
}
}
</script>
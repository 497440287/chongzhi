import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import middleware from './middleware'
import 'amfe-flexible'
import VConsole from 'vconsole'

if (process.env.VUE_APP_VCONSOLE === 'true') {
  // eslint-disable-next-line
  const vConsole = new VConsole()
}

createApp(App).use(store).use(router).use(middleware).mount('#app')

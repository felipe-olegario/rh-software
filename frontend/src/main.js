import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)
app.use(VueTheMask)

registerPlugins(app)

app.mount('#app')

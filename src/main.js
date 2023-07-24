import './assets/main.css'
import router from '@/router/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import useAuth from '@/composable/useAuth'
import 'vue-toast-notification/dist/theme-sugar.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
useAuth(app)

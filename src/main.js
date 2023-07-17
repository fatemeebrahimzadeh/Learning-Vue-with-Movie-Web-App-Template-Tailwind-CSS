import './assets/main.css'
import router from '@/router/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import useAuth from '@/composable/useAuth'

const app = createApp(App)
app.use(router)
app.mount('#app')
useAuth(app)

import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import firebaseVue from './firebase'

import './assets/main.css'

const app = createApp(App)

app.use(firebaseVue)

app.use(router)

app.mount('#app')

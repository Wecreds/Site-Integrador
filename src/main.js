import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBx7MIpAojvOphoAohtow1_Rvq0MTUUYKo",
  authDomain: "pi---quiz.firebaseapp.com",
  projectId: "pi---quiz",
  storageBucket: "pi---quiz.appspot.com",
  messagingSenderId: "514543609649",
  appId: "1:514543609649:web:4c5bdce30d73b94cab3210"
};


const app = createApp(App)

initializeApp(firebaseConfig);

import './assets/main.css'

app.use(router)

app.mount('#app')

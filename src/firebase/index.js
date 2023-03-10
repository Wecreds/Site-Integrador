import { initializeApp } from "firebase/app";

import "firebase/auth"
import "firebase/storage"
import "firebase/database"

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBx7MIpAojvOphoAohtow1_Rvq0MTUUYKo",
    authDomain: "pi---quiz.firebaseapp.com",
    projectId: "pi---quiz",
    storageBucket: "pi---quiz.appspot.com",
    messagingSenderId: "514543609649",
    appId: "1:514543609649:web:4c5bdce30d73b94cab3210"
    // apiKey: process.env.VUE_APP_API_KEY,
    // authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    // projectId: process.env.VUE_APP_PROJECT_ID,
    // storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    // appId: process.env.VUE_APP_APP_ID
})

export default function install (Vue) {
    Object.defineProperty(Vue.prototype, '$firebase', {
        get () {
            return firebaseApp
        }
    })
}
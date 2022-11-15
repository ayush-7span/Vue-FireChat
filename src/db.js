import "firebase/database";

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCpy54JPfe5WxwWkZ-kQQFWbv2pfj_jj_c",
  authDomain: "vuefirechat-74946.firebaseapp.com",
  projectId: "vuefirechat-74946",
  storageBucket: "vuefirechat-74946.appspot.com",
  messagingSenderId: "760053897742",
  appId: "1:760053897742:web:3cf47fafc3a05b0e373a5f"
}

const db = firebase.initializeApp(config);
export default db;
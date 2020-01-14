import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB9aW1Tc62zTHE-Im8UcQWvCmEGDO0DUj0",
    authDomain: "vue-shop-5c1d2.firebaseapp.com",
    databaseURL: "https://vue-shop-5c1d2.firebaseio.com",
    projectId: "vue-shop-5c1d2",
    storageBucket: "vue-shop-5c1d2.appspot.com",
    messagingSenderId: "724194820707",
    appId: "1:724194820707:web:b6b113f1b6f5d132e62e56",
    measurementId: "G-RL3RXHZLJ3"
  };

  export const fb = firebase.initializeApp(firebaseConfig);
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
  'use strict';
  var App = window.App || {};
    
  var FirebaseConfig = {
      apiKey: "AIzaSyDdwaD6tOYDYFU0wD5yFTC41byPj45xD7E",
      authDomain: "coffeerun-273f4.firebaseapp.com",
      projectId: "coffeerun-273f4",
      storageBucket: "coffeerun-273f4.appspot.com",
      messagingSenderId: "629582412760",
      appId: "1:629582412760:web:df2d88e929b7fe394690ad",
      measurementId: "G-4Q3QLHQLKH"
  };
  
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;
  

  
  })(window);
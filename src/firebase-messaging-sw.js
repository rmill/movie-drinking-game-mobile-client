self.importScripts('https://www.gstatic.com/firebasejs/5.4.0/firebase-app.js');
self.importScripts('https://www.gstatic.com/firebasejs/5.4.0/firebase-messaging.js');

// TODO: This should be read from the config file
const firebaseConfig = {
  apiKey: "AIzaSyCdZ_eDSfZ_R8VEAJQEzzyei5y2ss4VGbA",
  authDomain: "drink-up-cinema.firebaseapp.com",
  databaseURL: "https://drink-up-cinema.firebaseio.com",
  projectId: "drink-up-cinema",
  storageBucket: "drink-up-cinema.appspot.com",
  messagingSenderId: "828526569727",
  appId: "1:828526569727:web:7fa45208cddef659e204ca"
};

firebase.initializeApp(firebaseConfig);

try { const messaging = firebase.messaging() }
catch(err) { console.log(err) }

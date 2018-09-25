self.importScripts('https://www.gstatic.com/firebasejs/5.4.0/firebase-app.js');
self.importScripts('https://www.gstatic.com/firebasejs/5.4.0/firebase-messaging.js');

// TODO: This should be read from the config file
let config =  {
  apiKey: "AIzaSyCdZ_eDSfZ_R8VEAJQEzzyei5y2ss4VGbA",
  authDomain: "drink-up-cinema.firebaseapp.com",
  messagingSenderId: "828526569727",
  projectId: "drink-up-cinema",
  storageBucket: "drink-up-cinema.appspot.com"
}

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  console.log('background', payload)
  // return self.registration.showNotification();
});

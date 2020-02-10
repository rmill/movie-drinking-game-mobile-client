var firebase = require('firebase')
var json = require(`./${process.argv[2]}.json`)

var config = {
  apiKey: "AIzaSyCdZ_eDSfZ_R8VEAJQEzzyei5y2ss4VGbA",
  authDomain: "drink-up-cinema.firebaseapp.com",
  databaseURL: "https://drink-up-cinema.firebaseio.com",
  projectId: "drink-up-cinema",
  storageBucket: "drink-up-cinema.appspot.com",
  messagingSenderId: "828526569727",
  appId: "1:828526569727:web:7fa45208cddef659e204ca"
}

firebase.initializeApp(config)

var db = firebase.database()
var game = db.ref('game/mobile-test')

game.set(json).then(() => db.goOffline());

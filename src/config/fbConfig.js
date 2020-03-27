import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAe4tnPO2KVxv9UYIVOS9JargqilPk4bKs",
    authDomain: "test-77d82.firebaseapp.com",
    databaseURL: "https://test-77d82.firebaseio.com",
    projectId: "test-77d82",
    storageBucket: "test-77d82.appspot.com",
    messagingSenderId: "390054012885",
    appId: "1:390054012885:web:0a2b286e0d7d7c6340bf5c",
    measurementId: "G-JSMZNQE4J2"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  firebase.firestore().settings({timestampsInSnapshots:true});


export default firebase;
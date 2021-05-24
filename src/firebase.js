import firebase from 'firebase'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAebHAY8AapyVilzLHF_amq6HopgC-Zkb4",
    authDomain: "movieapp-d38a8.firebaseapp.com",
    projectId: "movieapp-d38a8",
    storageBucket: "movieapp-d38a8.appspot.com",
    messagingSenderId: "63216729771",
    appId: "1:63216729771:web:b3758181937b16bbc301ee",
    measurementId: "G-EYJ8XNTYTM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

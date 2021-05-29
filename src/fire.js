import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDKV2k2z_r-TSTcFYuHPfoW3c0VhqnTItA",
    authDomain: "internship-demo-8ad69.firebaseapp.com",
    projectId: "internship-demo-8ad69",
    storageBucket: "internship-demo-8ad69.appspot.com",
    messagingSenderId: "527295063769",
    appId: "1:527295063769:web:d5f3e84a5794a7c44f00c8",
    measurementId: "G-310KJTGLB5"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;
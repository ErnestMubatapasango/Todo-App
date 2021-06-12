import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBW-vonuF8atnKR6GlfKWrtSjGLHjT7ak0",
    authDomain: "todo-app-v2-tawanda.firebaseapp.com",
    databaseURL: "https://todo-app-v2-tawanda.firebaseio.com",
    projectId: "todo-app-v2-tawanda",
    storageBucket: "todo-app-v2-tawanda.appspot.com",
    messagingSenderId: "648312956210",
    appId: "1:648312956210:web:fe94d8151cedf66ce2632b",
    measurementId: "G-TE3D57EHQR"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
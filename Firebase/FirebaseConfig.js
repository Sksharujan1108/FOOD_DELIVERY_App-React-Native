import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCY97Ia2sRvDsCI3Qgp1buiGaJKbQyTyaM",
  authDomain: "fooddeliveryapp-37bdb.firebaseapp.com",
  projectId: "fooddeliveryapp-37bdb",
  storageBucket: "fooddeliveryapp-37bdb.appspot.com",
  messagingSenderId: "656940986601",
  appId: "1:656940986601:web:41258e69e684eae3d9c078"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

// Sk Sharu
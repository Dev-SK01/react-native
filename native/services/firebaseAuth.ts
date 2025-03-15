import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDKg5ACA3Q1CqpwmFzk7ePdAKPXxurheog",
    authDomain: "ucer-35987.firebaseapp.com",
    projectId: "ucer-35987",
    storageBucket: "ucer-35987.firebasestorage.app",
    messagingSenderId: "262059546255",
    appId: "1:262059546255:web:d96f7f258efe8fe914c2fa",
    measurementId: "G-EP1LJCZLHH"
};

// Initialize Firebase
let auth:any;
if (getApps().length == 0) {
    const app = initializeApp(firebaseConfig);
    // Auth initilize
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
    });
}else{
  auth = getAuth();
}

export default auth;

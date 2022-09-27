import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyB0GDVITxcyoJwP4oar_EzfvsZYGR3UAKI",
  authDomain: "animal-rescue-stg.firebaseapp.com",
  projectId: "animal-rescue-stg",
  storageBucket: "animal-rescue-stg.appspot.com",
  messagingSenderId: "813992844077",
  appId: "1:813992844077:web:b015ce33e02b7dc76791a4",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;

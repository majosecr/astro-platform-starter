import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaLxazj2XmHQt5K-fkGGGkQaqFo52Pkow",
  authDomain: "estadisticas-de-futbol-61512.firebaseapp.com",
  projectId: "estadisticas-de-futbol-61512",
  storageBucket: "estadisticas-de-futbol-61512.firebasestorage.app",
  messagingSenderId: "796290608416",
  appId: "1:796290608416:web:891d25154b9a9d2d88bb45",
  measurementId: "G-8KRHDW8R9V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
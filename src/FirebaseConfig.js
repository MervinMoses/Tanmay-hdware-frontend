import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADGtjWh5qdhUPeYnj69ZFPgxDPIoe7aZU",
  authDomain: "tanmay-hardware.firebaseapp.com",
  projectId: "tanmay-hardware",
  storageBucket: "tanmay-hardware.appspot.com",
  messagingSenderId: "140533664072",
  appId: "1:140533664072:web:5a5089c7771658c076cb7d",
  measurementId: "G-KM66B9G4NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database =getAuth(app);
export const analytics = getAnalytics(app);
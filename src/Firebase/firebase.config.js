// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBj8DV7YHklnwNu9KWgCUi9lq_rFq-gDrY',
  authDomain: 'tasty-traditions.firebaseapp.com',
  projectId: 'tasty-traditions',
  storageBucket: 'tasty-traditions.appspot.com',
  messagingSenderId: '181373495902',
  appId: '1:181373495902:web:f4bcfe4b583705bdc862cf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

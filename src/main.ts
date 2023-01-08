import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-b9CbiSA3MHTvLFlaFeotVoZBdOUh-BE",
  authDomain: "bubs-a612c.firebaseapp.com",
  projectId: "bubs-a612c",
  storageBucket: "bubs-a612c.appspot.com",
  messagingSenderId: "547712944019",
  appId: "1:547712944019:web:273dc9b8d38bf29483ca66",
  measurementId: "G-PD3ZTLB08F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

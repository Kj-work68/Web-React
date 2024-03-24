import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC-CiZgj20E1PUG1sFi1GmwAUIKwwbR4ps",
    authDomain: "web-react-3239b.firebaseapp.com",
    projectId: "web-react-3239b",
    storageBucket: "web-react-3239b.appspot.com",
    messagingSenderId: "162122726971",
    appId: "1:162122726971:web:e03c178cb0c4a83f69261e",
    measurementId: "G-M49L43CSH7"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
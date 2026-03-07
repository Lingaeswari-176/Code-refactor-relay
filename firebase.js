// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwTJrqSiYdORt1k7ni7JsBNC8HPFKElI0",
  authDomain: "code-refactor-relay.firebaseapp.com",
  projectId: "code-refactor-relay",
  storageBucket: "code-refactor-relay.firebasestorage.app",
  messagingSenderId: "295626481672",
  appId: "1:295626481672:web:8e5aa854de1540aa1df1bd",
  measurementId: "G-GWN67QQEZH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

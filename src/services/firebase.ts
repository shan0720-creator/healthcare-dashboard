import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔥 tera config
const firebaseConfig = {
  apiKey: "AIzaSyDA3DoeDPDsLZCR0NZ58_BvC2UyUp4ULEY",
  authDomain: "healthcare-dashboard-ae86b.firebaseapp.com",
  projectId: "healthcare-dashboard-ae86b",
  storageBucket: "healthcare-dashboard-ae86b.firebasestorage.app",
  messagingSenderId: "820203624434",
  appId: "1:820203624434:web:fef34b9e53b3809442bd6b",
  measurementId: "G-V5PR21Q70Z"
};

// ✅ Initialize
const app = initializeApp(firebaseConfig);

// ✅ Auth export
export const auth = getAuth(app);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YAHAN_APNI_API_KEY",
  authDomain: "jaidevedit.firebaseapp.com",
  projectId: "jaidevedit",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.uploadData = async function () {

  const status = document.getElementById("status");

  const data = {
    type: document.getElementById("type").value,
    title: document.getElementById("title").value,
    thumb: document.getElementById("thumb").value,
    link: document.getElementById("link").value,
    qr: document.getElementById("qr").value,
    prompt: document.getElementById("prompt").value,
    trending: document.getElementById("trending").checked,
    createdAt: Date.now()
  };

  if (!data.title || !data.thumb) {
    status.innerText = "❌ Title & Thumbnail required";
    return;
  }

  status.innerText = "Uploading...";

  try {
    await addDoc(collection(db, "uploads"), data);
    status.innerText = "✅ Upload successful";

    document.querySelectorAll("input, textarea").forEach(i => i.value = "");
    document.getElementById("trending").checked = false;

  } catch (e) {
    console.error(e);
    status.innerText = "❌ Upload failed";
  }
};

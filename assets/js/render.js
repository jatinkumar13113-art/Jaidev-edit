// ===============================
// IMPORT FIREBASE DB
// ===============================
import { db } from "./firebase.js";

import {
  collection,
  query,
  orderBy,
  limit,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ===============================
// RENDER TRENDING (TOP 1)
// ===============================
async function renderTrending() {
  const box = document.getElementById("trendingBox");
  if (!box) return;

  box.innerHTML = "Loading...";

  try {
    const q = query(
      collection(db, "uploads"),
      orderBy("createdAt", "desc"),
      limit(10)
    );

    const snap = await getDocs(q);

    let trendingItem = null;

    snap.forEach(doc => {
      const data = doc.data();
      if (data.trending && !trendingItem) {
        trendingItem = data;
      }
    });

    if (!trendingItem) {
      box.innerHTML = "<p>No trending content</p>";
      return;
    }

    box.innerHTML = `
      <div class="trend-card">
        <img src="${trendingItem.thumb}" />
        <h4>${trendingItem.title}</h4>

        ${
          trendingItem.link
            ? `<a href="${trendingItem.link}" target="_blank">Open</a>`
            : ""
        }

        ${
          trendingItem.prompt
            ? `<pre>${trendingItem.prompt}</pre>`
            : ""
        }

        ${
          trendingItem.qr
            ? `<p>VN QR: ${trendingItem.qr}</p>`
            : ""
        }
      </div>
    `;
  } catch (err) {
    console.error(err);
    box.innerHTML = "<p>Error loading trending</p>";
  }
}


// ===============================
// RENDER LATEST (LAST 6)
// ===============================
async function renderLatest() {
  const box = document.getElementById("latestBox");
  if (!box) return;

  box.innerHTML = "";

  try {
    const q = query(
      collection(db, "uploads"),
      orderBy("createdAt", "desc"),
      limit(6)
    );

    const snap = await getDocs(q);

    if (snap.empty) {
      box.innerHTML = "<p>No uploads yet</p>";
      return;
    }

    snap.forEach(doc => {
      const d = doc.data();

      box.innerHTML += `
        <div class="item">
          <img src="${d.thumb}" />
          <div class="title">${d.title}</div>
          <small>${d.type}</small>
        </div>
      `;
    });
  } catch (err) {
    console.error(err);
    box.innerHTML = "<p>Error loading data</p>";
  }
}


// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderTrending();
  renderLatest();
});    action = `<p>VN QR: ${item.qr}</p>`;
  }

  box.innerHTML = `
    <div class="card">
      <img src="${item.thumb}">
      <h4>${item.title}</h4>
      ${action}
    </div>
  `;
}

// ===============================
// RENDER LATEST ITEMS
// ===============================
function renderLatest(){
  const box = document.getElementById("latestBox");
  if(!box) return;

  const all = [
    ...(JSON.parse(localStorage.getItem("capcut") || "[]")),
    ...(JSON.parse(localStorage.getItem("gemini") || "[]")),
    ...(JSON.parse(localStorage.getItem("vn") || "[]")),
    ...(JSON.parse(localStorage.getItem("video") || "[]"))
  ];

  if(all.length === 0){
    box.innerHTML = "<p>No uploads yet</p>";
    return;
  }

  box.innerHTML = "";

  all.slice(-5).reverse().forEach(item => {
    box.innerHTML += `
      <div class="item">
        <img src="${item.thumb}">
        <div>${item.title}</div>
      </div>
    `;
  });
}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderTrending();
  renderLatest();
});

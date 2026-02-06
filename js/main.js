/***********************
 ADMIN PASSWORD
************************/
const ADMIN_PASSWORD = "12345";

/***********************
 LOAD DATA (PERMANENT)
************************/
let trending = JSON.parse(localStorage.getItem("trending")) || [];

/***********************
 SLIDER – ALL PAGES
************************/
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (menuBtn && sidebar && overlay) {
    menuBtn.onclick = () => {
      sidebar.classList.add("open");
      overlay.classList.add("show");
    };
    overlay.onclick = () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    };
  }

  // HOME – latest thumbnail (old UI)
  const homeThumb = document.getElementById("homeTrendingThumb");
  if (homeThumb && trending.length > 0) {
    homeThumb.src = trending[trending.length - 1].thumbnail;
  }
});

/***********************
 TELEGRAM POPUP
************************/
function closeTG() {
  const p = document.getElementById("tgPopup");
  if (p) p.style.display = "none";
}

/***********************
 DRIVE IMAGE AUTO CONVERT
************************/
function autoConvertDriveURL() {
  const input = document.getElementById("thumb");
  if (!input) return;

  const url = input.value.trim();
  if (url.includes("drive.google.com/file/d/")) {
    const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (m && m[1]) {
      input.value =
        "https://drive.google.com/uc?export=view&id=" + m[1];
    }
  }
}

/***********************
 THUMB PREVIEW
************************/
function previewThumbnail() {
  const i = document.getElementById("thumb");
  const p = document.getElementById("thumbPreview");
  if (!i || !p) return;

  if (!i.value.trim()) {
    p.style.display = "none";
    p.src = "";
    return;
  }

  p.src = i.value.trim();
  p.style.display = "block";
  p.onerror = () => (p.style.display = "none");
}

/***********************
 ADMIN LOGIN
************************/
function login() {
  const pass = document.getElementById("pass").value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    renderAdmin();
  } else {
    alert("Wrong Password");
  }
}

/***********************
 UPLOAD POST (PERMANENT)
************************/
function uploadTrending() {
  const title = document.getElementById("title").value.trim();
  const thumb = document.getElementById("thumb").value.trim();
  const drive = document.getElementById("drive").value.trim();
  const category = document.getElementById("category").value.trim();
  const prompt = document.getElementById("prompt")
    ? document.getElementById("prompt").value.trim()
    : "";

  if (!title || !thumb || !drive || !category) {
    alert("All fields required");
    return;
  }

  trending.push({
    id: Date.now(),
    title: title,
    thumbnail: thumb,
    drive: drive,
    category: category,   // 🔥 category saved permanently
    prompt: category === "Gemini" ? prompt : ""
  });

  localStorage.setItem("trending", JSON.stringify(trending));

  document.getElementById("title").value = "";
  document.getElementById("thumb").value = "";
  document.getElementById("drive").value = "";
  if (document.getElementById("prompt"))
    document.getElementById("prompt").value = "";
  document.getElementById("category").value = "";

  renderAdmin();
}

/***********************
 ADMIN LIST
************************/
function renderAdmin() {
  const box = document.getElementById("adminList");
  if (!box) return;

  box.innerHTML = "";
  trending.forEach(i => {
    box.innerHTML += `
      <div class="card">
        <img src="${i.thumbnail}" class="thumb">
        <h3>${i.title}</h3>
        <p>${i.category}</p>
        ${i.category === "Gemini" && i.prompt ? "<small>Prompt saved</small>" : ""}
        <button onclick="deleteItem(${i.id})">Delete</button>
      </div>
    `;
  });
}

/***********************
 DELETE (ONLY MANUAL)
************************/
function deleteItem(id) {
  trending = trending.filter(item => item.id !== id);
  localStorage.setItem("trending", JSON.stringify(trending));
  renderAdmin();
}

/***********************
 GEMINI FUNCTIONS
************************/
function copyPrompt(id) {
  const el = document.getElementById("prompt-" + id);
  if (!el) return;

  navigator.clipboard.writeText(el.innerText)
    .then(() => alert("Prompt copied ✅"));
}

function openGemini() {
  window.open("https://gemini.google.com/app", "_blank");
}

/***********************
 RENDER CARD
************************/
function renderCard(i, box) {
  box.innerHTML += `
    <div class="card">
      <img src="${i.thumbnail}" class="thumb">
      <h3>${i.title}</h3>

      ${
        i.category === "Gemini" && i.prompt
          ? `
          <div class="prompt-box">
            <p id="prompt-${i.id}">${i.prompt}</p>
            <button onclick="copyPrompt(${i.id})">📋 Copy</button>
            <button onclick="openGemini()">🤖 Open Gemini</button>
          </div>`
          : ""
      }

      <a href="${i.drive}" target="_blank">
        <button>Download</button>
      </a>
    </div>
  `;
}

/***********************
 LOAD TRENDING PAGE
************************/
function loadTrending() {
  const box = document.getElementById("trendingList");
  if (!box) return;

  box.innerHTML = "";
  trending.forEach(i => renderCard(i, box));
}

/***********************
 LOAD CATEGORY PAGE
************************/
function loadFixed(category) {
  const box = document.getElementById("fixedList");
  if (!box) return;

  box.innerHTML = "";
  trending
    .filter(i => i.category === category)
    .forEach(i => renderCard(i, box));
}

/***********************
 SEARCH CATEGORY PAGE
************************/
function searchFixed(category) {
  const key = document.getElementById("searchInput").value.toLowerCase();
  const box = document.getElementById("fixedList");
  if (!box) return;

  box.innerHTML = "";
  trending
    .filter(
      i =>
        i.category === category &&
        i.title.toLowerCase().includes(key)
    )
    .forEach(i => renderCard(i, box));
}

/***********************
 AUTO LOAD (SAFE)
************************/
loadTrending();
loadFixed("CapCut");
loadFixed("VN");
loadFixed("Gemini");
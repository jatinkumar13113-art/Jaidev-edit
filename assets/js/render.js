// ===============================
// HELPER: get first trending item
// ===============================
function getFirstTrending(key){
  const data = JSON.parse(localStorage.getItem(key) || "[]");
  return data.find(item => item.trending === true);
}

// ===============================
// RENDER TRENDING (HOME PAGE)
// Priority: Video → CapCut → Gemini → VN
// ===============================
function renderTrending(){
  const box = document.getElementById("trendingBox");
  if(!box) return;

  const item =
    getFirstTrending("video") ||
    getFirstTrending("capcut") ||
    getFirstTrending("gemini") ||
    getFirstTrending("vn");

  if(!item){
    box.innerHTML = "<p>No trending content</p>";
    return;
  }

  let action = "";

  if(item.video){
    action = `<video controls src="${item.video}"></video>`;
  } else if(item.link){
    action = `<a href="${item.link}" target="_blank">Use Template</a>`;
  } else if(item.prompt){
    action = `<pre>${item.prompt}</pre>`;
  } else if(item.qr){
    action = `<p>VN QR: ${item.qr}</p>`;
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

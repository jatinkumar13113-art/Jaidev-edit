function getFirstTrending(key){
  const data = JSON.parse(localStorage.getItem(key) || "[]");
  return data.find(i => i.trending);
}

function renderTrending(){
  let item =
    getFirstTrending("video") ||
    getFirstTrending("capcut") ||
    getFirstTrending("gemini") ||
    getFirstTrending("vn");

  if(!item){
    document.getElementById("trendingBox").innerHTML =
      "<p>No trending content</p>";
    return;
  }

  let action = "";

  if(item.video){
    action = `<video controls src="${item.video}"></video>`;
  }
  if(item.link){
    action = `<a href="${item.link}" target="_blank">Use Template</a>`;
  }
  if(item.prompt){
    action = `<pre>${item.prompt}</pre>`;
  }
  if(item.qr){
    action = `<p>VN QR: ${item.qr}</p>`;
  }

  document.getElementById("trendingBox").innerHTML = `
    <img src="${item.thumb}">
    <h4>${item.title}</h4>
    ${action}
  `;
}

function renderLatest(){
  const box = document.getElementById("latestBox");
  const all = [
    ...(JSON.parse(localStorage.getItem("capcut")||"[]")),
    ...(JSON.parse(localStorage.getItem("gemini")||"[]")),
    ...(JSON.parse(localStorage.getItem("vn")||"[]")),
    ...(JSON.parse(localStorage.getItem("video")||"[]"))
  ].slice(-5).reverse();

  box.innerHTML = "";
  all.forEach(i=>{
    box.innerHTML += `
      <div class="item">
        <img src="${i.thumb}">
        <div>${i.title}</div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderTrending();
  renderLatest();
});// ================================
// TRENDING DATA FROM ADMIN PANEL
// ================================
document.addEventListener("DOMContentLoaded", () => {

  const trendingBox = document.getElementById("trendingBox");
  if (!trendingBox) return;

  const trendingData = JSON.parse(localStorage.getItem("trending")) || [];

  if (trendingData.length === 0) {
    trendingBox.innerHTML = "<p>No trending content</p>";
    return;
  }

  trendingBox.innerHTML = "";

  trendingData.reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "trend-card";

    div.innerHTML = `
      <h4>🔥 ${item.title}</h4>
      <small>${item.type}</small>
    `;

    trendingBox.appendChild(div);
  });

});

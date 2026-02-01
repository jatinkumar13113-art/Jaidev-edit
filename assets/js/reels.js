function renderReels(){
  const box = document.getElementById("reelsBox");
  const data = JSON.parse(localStorage.getItem("video") || "[]");

  if(data.length === 0){
    box.innerHTML = "<p style='padding:20px'>No reels available</p>";
    return;
  }

  box.innerHTML = "";

  // Latest first
  data.slice().reverse().forEach(item=>{
    box.innerHTML += `
      <div class="reel">
        <video src="${item.video}" controls muted playsinline></video>
        <div class="overlay">
          <div class="title">${item.title}</div>
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderReels);
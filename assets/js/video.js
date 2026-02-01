function playVideo(index){
  const data = JSON.parse(localStorage.getItem("video") || "[]");
  const item = data[index];

  const box = document.getElementById("videoList");
  box.innerHTML = `
    <div class="card">
      <h4>${item.title}</h4>
      <video controls autoplay src="${item.video}"></video>
    </div>
  `;
}

function renderVideos(){
  const box = document.getElementById("videoList");
  const data = JSON.parse(localStorage.getItem("video") || "[]");

  if(data.length === 0){
    box.innerHTML = "<p>No videos available</p>";
    return;
  }

  box.innerHTML = "";

  data.slice().reverse().forEach((item, index)=>{
    box.innerHTML += `
      <div class="card" onclick="playVideo(${data.length - 1 - index})">
        <img src="${item.thumb}">
        <h4>${item.title}</h4>
        <p>▶ Tap to play</p>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderVideos);
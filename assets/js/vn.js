function renderVN(){
  const box = document.getElementById("vnList");
  const data = JSON.parse(localStorage.getItem("vn") || "[]");

  if(data.length === 0){
    box.innerHTML = "<p>No VN templates available</p>";
    return;
  }

  box.innerHTML = "";

  data.slice().reverse().forEach(item=>{
    box.innerHTML += `
      <div class="card">
        <img src="${item.thumb}">
        <h4>${item.title}</h4>

        <div class="qr-box">
          <p><b>VN QR Code</b></p>
          <div class="qr">${item.qr}</div>
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderVN);
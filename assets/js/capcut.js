function renderCapcut(){
  const box = document.getElementById("capcutList");
  const data = JSON.parse(localStorage.getItem("capcut") || "[]");

  if(data.length === 0){
    box.innerHTML = "<p>No CapCut templates available</p>";
    return;
  }

  box.innerHTML = "";

  data.reverse().forEach(item=>{
    box.innerHTML += `
      <div class="card">
        <img src="${item.thumb}">
        <h4>${item.title}</h4>
        <a href="${item.link}" target="_blank">Use Template</a>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderCapcut);
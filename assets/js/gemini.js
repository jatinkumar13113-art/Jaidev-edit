function copyPrompt(text){
  navigator.clipboard.writeText(text);
  alert("Prompt copied!");
}

function renderGemini(){
  const box = document.getElementById("geminiList");
  const data = JSON.parse(localStorage.getItem("gemini") || "[]");

  if(data.length === 0){
    box.innerHTML = "<p>No Gemini prompts available</p>";
    return;
  }

  box.innerHTML = "";

  data.slice().reverse().forEach((item, index)=>{
    box.innerHTML += `
      <div class="card">
        <img src="${item.thumb}">
        <h4>${item.title}</h4>

        <pre class="prompt">${item.prompt}</pre>

        <button onclick="copyPrompt(${JSON.stringify(item.prompt)})">
          Copy Prompt
        </button>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderGemini);
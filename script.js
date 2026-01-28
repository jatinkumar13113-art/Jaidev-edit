// COPY BUTTON
function copyText(btn){
  const text = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  btn.innerText = "Copied ✓";
  setTimeout(()=>btn.innerText="Copy Prompt",1500);
}

// SEARCH BAR
const searchInput = document.getElementById("search");
if(searchInput){
  searchInput.addEventListener("keyup", function(){
    const value = this.value.toLowerCase();
    document.querySelectorAll(".movie-card").forEach(card=>{
      card.style.display =
        card.innerText.toLowerCase().includes(value)
        ? "block" : "none";
    });
  });
}

// DARK MODE
const toggle = document.getElementById("darkToggle");
if(toggle){
  toggle.onclick = ()=>{
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );
  };
}

// LOAD SAVED THEME
if(localStorage.getItem("theme")==="light"){
  document.body.classList.add("light");
}

// TELEGRAM POPUP (FIRST VISIT)
window.onload = ()=>{
  if(!localStorage.getItem("tgPopup")){
    const popup=document.getElementById("tgPopup");
    if(popup){
      popup.style.display="block";
      localStorage.setItem("tgPopup","shown");
    }
  }
};

function closePopup(){
  document.getElementById("tgPopup").style.display="none";
}

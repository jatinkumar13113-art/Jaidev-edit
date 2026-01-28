function copyText(btn){
  const text = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  btn.innerText = "Copied ✓";
  setTimeout(()=>btn.innerText="Copy Prompt",1500);
}

document.getElementById("darkToggle").onclick = ()=>{
  document.body.classList.toggle("light");
};

window.onload = ()=>{
  if(!localStorage.getItem("tgPopup")){
    document.getElementById("tgPopup").style.display="block";
    localStorage.setItem("tgPopup","shown");
  }
};

function closePopup(){
  document.getElementById("tgPopup").style.display="none";
}

setTimeout(()=>{
  document.getElementById("telegramPopup").style.display="flex";
},3000);

function closePopup(){
  document.getElementById("telegramPopup").style.display="none";
}

function toggleMode(){
  document.body.classList.toggle("light");
}

document.getElementById("search").addEventListener("keyup", function(){
  let v=this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display=c.innerText.toLowerCase().includes(v)?"block":"none";
  });
});

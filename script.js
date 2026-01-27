// COPY
function copyText(btn) {
  const text = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  btn.innerText = "Copied ✔";
  setTimeout(() => btn.innerText = "Copy", 1500);
}

// SEARCH
document.addEventListener("keyup", e => {
  if (e.target.id === "search") {
    let val = e.target.value.toLowerCase();
    document.querySelectorAll(".movie-card").forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(val)
        ? "block" : "none";
    });
  }
});

// TELEGRAM POPUP (FIRST VISIT)
window.onload = () => {
  if (!localStorage.getItem("popupShown")) {
    document.getElementById("tgPopup").style.display = "block";
  }
};

function closePopup() {
  document.getElementById("tgPopup").style.display = "none";
  localStorage.setItem("popupShown", "yes");
}

// DARK MODE
const toggle = document.getElementById("darkToggle");
if (localStorage.getItem("dark") === "on") {
  document.body.classList.add("dark");
}
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark",
    document.body.classList.contains("dark") ? "on" : "off");
};

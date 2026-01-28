// DARK MODE
const toggle = document.getElementById("darkToggle");
if (localStorage.getItem("dark") === "on") {
  document.body.classList.add("dark");
}
if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "dark",
      document.body.classList.contains("dark") ? "on" : "off"
    );
  };
}

// TELEGRAM POPUP (FIRST VISIT ONLY)
window.onload = () => {
  if (!localStorage.getItem("tgShown")) {
    const pop = document.getElementById("tgPopup");
    if (pop) pop.style.display = "block";
  }
};

function closePopup() {
  document.getElementById("tgPopup").style.display = "none";
  localStorage.setItem("tgShown", "yes");
}

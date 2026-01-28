// COPY BUTTON
function copyText(btn) {
  const text = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  btn.innerText = "Copied ✓";
  setTimeout(() => btn.innerText = "Copy", 1500);
}

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

// TELEGRAM POPUP (FIRST VISIT)
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

// Copy button
function copyText(button) {
  const text = button.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  button.innerText = "Copied ✔";
  setTimeout(() => {
    button.innerText = "Copy";
  }, 1500);
}

// Search (home + category pages)
document.addEventListener("keyup", function (e) {
  if (e.target.id === "search") {
    let value = e.target.value.toLowerCase();
    let cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  }
});

// Telegram popup – first visit only
window.addEventListener("load", () => {
  if (!localStorage.getItem("tgPopupShown")) {
    document.getElementById("tgPopup").style.display = "flex";
  }
});

function closePopup() {
  document.getElementById("tgPopup").style.display = "none";
  localStorage.setItem("tgPopupShown", "yes");
}

// Dark mode toggle
const toggle = document.getElementById("darkToggle");

if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark") ? "on" : "off"
  );
});

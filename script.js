// ========== COPY BUTTON ==========
function copyText(button) {
  const text = button.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  button.innerText = "Copied ✔";
  setTimeout(() => {
    button.innerText = "Copy";
  }, 1500);
}

// ========== SEARCH ==========
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

// ========== TELEGRAM POPUP (FIRST VISIT ONLY) ==========
window.addEventListener("load", () => {
  const popup = document.getElementById("tgPopup");
  if (popup && !localStorage.getItem("tgPopupShown")) {
    popup.style.display = "flex";
  }
});

function closePopup() {
  const popup = document.getElementById("tgPopup");
  if (popup) {
    popup.style.display = "none";
    localStorage.setItem("tgPopupShown", "yes");
  }
}

// ========== DARK MODE ==========
const toggle = document.getElementById("darkToggle");

if (toggle) {
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
}
<script src="../script.js"></script>

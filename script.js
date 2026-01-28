// SEARCH
function searchContent() {
  let q = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".card").forEach(c => {
    c.style.display = c.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
}

// COPY
function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

// AUTO NEW / TRENDING
document.querySelectorAll(".card").forEach(card => {
  let d = card.getAttribute("data-date");
  if (!d) return;

  let days = (new Date() - new Date(d)) / (1000*60*60*24);
  let badge = card.querySelector(".badge");

  if (days <= 3) badge.innerText = "NEW";
  else if (days <= 7) badge.innerText = "TRENDING";
  else badge.style.display = "none";
});

// TELEGRAM POPUP
setTimeout(() => {
  if (!localStorage.getItem("tg")) {
    document.getElementById("telegramPopup").style.display = "block";
  }
}, 4000);

function closeTelegram() {
  document.getElementById("telegramPopup").style.display = "none";
  localStorage.setItem("tg", "1");
}

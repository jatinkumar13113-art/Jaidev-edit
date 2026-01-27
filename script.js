const search = document.getElementById("search");

search.addEventListener("keyup", function() {
  let value = search.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
});

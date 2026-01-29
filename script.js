/* ================================
   JAIDEV EDITING - ALL JS SCRIPTS
   ================================ */


/* ========= 1️⃣ TELEGRAM AUTO POPUP (HOME PAGE ONLY) ========= */

window.onload = function () {

  // Sirf HOME page par
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {

    // Agar pehle popup aa chuka hai to dobara mat dikhao
    if (localStorage.getItem("tgPopupShown")) return;

    setTimeout(function () {
      var popup = document.getElementById("tgPopup");
      if (popup) {
        popup.style.display = "block";
      }
    }, 2000); // 2 second delay
  }
};

// Popup close function
function closePopup() {
  var popup = document.getElementById("tgPopup");
  if (popup) {
    popup.style.display = "none";
    localStorage.setItem("tgPopupShown", "yes");
  }
}


/* ========= 2️⃣ SCROLL TO TOP (FUTURE USE) ========= */

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* ========= 3️⃣ SIMPLE ALERT (OPTIONAL TEST) ========= */
// function showAlert() {
//   alert("Welcome to Jaidev Editing!");
// }


/* ========= 4️⃣ FUTURE PLACEHOLDER ========= */
/*
  - Night mode
  - Search filter
  - Load more templates
  (Baad me yahin add karenge)
*//* ========= SEARCH FUNCTION ========= */
function searchItems() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase();
    var ul = document.getElementById("itemList");
    var li = ul.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {
        var text = li[i].textContent || li[i].innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

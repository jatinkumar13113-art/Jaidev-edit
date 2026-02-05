function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-260px";
  document.getElementById("overlay").style.display = "none";
}

function showSection(id) {
  document.querySelectorAll(".content").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  closeSidebar();
}

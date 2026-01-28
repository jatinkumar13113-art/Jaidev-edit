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

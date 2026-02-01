document.addEventListener("DOMContentLoaded", () => {

  // ---------- TAB SYSTEM ----------
  window.openTab = function (id) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
  };
  openTab("capcut");

  // ---------- UPLOAD SYSTEM ----------
  document.querySelectorAll(".uploadBtn").forEach(btn => {
    btn.addEventListener("click", () => {

      const status = document.getElementById("uploadStatus");
      status.style.color = "#facc15";
      status.innerText = "⏳ Uploading...";

      btn.disabled = true;
      btn.innerText = "Uploading...";

      setTimeout(() => {

        // 🔥 SAVE DATA TO LOCALSTORAGE
        const uploads = JSON.parse(localStorage.getItem("uploads")) || [];

        uploads.push({
          title: "New Upload",
          time: Date.now()
        });

        localStorage.setItem("uploads", JSON.stringify(uploads));

        status.style.color = "#22c55e";
        status.innerText = "✅ Upload Done Successfully";

        btn.disabled = false;
        btn.innerText = "Upload";

      }, 1500);
    });
  });
});

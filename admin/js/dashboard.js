// TAB SYSTEM
function openTab(id) {
  document.querySelectorAll(".tab-content")
    .forEach(el => el.style.display = "none");

  document.getElementById(id).style.display = "block";
}

// DEFAULT TAB
document.addEventListener("DOMContentLoaded", () => {
  openTab("capcut");
});

// BASE64 CONVERTER
function toBase64(file, cb) {
  const r = new FileReader();
  r.onload = () => cb(r.result);
  r.readAsDataURL(file);
}

// ================= CAPCUT =================
function addCapcut() {
  const list = JSON.parse(localStorage.getItem("capcut") || "[]");
  toBase64(ccThumb.files[0], img => {
    list.push({
      title: ccTitle.value,
      thumb: img,
      link: ccLink.value,
      trending: ccTrend.checked
    });
    localStorage.setItem("capcut", JSON.stringify(list));
    alert("CapCut uploaded");
  });
}

// ================= VN =================
function addVN() {
  const list = JSON.parse(localStorage.getItem("vn") || "[]");
  toBase64(vnThumb.files[0], img => {
    list.push({
      title: vnTitle.value,
      thumb: img,
      qr: vnQR.value,
      trending: vnTrend.checked
    });
    localStorage.setItem("vn", JSON.stringify(list));
    alert("VN uploaded");
  });
}

// ================= GEMINI =================
function addGemini() {
  const list = JSON.parse(localStorage.getItem("gemini") || "[]");
  toBase64(gThumb.files[0], img => {
    list.push({
      title: gTitle.value,
      thumb: img,
      prompt: gPrompt.value,
      trending: gTrend.checked
    });
    localStorage.setItem("gemini", JSON.stringify(list));
    alert("Gemini uploaded");
  });
}

// ================= VIDEO =================
function addVideo() {
  const list = JSON.parse(localStorage.getItem("video") || "[]");
  toBase64(vThumb.files[0], thumb => {
    toBase64(vFile.files[0], vid => {
      list.push({
        title: vTitle.value,
        thumb: thumb,
        video: vid,
        trending: vTrend.checked
      });
      localStorage.setItem("video", JSON.stringify(list));
      alert("Video uploaded");
    });
  });
}
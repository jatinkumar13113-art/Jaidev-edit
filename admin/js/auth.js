// ================== DEFAULT ADMIN ==================
if (!localStorage.getItem("ADMIN_USER")) {
  localStorage.setItem("ADMIN_USER", "admin");
  localStorage.setItem("ADMIN_PASS", "1234");
}

// ================== LOGIN ==================
function adminLogin() {
  const u = document.getElementById("adminUser").value;
  const p = document.getElementById("adminPass").value;
  const err = document.getElementById("errorMsg");

  if (
    u === localStorage.getItem("ADMIN_USER") &&
    p === localStorage.getItem("ADMIN_PASS")
  ) {
    localStorage.setItem("ADMIN_AUTH", "YES");
    location.replace("dashboard.html");
  } else {
    err.innerText = "Wrong username or password";
  }
}

// ================== PASSWORD TOGGLE ==================
function togglePassword() {
  const p = document.getElementById("adminPass");
  p.type = p.type === "password" ? "text" : "password";
}

// ================== 🔒 HARD DASHBOARD BLOCK ==================
(function () {
  const page = location.pathname.split("/").pop();

  if (page === "dashboard.html") {
    if (localStorage.getItem("ADMIN_AUTH") !== "YES") {
      location.replace("login.html");
    }
  }
})();

// ================== LOGOUT ==================
function adminLogout() {
  localStorage.removeItem("ADMIN_AUTH");
  location.replace("login.html");
}
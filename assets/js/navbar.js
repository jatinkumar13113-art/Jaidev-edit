function loadNavbar(){

  const icons = {
    home: `
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>
      </svg>
    `,
    capcut: `
      <svg viewBox="0 0 24 24" class="icon">
        <rect x="3" y="4" width="18" height="16" rx="3"/>
        <path d="M7 9h10M7 13h10"/>
      </svg>
    `,
    reels: `
      <svg viewBox="0 0 24 24" class="icon">
        <rect x="3" y="3" width="18" height="18" rx="4"/>
        <polygon points="10,8 16,12 10,16"/>
      </svg>
    `,
    video: `
      <svg viewBox="0 0 24 24" class="icon">
        <rect x="3" y="5" width="15" height="14" rx="3"/>
        <polygon points="18,8 23,12 18,16"/>
      </svg>
    `,
    contact: `
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M21 16.5a3 3 0 0 1-3 3A15 15 0 0 1 4.5 6a3 3 0 0 1 3-3h2l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v2z"/>
      </svg>
    `
  };

  const topNav = `
    <nav class="top-nav">
      <a href="index.html">Home</a>
      <a href="capcut.html">CapCut</a>
      <a href="vn.html">VN</a>
      <a href="gemini.html">Gemini</a>
      <a href="reels.html">Reels</a>
      <a href="video.html">Video</a>
      <a href="contact.html">Contact</a>
    </nav>
  `;

  const bottomNav = `
    <nav class="bottom-nav">
      <a href="index.html">${icons.home}</a>
      <a href="capcut.html">${icons.capcut}</a>
      <a href="reels.html">${icons.reels}</a>
      <a href="video.html">${icons.video}</a>
      <a href="contact.html">${icons.contact}</a>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", topNav);
  document.body.insertAdjacentHTML("beforeend", bottomNav);

  highlightActive();
}

function highlightActive(){
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link=>{
    if(link.getAttribute("href") === page){
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadNavbar);
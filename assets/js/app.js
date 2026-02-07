document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const grid = document.getElementById("templateGrid");
  const adminSecret = document.getElementById("adminSecret");

  /* SIDEBAR */
  if (menuBtn && sidebar && overlay) {
    menuBtn.onclick = () => {
      sidebar.classList.add("active");
      overlay.classList.add("show");
    };
    overlay.onclick = () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("show");
    };
  }

  /* RENDER */
  function render(category="all"){
    if(!grid || typeof Store==="undefined") return;
    grid.innerHTML="";

    const data = Store.all().filter(t =>
      category==="all" || t.category===category
    );

    if(!data.length){
      grid.innerHTML="<p style='opacity:.6'>No templates found</p>";
      return;
    }

    data.forEach(t=>{
      const card=document.createElement("div");
      card.className="template-card";

      let buttons = "";

      /* GEMINI */
      if(t.category==="gemini"){
        buttons = `
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="copy-btn" data-text="${encodeURIComponent(t.text||"")}">
              Copy Prompt
            </button>
            <button class="open-btn" data-link="https://gemini.google.com/">
              Open Gemini
            </button>
          </div>
        `;
      }
      /* OTHERS */
      else{
        buttons = `
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="open-btn" data-link="${t.link||"#"}">
              Use Template
            </button>
            ${t.video ? `
              <button class="video-btn" data-link="${t.video}">
                Watch Video
              </button>` : ``}
          </div>
        `;
      }

      card.innerHTML=`
        <img src="${t.thumb}">
        <h3>${t.title}</h3>
        <p style="opacity:.7;font-size:13px">${t.text||""}</p>
        ${buttons}
      `;

      grid.appendChild(card);
    });
  }

  /* ACTIONS */
  document.addEventListener("click", function(e){

    if(e.target.classList.contains("open-btn")){
      window.open(e.target.dataset.link,"_blank");
    }

    if(e.target.classList.contains("video-btn")){
      window.open(e.target.dataset.link,"_blank");
    }

    if(e.target.classList.contains("copy-btn")){
      const txt = decodeURIComponent(e.target.dataset.text||"");
      navigator.clipboard.writeText(txt);
      e.target.textContent="Copied ✅";
      setTimeout(()=>e.target.textContent="Copy Prompt",1500);
    }
  });

  document.querySelectorAll("[data-cat]").forEach(b=>{
    b.onclick=()=>{
      render(b.dataset.cat);
      sidebar.classList.remove("active");
      overlay.classList.remove("show");
    };
  });

  render();

  if(adminSecret){
    adminSecret.onclick=()=>location.href="admin.html";
  }

});
function initLightbox(){const e=document.querySelectorAll("article img");if(0===e.length)return void setTimeout(initLightbox,1e3);const t=document.createElement("div");t.classList.add("lightbox-overlay"),document.body.appendChild(t);const i=document.createElement("img");i.classList.add("lightbox-image"),t.appendChild(i);const o=e=>{"Escape"===e.key&&(t.classList.remove("active"),document.body.style.overflow="",window.removeEventListener("keydown",o))};e.forEach((e=>{e.addEventListener("click",(()=>{i.src=e.getAttribute("src"),t.classList.add("active"),document.body.style.overflow="hidden",window.addEventListener("keydown",o)}))})),t.addEventListener("click",(()=>{t.classList.remove("active"),document.body.style.overflow="",window.removeEventListener("keydown",o)}))}initLightbox();
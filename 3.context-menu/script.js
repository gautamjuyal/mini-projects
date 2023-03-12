const contextMenu = document.querySelector(".context-menu");
const root = document.querySelector(":root");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contextMenu.style.display = "flex";
  contextMenu.style.animationPlayState = "true";

  let cW = contextMenu.offsetWidth;
  let cH = contextMenu.offsetHeight;
  let wW = window.innerWidth;
  let wH = window.innerHeight;

  console.log(cW);
  if (e.clientX + cW < wW) {
    contextMenu.style.setProperty("left", e.clientX + "px");
    contextMenu.style.setProperty("top", e.clientY + "px");
    if (e.clientY + cH > wH) {
      contextMenu.style.setProperty("top", e.clientY - cH + "px");
    }
  } else if (e.clientX + cW >= wW) {
    contextMenu.style.setProperty("left", e.clientX - cW + "px");
    contextMenu.style.setProperty("top", e.clientY + "px");
    if (e.clientY + cH > wH) {
      contextMenu.style.setProperty("top", e.clientY - cH + "px");
    }
  }
});

window.addEventListener("click", (e) => {
  contextMenu.style.display = "none";
});

// assets/scripts/components/easterEgg.js

const container = document.getElementById("game-container");
const iframe = document.getElementById("tron-iframe");

container.addEventListener("mouseover", () => {
  document.body.style.overflowY = "hidden";
  container.focus();
});

container.addEventListener("mouseout", (e) => {
  if (!container.contains(e.relatedTarget)) {
    document.body.style.overflowY = "auto";
    iframe?.contentWindow.postMessage("pause", "*");
  }
});


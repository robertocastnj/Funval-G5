/* ------------ Player 1 selection & type of game -------------------------- */
import {
  setActive,
  validateSelection,
  btnTurn,
  xmark,
  omark,
} from "./funciones.js";

if (window.location.pathname.endsWith("index.html")) {
  localStorage.clear();
  const xBtn = document.getElementById("xButton");
  const oBtn = document.getElementById("oButton");
  const cpuButton = document.getElementById("cpu_btn");
  const playerButton = document.getElementById("player_btn");

  xBtn.addEventListener("click", () => setActive(xBtn, oBtn, "X"));
  oBtn.addEventListener("click", () => setActive(oBtn, xBtn, "O"));

  playerButton.addEventListener("click", (e) => validateSelection(e, "player"));
  cpuButton.addEventListener("click", (e) => validateSelection(e, "cpu"));
}

if (window.location.pathname.endsWith("game.html")) {
  let n = 4;
  btnTurn(n);
  const pos1 = document.getElementById("bt1");
  if (n % 2 === 0) {
    pos1.addEventListener("click", () => omark(pos1));
    n++;
    console.log(n);
  } else {
    pos1.addEventListener("click", () => xmark(pos1));
    n++;
    console.log(n);
  }
}

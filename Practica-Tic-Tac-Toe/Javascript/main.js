/* ------------ Player 1 selection & type of game -------------------------- */
import {
  setActive,
  validateSelection,
  positionClick,
  cpuMove,
} from "./funciones.js";

if (window.location.pathname.endsWith("index.html")) {
  localStorage.clear();
  const xBtn = document.getElementById("xButton");
  const oBtn = document.getElementById("oButton");
  const cpuButton = document.getElementById("cpu_btn");
  const playerButton = document.getElementById("player_btn");

  xBtn.addEventListener("click", () => setActive(xBtn, oBtn, "X"));
  oBtn.addEventListener("click", () => setActive(oBtn, xBtn, "O"));

  playerButton.addEventListener("click", (e) => validateSelection(e, "pvp"));
  cpuButton.addEventListener("click", (e) => validateSelection(e, "cpu"));
}

/*-----------------Pantalla de juego ---------------  */

if (window.location.pathname.endsWith("game.html")) {
  let turn = 1;
  const totalPositions = 9;
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  // 🔹 Recuperar configuración del localStorage
  const player1Choice = localStorage.getItem("player1") || "X"; // "X" o "O"
  const mode = localStorage.getItem("game") || "pvp"; // "pvp" o "cpu"

  // 🔹 Asignar figuras a cada jugador
  let players = {};
  if (player1Choice === "X") {
    players = { 1: "X", 2: "O" };
  } else {
    players = { 1: "O", 2: "X" };
  }

  // 🔹 Inicializar botones
  for (let i = 1; i <= totalPositions; i++) {
    const btn = document.getElementById(`bt${i}`);
    btn.addEventListener("click", () => {
      // Bloquear si es turno de la CPU
      if (mode === "cpu") {
        const cpuIsX = players[2] === "X";
        const cpuTurn =
          (turn % 2 === 1 && cpuIsX) || (turn % 2 === 0 && !cpuIsX);
        if (cpuTurn) return;
      }

      let result = positionClick(i, btn, board, turn);
      board = result.occupied;
      turn = result.turn;

      // Si el juego terminó, salimos
      if (result.finished) return;

      // CPU juega
      if (mode === "cpu") {
        const cpuIsX = players[2] === "X";
        const cpuTurn =
          (turn % 2 === 1 && cpuIsX) || (turn % 2 === 0 && !cpuIsX);

        if (cpuTurn) {
          setTimeout(() => {
            let resultCPU = cpuMove(board, turn);
            board = resultCPU.occupied;
            turn = resultCPU.turn;
          }, 500);
        }
      }
    });
  }

  /* ------------------- Turn Section ---------------------- */
  function btnTurn(n) {
    const xTurn = document.getElementById("xTrn");
    const oTurn = document.getElementById("oTrn");
    if (n % 2 === 1) {
      xTurn.classList.replace("block", "hidden");
      oTurn.classList.replace("hidden", "block");
    } else {
      oTurn.classList.replace("block", "hidden");
      xTurn.classList.replace("hidden", "block");
    }
  }

  /* ------------------- Desactivar tablero ----------------- */
  function disableBoard() {
    for (let i = 1; i <= totalPositions; i++) {
      const btn = document.getElementById(`bt${i}`);
      btn.disabled = true;
    }
  }

  /* ------------------- X / O marks ------------------------ */
  function xmark(position) {
    const xelement = document.createElement("div");
    xelement.className = `h-[60%] `;
    xelement.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 8 8"
       class="object-cover h-full">
    <path fill="#33c3be"
          d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72L1.41 0z"/>
  </svg>`;
    position.appendChild(xelement);
  }

  function omark(position) {
    const oelement = document.createElement("div");
    oelement.className = `h-[60%] `;
    oelement.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       class="object-cover h-full">
    <path fill="#d1b065"
          d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
  </svg>`;
    position.appendChild(oelement);
  }

  /* ------------------- Checar ganador --------------------- */
  function checkWinner(board) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // filas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columnas
      [0, 4, 8],
      [2, 4, 6], // diagonales
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // 1 = X, 2 = O
      }
    }

    if (!board.includes(0)) return "draw"; // empate
    return null; // sigue el juego
  }

  /* ------------------- Jugar posición --------------------- */
  function positionClick(pos, button, occupied, turn) {
    btnTurn(turn);

    if (occupied[pos - 1] != 0) {
      alert("¡Esa posición ya está ocupada!");
      return { occupied, turn, finished: false };
    }

    const currentMark = turn % 2 === 1 ? "X" : "O";

    if (currentMark === "X") {
      xmark(button);
      occupied[pos - 1] = 1;
    } else {
      omark(button);
      occupied[pos - 1] = 2;
    }

    turn++;

    // 🔹 Revisar estado del juego
    const result = checkWinner(occupied);
    const modal = document.getElementById("modalsito");

    if (result === 1 || result === 2) {
      const winnerSymbol = result === 1 ? "X" : "O";

      // 🔹 Verificar quién es el ganador (P1, P2 o CPU)
      let winnerName = "";
      if (players[1] === winnerSymbol) {
        winnerName = mode === "cpu" ? "Player" : "Player 1";
      } else if (players[2] === winnerSymbol) {
        winnerName = mode === "cpu" ? "CPU" : "Player 2";
      }

      const playerWin = document.getElementById("player_win");
      const playerWinXSym = document.getElementById("player_win_xsym");
      const playerWinOSym = document.getElementById("player_win_osym");

      playerWin.textContent = `${winnerName} won!`;

      if (winnerSymbol === "X") {
        playerWinXSym.classList.replace("hidden", "block");
        playerWinOSym.classList.replace("block", "hidden");
      } else {
        playerWinOSym.classList.replace("hidden", "block");
        playerWinXSym.classList.replace("block", "hidden");
      }

      modal.classList.replace("hidden", "block");
      disableBoard();
      return { occupied, turn, finished: true };
    } else if (result === "draw") {
      alert("¡Es empate!");
      modal.classList.replace("hidden", "block");
      disableBoard();
      return { occupied, turn, finished: true };
    }

    return { occupied, turn, finished: false };
  }

  /* ------------------- CPU Move --------------------------- */
  function cpuMove(board, turn) {
    const freePositions = board
      .map((val, idx) => (val === 0 ? idx + 1 : null))
      .filter((val) => val !== null);

    if (freePositions.length === 0)
      return { occupied: board, turn, finished: false };

    const choice =
      freePositions[Math.floor(Math.random() * freePositions.length)];
    const btn = document.getElementById(`bt${choice}`);

    return positionClick(choice, btn, board, turn);
  }

  /* ------------------- Arranque automático CPU ------------ */
  // Si player1 eligió O y el modo es CPU, la computadora debe comenzar
  if (mode === "cpu" && players[1] === "O") {
    setTimeout(() => {
      let resultCPU = cpuMove(board, turn);
      board = resultCPU.occupied;
      turn = resultCPU.turn;
    }, 500);
  }
}

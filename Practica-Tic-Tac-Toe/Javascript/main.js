/* ------------ Player 1 selection & type of game -------------------------- */
import {
  setActive,
  validateSelection,
  cpuMove,
  positionClick,
} from './funciones.js'

if (window.location.pathname.endsWith('index.html')) {
  localStorage.clear()
  const xBtn = document.getElementById('xButton')
  const oBtn = document.getElementById('oButton')
  const cpuButton = document.getElementById('cpu_btn')
  const playerButton = document.getElementById('player_btn')
  localStorage.setItem('Xwin', 0)
  localStorage.setItem('Owin', 0)
  localStorage.setItem('tieswin', 0)

  xBtn.addEventListener('click', () => setActive(xBtn, oBtn, 'X'))
  oBtn.addEventListener('click', () => setActive(oBtn, xBtn, 'O'))

  playerButton.addEventListener('click', (e) => validateSelection(e, 'pvp'))
  cpuButton.addEventListener('click', (e) => validateSelection(e, 'cpu'))
}

/*-----------------Pantalla de juego ---------------  */

if (window.location.pathname.endsWith('game.html')) {
  let turn = 1
  const totalPositions = 9
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  /* Configuración inicial del storage */
  const player1Choice = localStorage.getItem('player1') // "X" o "O"
  const mode = localStorage.getItem('game') // "pvp" o "cpu"

  /* Inicializar elementos */
  const xid = document.getElementById('xid')
  const oid = document.getElementById('oid')
  const xwin = document.getElementById('xwin')
  const tiewin = document.getElementById('tiewin')
  const owin = document.getElementById('owin')

  /* Asignar valores iniciales de contadores */
  xwin.textContent = localStorage.getItem('Xwin')
  owin.textContent = localStorage.getItem('Owin')
  tiewin.textContent = localStorage.getItem('tieswin')

  /* Botón de reload */
  document.getElementById('reload').addEventListener('click', () => {
    location.reload()
  })

  /* Asignación de cada jugador */
  let players = {}
  if (player1Choice === 'X') {
    players = { 1: 'X', 2: 'O' }
    xid.textContent = 'X (Player 1)'
    if (mode === 'cpu') {
      oid.textContent = 'O (CPU)'
    } else {
      oid.textContent = 'O (Player 2)'
    }
  } else {
    players = { 1: 'O', 2: 'X' }
    oid.textContent = 'O (Player 1)'
    if (mode === 'cpu') {
      xid.textContent = 'X (CPU)'
    } else {
      xid.textContent = 'X (Player 2)'
    }
  }

  /* Inicializar los botones */
  for (let i = 1; i <= totalPositions; i++) {
    const btn = document.getElementById(`bt${i}`)
    btn.addEventListener('click', () => {
      // Bloquear si es turno de la CPU
      if (mode === 'cpu') {
        const cpuIsX = players[2] === 'X'
        const cpuTurn =
          (turn % 2 === 1 && cpuIsX) || (turn % 2 === 0 && !cpuIsX)
        if (cpuTurn) return
      }

      let result = positionClick(i, btn, board, turn, players)
      board = result.occupied
      turn = result.turn

      // Si el juego terminó, salimos
      if (result.finished) return

      // CPU juega
      if (mode === 'cpu') {
        const cpuIsX = players[2] === 'X'
        const cpuTurn =
          (turn % 2 === 1 && cpuIsX) || (turn % 2 === 0 && !cpuIsX)

        if (cpuTurn) {
          setTimeout(() => {
            let resultCPU = cpuMove(board, turn, players)
            board = resultCPU.occupied
            turn = resultCPU.turn
          }, 500)
        }
      }
    })
  }

  /* ------------------- Arranque automático CPU ------------ */
  // Si player1 eligió O y el modo es CPU, la computadora debe comenzar
  if (mode === 'cpu' && players[1] === 'O') {
    setTimeout(() => {
      let resultCPU = cpuMove(board, turn, players)
      board = resultCPU.occupied
      turn = resultCPU.turn
    }, 500)
  }
}

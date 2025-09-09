/* ------------ Player 1 selection & type of game -------------------------- */
import { setActive, validateSelection, positionClick } from './funciones.js'

if (window.location.pathname.endsWith('index.html')) {
  localStorage.clear()
  const xBtn = document.getElementById('xButton')
  const oBtn = document.getElementById('oButton')
  const cpuButton = document.getElementById('cpu_btn')
  const playerButton = document.getElementById('player_btn')

  xBtn.addEventListener('click', () => setActive(xBtn, oBtn, 'X'))
  oBtn.addEventListener('click', () => setActive(oBtn, xBtn, 'O'))

  playerButton.addEventListener('click', (e) => validateSelection(e, 'player'))
  cpuButton.addEventListener('click', (e) => validateSelection(e, 'cpu'))
}

if (window.location.pathname.endsWith('game.html')) {
  let turn = 0
  const totalPositions = 9
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  /* Player vs Player */
  for (let i = 1; i <= totalPositions; i++) {
    const btn = document.getElementById(`bt${i}`)
    btn.addEventListener('click', () => {
      const result = positionClick(i, btn, board, turn)
      board = result.occupied
      turn = result.turn
      console.log(turn)
      console.log(board)
      if (turn >= 9) {
        alert('El juego acabo')
      }
    })
  }
}

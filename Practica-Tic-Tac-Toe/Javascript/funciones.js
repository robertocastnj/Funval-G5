/*-------------------------- Choose Player Function -----------------------------*/
function setActive(activeBtn, inactiveBtn, value) {
  /*   Estilos del botón activo */
  activeBtn.classList.add('bg-[#a9bfc7]')
  const activePath = activeBtn.querySelector('path')
  activePath.classList.remove('fill-[#a9bec9]')
  activePath.classList.add('fill-[#192d32]')

  /* Remover estilos del botón inactivo */
  inactiveBtn.classList.remove('bg-[#a9bfc7]')
  const inactivePath = inactiveBtn.querySelector('path')
  inactivePath.classList.remove('fill-[#192d32]')
  inactivePath.classList.add('fill-[#a9bec9]')

  if (value === 'X') {
    localStorage.setItem('player1', value)
    localStorage.setItem('player2', 'O')
  } else {
    localStorage.setItem('player1', value)
    localStorage.setItem('player2', 'X')
  }
}

/* ----------------- Validate Section --------------------- */
function validateSelection(e, mode) {
  if (!localStorage.getItem('player1')) {
    e.preventDefault()
    alert('Por favor, selecciona X u O antes de continuar.')
  } else {
    localStorage.setItem('game', mode)
  }
}

/* ------------------- Turn Section ---------------------- */
function btnTurn(n) {
  const xTurn = document.getElementById('xTrn')
  const oTurn = document.getElementById('oTrn')
  if (n % 2 === 1) {
    xTurn.classList.replace('block', 'hidden')
    oTurn.classList.replace('hidden', 'block')
  } else {
    oTurn.classList.replace('block', 'hidden')
    xTurn.classList.replace('hidden', 'block')
  }
}

/* ------------------- X marks ------------------------ */
function xmark(position) {
  const xelement = document.createElement('div')
  xelement.className = `h-[60%] `
  xelement.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 8 8"
       class="object-cover h-full">
    <path fill="#33c3be"
          d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72L1.41 0z"/>
  </svg>`
  position.appendChild(xelement)
}

/* ------------------- O marks ------------------------ */
function omark(position) {
  const oelement = document.createElement('div')
  oelement.className = `h-[60%] `
  oelement.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       class="object-cover h-full">
    <path fill="#d1b065"
          d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
  </svg>`
  position.appendChild(oelement)
}

/* ------------------- Winner Check --------------------- */
function checkWinner(board) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  /************************************************************************************ */
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern
    if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) {
      return board[a] // 1 = X, 2 = O
    }
  }

  if (!board.includes(0)) return 'draw'
  return null /* Game continues */
}

/* ------------------- Play --------------------- */
function positionClick(pos, button, occupied, turn, players) {
  btnTurn(turn)

  if (occupied[pos - 1] != 0) {
    alert('¡Esa posición ya está ocupada!')
    return { occupied, turn, finished: false }
  }

  const currentMark = turn % 2 === 1 ? 'X' : 'O'

  if (currentMark === 'X') {
    xmark(button)
    occupied[pos - 1] = 1
  } else {
    omark(button)
    occupied[pos - 1] = 2
  }

  turn++

  /* Winner check section */
  const result = checkWinner(occupied)
  const modal = document.getElementById('modalsito')

  if (result === 1 || result === 2) {
    const winnerSymbol = result === 1 ? 'X' : 'O'

    /* Who Won? */
    let winnerName = ''
    let mode = localStorage.getItem('game')
    if (players[1] === winnerSymbol) {
      winnerName = mode === 'cpu' ? 'Player' : 'Player 1'
    } else if (players[2] === winnerSymbol) {
      winnerName = mode === 'cpu' ? 'CPU' : 'Player 2'
    }

    let playerWin = document.getElementById('player_win')
    let playerWinXSym = document.getElementById('player_win_xsym')
    let playerWinOSym = document.getElementById('player_win_osym')
    let roundmsg = document.getElementById('roudmsg')

    if (winnerSymbol === 'X') {
      playerWinXSym.classList.replace('hidden', 'block')
      localStorage.setItem('Xwin', parseInt(localStorage.getItem('Xwin')) + 1)
    } else {
      playerWinOSym.classList.replace('hidden', 'block')
      localStorage.setItem('Owin', parseInt(localStorage.getItem('Owin')) + 1)
    }
    playerWin.textContent = `${winnerName} won!`
    roundmsg.textContent = 'TAKES THE ROUND'
    modal.classList.replace('hidden', 'fixed')
    return { occupied, turn, finished: true }
  } else if (result === 'draw') {
    localStorage.setItem(
      'tieswin',
      parseInt(localStorage.getItem('tieswin')) + 1
    )
    modal.classList.replace('hidden', 'fixed')

    return { occupied, turn, finished: true }
  }

  document.getElementById('round').addEventListener('click', () => {
    location.reload()
  })

  return { occupied, turn, finished: false }
}

/* ------------------- CPU Move --------------------------- */
function cpuMove(board, turn, players) {
  const freePositions = board
    .map((val, idx) => (val === 0 ? idx + 1 : null))
    .filter((val) => val !== null)

  if (freePositions.length === 0)
    return { occupied: board, turn, finished: false }

  const choice = freePositions[Math.floor(Math.random() * freePositions.length)]
  const btn = document.getElementById(`bt${choice}`)

  return positionClick(choice, btn, board, turn, players)
}

export { setActive, validateSelection, cpuMove, positionClick }

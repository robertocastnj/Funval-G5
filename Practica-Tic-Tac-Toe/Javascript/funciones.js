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

/* --------------- X mark --------------------------------- */
function xmark(position) {
  const xelement = document.createElement('div')
  xelement.className = `h-[60%] `
  xelement.innerHTML = `
  <!-- X-mark -->
  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 8 8"
                  class="object-cover h-full"
                >
                  <path
                    fill="#33c3be"
                    d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72L1.41 0z"
                  />
                </svg>
  `
  position.appendChild(xelement)
}

function omark(position) {
  const oelement = document.createElement('div')
  oelement.className = `h-[60%] `
  oelement.innerHTML = `
  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  class="object-cover h-full"
                >
                  <path
                    fill="#d1b065"
                    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"
                  />
                </svg>`
  position.appendChild(oelement)
}

/* --------------- Buttons Click --------------- */
function positionClick(pos, button, occupied, turn) {
  btnTurn(turn + 1)

  /* Verificar si la posición ya está ocupada */
  if (occupied[pos - 1] != 0) {
    alert('¡Esa posición ya está ocupada!')
    return
  }

  /* Marcar la casilla con la marca correspondiente */
  if ((turn + 1) % 2 == 1) {
    xmark(button)
    occupied[pos - 1] = 1
    turn++
  } else {
    omark(button)
    occupied[pos - 1] = 2
    turn++
  }
  return { occupied, turn }
}
export { setActive, validateSelection, btnTurn, xmark, omark, positionClick }

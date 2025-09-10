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

export { setActive, validateSelection }

// Fase de burbuja y de captura

const $divsEventos = document.querySelectorAll('.eventos-flujo div')

console.log($divsEventos)

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`,
  )
}

$divsEventos.forEach((div) => {
  // Fase de burbuja  - del elemento mas interno al elemento mas externo
  // div.addEventListener('click', flujoEventos)

  // Fase de captura - del elemento mas externo al elemento mas interno
  // div.addEventListener('click', flujoEventos, true) // por defecto es false para la fase de burbuja

  div.addEventListener('click', flujoEventos, {
    capture: false, //comportamiento de burbuja (false) o captura(true)
    once: true, // el evento se ejecutara una sola vez
  })
})

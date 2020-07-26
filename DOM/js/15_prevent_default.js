// Stop Propagation y Prevent Default

const $divsEventos = document.querySelectorAll('.eventos-flujo div'),
    $linkEventos = document.querySelector('.eventos-flujo a')

console.log($divsEventos)

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`)
    e.stopPropagation() // Detiene la propagaci+on del evento
}

$divsEventos.forEach(div => {

    div.addEventListener('click', flujoEventos)

})

$linkEventos.addEventListener('click', () => {
    alert('Hola soy Alonso')
    event.preventDefault() // previene el evento por defecto
    event.stopPropagation()
})
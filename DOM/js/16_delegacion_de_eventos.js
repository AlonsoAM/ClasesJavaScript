// Delegación de eventos

function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`)
}

document.addEventListener('click', () => {
    console.log('Click en: ', event.target)

    if (event.target.matches('.eventos-flujo div')) {
        flujoEventos(event)
    }

    if (event.target.matches('.eventos-flujo a')) {
        alert('Hola soy Alonso')
        event.preventDefault()
    }

})
// Propiedades y Eventos del BOM

window.addEventListener('resize', () => {

    console.clear()
    console.log('********** Evento Rezise ***********')
    console.log(window.innerWidth) // Ancho del viewport
    console.log(window.innerHeight) // Alto del viewport
    console.log(window.outerWidth) // Ancho del navegador
    console.log(window.outerHeight) // Alto del navegador
    console.log(event)
})

window.addEventListener('scroll', () => {
    console.clear()
    console.log('********** Evento Scroll ***********')
    console.log(window.scrollX)
    console.log(window.scrollY)
    console.log(event)
})

window.addEventListener('load', () => {
    console.log('********** Evento Load ***********')
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(event)
})

// Es recomendable usar DOMCOntentLoaded en lugar de Load 
document.addEventListener('DOMContentLoaded', () => {
    console.log('********** Evento DOMContentLoaded ***********')
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(event)
})
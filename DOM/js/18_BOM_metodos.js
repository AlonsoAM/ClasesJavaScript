// Métodos del BOM

// window.alert('Alerta')
// window.confirm('Confirmacion')
// window.prompt('Aviso')
// alert('alerta')
// confirm('Confirmación')
// prompt('Aviso')

const $btnAbrir = document.getElementById('abrir-ventana'),
    $btnCerrar = document.getElementById('cerrar-ventana'),
    $btnImprimir = document.getElementById('imprimir-ventana')

let ventana

$btnAbrir.addEventListener('click', () => {
    ventana = open('https://www.google.com')
})

$btnCerrar.addEventListener('click', () => {
    ventana.close()
})

$btnImprimir.addEventListener('click', () => {
    print()
})
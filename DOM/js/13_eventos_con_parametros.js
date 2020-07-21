const $eventoMultiple = document.getElementById('evento-multiple'),
    $removerEvento = document.getElementById('evento-remover')

const saludar = (nombre = 'Desconocid@') => {
    alert(`Hola ${nombre}`)
    console.log(event)
}

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`)
    console.log(e)
    $removerEvento.removeEventListener('dblclick', removerDobleClick)
    $removerEvento.disabled = true
}

$eventoMultiple.addEventListener('click', () => {
    saludar()
    saludar('Alonso')
})

$removerEvento.addEventListener('dblclick', removerDobleClick)
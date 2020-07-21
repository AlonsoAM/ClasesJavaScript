// Manejadores de eventos 

const $eventoSemantico = document.getElementById('evento-semantico')
    // const $eventoMultiple = document.getElementById('evento-multiple')

function holaMundo() {
    alert('Hola Mundo')
    console.log(event)
}

// con el manejador de evento semántico solo puedes definir una funcion para un msimo boton
$eventoSemantico.onclick = holaMundo // Aquí va sin los parentesis

$eventoSemantico.onclick = (e) => {
    alert('Hola mundo, manejador de evento semántico') // este evento reemplaza al primero hola mundo
    console.log(e)
    console.log(event)
}

//------------------------------------------

// Eventos multiples con addEventListener
// $eventoMultiple.addEventListener('click', holaMundo)
// $eventoMultiple.addEventListener('click', (e) => {
//     alert('Manejador de eventos Multiples')
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
// })
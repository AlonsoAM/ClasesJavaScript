// Generador

function* iterable() {
    
    yield "Hola" // Es como el return por cada iterador

    console.log("Hola consola")

    yield "Hola 2"

    console.log("Seguimos esperando instrucciones de nuestro código")

    yield "Hola 3"

    yield "Hola 4"

}

let iterador = iterable()
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

for (const y of iterador) {
    console.log(y)
}

const arr = [...iterable()]
console.log(arr)

/****************************************** */

function cuadrado(valor) {
    setTimeout(() => {
        return console.log({
            valor,
            resultado: valor * valor
        })
    }, Math.random() * 1000);
    
}

function* generador() {
    console.log("Inicia Generador")
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    console.log("Termina Generador")
}

let gen = generador()

for (const item of gen) {
    console.log(item)
}
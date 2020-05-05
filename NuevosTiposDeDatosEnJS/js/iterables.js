//const iterable = new Set ([1, 2, 3, 3, 4, 5, 5, 6])
const iterable = "Hola Mundo"

// Accedemos al iterador de nuestro iterable
const iterador = iterable[Symbol.iterator]()

console.log(iterable)
console.log(iterador)
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

let next = iterador.next()
while (!next.done) {
    console.log(next.value)
    next = iterador.next()
}
/*
    WeakSets (add, has, delete)
    WeakMaps (get, set, has, delete)

    Las llaves tienen que ser de tipo objeto
    No son elementos iterables
    No se puede usar el método clear y eliminar todos los elementos a la vez.
    Se puede eliminar de uno en uno.
    No tienen la propiedad size.
*/

// WeakSets

// const ws = new WeakSet()

// let valor1 = { "valor": 1 },
//     valor2 = { "valor": 2 },
//     valor3 = { "valor": 3 }

// ws.add(valor1)
// ws.add(valor2)
// ws.add(valor3)

// console.log(ws)

// console.log(ws.has(valor1))
// console.log(ws.has(valor3))

// setInterval(() => {
//     console.log(ws)
// }, 1000);

// setTimeout(() => {
//     valor1 = null
//     valor2 = null
//     valor3 = null
// }, 5000);


// WeakMaps

// const wm = new WeakMap([
//     ["nombre", "Dominic"],
//     ["edad", 5],
//     ["Apellidos", "Anchante de la Cruz"],
//     [null, "Nulo"]
// ])

const wm = new WeakMap()
let llave1 = {},
    llave2 = {},
    llave3 = {}

wm.set(llave1, 1)
wm.set(llave2, 2)
console.log(wm)

console.log(wm.has(llave1))

console.log(wm.get(llave1))
console.log(wm.get(llave2))
console.log(wm.get(llave3))

wm.delete(llave2)

wm.set(llave2, 2)
wm.set(llave3, 3)
console.log(wm)

setInterval(() => {
    console.log(wm)
}, 1000);

setTimeout(() => {
    llave1 = null
    llave2 = null
    llave3 = null
}, 5000)

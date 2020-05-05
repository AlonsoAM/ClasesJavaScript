// Los MAP son objetods que nos sirven para almacenar conjuntos asociados a manera de objeto, se usa como una colección de datos

const mapa = new Map()

// Agregar valores
mapa.set("nombre", "Alonso")
mapa.set("apellido", "Anchante")
mapa.set("edad", "25")

console.log(mapa)
console.log(mapa.size)

// Comprobando si existe llave o no (has)
console.log(mapa.has("correo"))
console.log(mapa.has("nombre"))

// obteniendo valores de las llaves
console.log(mapa.get("nombre"))

// Cambiando valores
mapa.set("nombre", "Alfredo")

console.log(mapa.get("nombre"))

// Eliminando elementos
mapa.delete("edad")
console.log(mapa)

// En los mapas se pueden generar llaves que no sean strings o cadenas de texto
mapa.set(19, "Diecinueve")
mapa.set(false, "Falso")
mapa.set({}, {})

// Recorrer un mapa
for (const [key, value] of mapa) {
    console.log(`LLave: ${key}, Valor: ${value}`)
}


const mapa2 = new Map([
    ["nombre", "Dominic"],
    ["edad", 5],
    ["Apellidos", "Anchante de la Cruz"],
    [null, "Nulo"]
])

console.log(mapa2)

const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2)
console.log(valoresMapa2)



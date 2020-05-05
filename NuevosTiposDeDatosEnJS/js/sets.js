const set = new Set([1, 2, 3, 3, 4, true, false, false, {}, {}, "hola", "HOLA"])

console.log(set)
console.log(set.size)

const set2 = new Set()
set2.add(1)
set2.add(2)
set2.add(3)
set2.add(3)
set2.add(true)
set2.add(true)
set2.add(false)
set2.add({})
console.log(set2)
console.log(set2.size)

console.log("***************************")
console.log("Recorriendo SET")

for (const item of set) {
    console.log(item)
}

console.log("***************************")
console.log("Recorriendo SET 2")

set2.forEach(element => {
    console.log(element)
})

console.log("***************************")
let arr = Array.from(set) // Covirtiendo el set en un Array

console.log(arr)
console.log(arr[0])
console.log(arr[9])

console.log("***************************")
console.log("Eliminando con el metodo delete")
set.delete("HOLA")
console.log(set)

// El metodo  has coprueba si existe un valor dentro del SET
console.log(set.has("hola"))
console.log(set.has(19))

// Limpiar un SET
console.log("Limpiando el SET con el método clear")
set2.clear()
console.log(set2)
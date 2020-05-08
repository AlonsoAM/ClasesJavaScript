const $card = document.querySelector('.cards')

console.log($card)
console.log($card.className)
console.log($card.classList)

console.log($card.classList.contains("rotate-45"))

// Agregar una clase
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45")) // Evalúa que tenga una clase

console.log($card.className)
console.log($card.classList)

// Quitar una clase
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.className)
console.log($card.classList)

// Metodo que funciona como interruptor que agrega y quita elemento

// Aqui lo agrega por que no tiene la clase rotate-45
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))

// Aqui lo quita porque ya existe la clase rotate-45
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))

// Agregando para reemplazar con el replace
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45", "rotate-135")
$card.classList.add("opacity-80", "sepia")

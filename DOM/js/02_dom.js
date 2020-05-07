// Seleccion de elementos 

console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('cards'))
console.log(document.getElementsByName('nombre'))
console.log(document.getElementById('menu')) // Aún lo utilizamos

// Seleccion de elementos, más usados

console.log(document.querySelector('#menu'))
console.log(document.querySelector('a')) // Para trear el primer elemento
console.log(document.querySelectorAll('a')) // Para traer todos los elementos
console.log(document.querySelectorAll('a').length)
document.querySelectorAll('a').forEach((elemento) => {
    console.log(elemento)
})

console.log(document.querySelectorAll('.cards')[2])
console.log(document.querySelectorAll('#menu li'))
console.log(document.querySelectorAll('#menu li')[1])
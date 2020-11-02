console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute('lang'))

console.log(document.querySelector('.link-dom').href)
console.log(document.querySelector('.link-dom').getAttribute('href'))

// Establecer valores a los atributos

document.documentElement.lang = 'en'
console.log(document.documentElement.lang)

document.documentElement.setAttribute('lang', 'es-PE')
console.log(document.documentElement.lang)

// Guardar en variables los elementos del DOM
// Se le antepone el $ a la variable cuando se declara un elemento del DOM

const $linkDOM = document.querySelector('.link-dom')
$linkDOM.setAttribute('target', '_blank')
$linkDOM.setAttribute('rel', 'noopener') // Para que no dependa de la pagina anterior, es una buena practica del lenguaje HTML

// Quitar elementos

// Valida si el elemnto seta o no
console.log($linkDOM.hasAttribute('rel'))
$linkDOM.removeAttribute('rel')
console.log($linkDOM.hasAttribute('rel'))

// Trabajando con los data-attributes
console.log($linkDOM.getAttribute('data-description'))
console.log($linkDOM.dataset) // Para obtener todos los atributos

// Modificar Atributos
console.log($linkDOM.dataset.description)
console.log($linkDOM.dataset.id)

$linkDOM.setAttribute('data-description', 'Modelo de Objeto del Documento')
console.log($linkDOM.dataset.description)

$linkDOM.dataset.description = 'Hola que tal'
console.log($linkDOM.dataset.description)

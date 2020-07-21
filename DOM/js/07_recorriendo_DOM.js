// DOM Traversing o Recorriendo el DOM

const $cards = document.querySelector('.cards')

console.log($cards)
console.log($cards.children)
console.log($cards.children[2])
console.log($cards.parentElement)
console.log($cards.firstElementChild)
console.log($cards.lastElementChild)
console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)
console.log($cards.closest('body'))
console.log($cards.children[3].closest('section'))
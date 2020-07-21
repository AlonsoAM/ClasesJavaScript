// Modificando elementos - Old Style (Métodos antiguos)

const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure'),
    $cloneCards = $cards.cloneNode(true) // para que clone todo el contenido de cards

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>any</figcaption>
`
$newCard.classList.add('card')

// $cards.replaceChild($newCard, $cards.children[2])
// $cards.insertBefore($newCard, $cards.children[0])
// $cards.removeChild($cards.lastElementChild)
document.body.appendChild($cloneCards)
// Modificando elementos - Cool Style (Metodos nuevos)

/*
    .insertAdjacent...
        .insertAdjacentElement(posicion, elemento)
        .insertAdjacentHTML(posicion, html)
        .insertAdjacentText(posicion, text)
    
    Posiciones:
        .beforebegin(hermano anterior) - before
        .afterbegin(primer hijo) - prepend
        .beforeend(ultimo hijo) - append
        .afterend(hermano siguiente) - after
*/

const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure')

let contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`
$newCard.classList.add('card')

$newCard.insertAdjacentHTML('beforeend', contentCard)
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any')

// $cards.insertAdjacentElement('afterbegin', $newCard)


// Ya no se necesita el insertAdjacentElement
// $cards.prepend($newCard)
// $cards.before($newCard)
// $cards.append($newCard)
$cards.after($newCard)
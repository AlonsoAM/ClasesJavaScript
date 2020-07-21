// Crear elementos dinamicamente con JS

const $figure = document.createElement('figure'),
    $image = document.createElement('img'),
    $figcaption = document.createElement('figcaption'),
    $figcaptionText = document.createTextNode('Animals'),
    $cards = document.querySelector('.cards'),
    $figure2 = document.createElement('figure')


$image.setAttribute('src', 'https://placeimg.com/200/200/animals')
$image.setAttribute('alt', 'animals')

$figure.classList.add('card')

$figcaption.appendChild($figcaptionText)
$figure.appendChild($image)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

// otra forma de crear elementos
$figure2.innerHTML = `
    <img src = "https://placeimg.com/200/200/people" alt= "People">
    <figcaption>People</figcaption>
`
$figure2.classList.add('card')
$cards.appendChild($figure2)

// Crear elementos con nodos
const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    $ul = document.createElement('ul')
document.write('<h3>Estaciones del Año</h3>')
document.body.appendChild($ul)
estaciones.forEach(el => {
    const $li = document.createElement('li')
    $li.textContent = el
    $ul.appendChild($li)
})

// crear elementos con innerHTML
const continentes = ['Africa', 'América', 'Asia', 'Europa', 'Oceanía'],
    $ul2 = document.createElement('ul')
document.write('<h3>Continentes del mundo</h3>')
document.body.appendChild($ul2)
$ul2.innerHTML = ''
continentes.forEach(el => {
    $ul2.innerHTML += `<li>${el}</li>`
})

// Crear elementos a partir de fragmentos
const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Setiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ],
    $ul3 = document.createElement('ul'),
    $fragment = document.createDocumentFragment()

meses.forEach(el => {
    const $li = document.createElement('li')
    $li.textContent = el
    $fragment.appendChild($li)
})
document.write('<h3>Meses del año</h3>')
$ul3.appendChild($fragment)
document.body.appendChild($ul3)
/*let arreglo = []
let cadena = "Alonso Anchante Moreno"

arreglo = cadena.split(" ")
console.log(arreglo)
alert(arreglo)*/

alert("Ejercicio 3: Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].")

let cadena = prompt("Ingresa el texto: ")
let corte = (prompt("Ingresa el tipo de separación que deseas para rellenar el array"))

function cortarCadena(texto, corte) {

    let arreglo = []
    
    try {

        if (!isNaN(texto)) {
            throw new Error("Por favor ingrese un texto, no se permiten sólo números números o dejar el campo vacío")
        }

        if (texto === cadena && corte === corte) {
            arreglo = cadena.split(corte)
            alert(arreglo)
        }

        
        
    } catch (error) {

        alert("Se produjo el siguiente error "+ error)
        
    }


}

cortarCadena(cadena, corte)
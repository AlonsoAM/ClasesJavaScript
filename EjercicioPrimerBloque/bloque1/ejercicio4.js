alert("Ejercicio 3: Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.")

let cadena = prompt("Ingresa el texto: ")
let cantidad = Math.abs((prompt("Ingresa la cantidad de veces que desea que se repita el texto")))

function repetirCadena(texto, cantidad) {

    let repetidos
    
    try {

        if (!isNaN(texto)) {
            throw new Error("Por favor ingrese un texto, no se permiten sólo números números o dejar el campo vacío")
        }

        if (isNaN(cantidad)) {
            throw new Error("Por favor ingrese un valor numérico")
        }

        if (texto === cadena && cantidad === cantidad) {
            repetidos = texto.repeat(cantidad)
            alert(repetidos)
        }

        
        
    } catch (error) {

        alert("Se produjo el siguiente error "+ error)
        
    }


}

repetirCadena(cadena, cantidad)
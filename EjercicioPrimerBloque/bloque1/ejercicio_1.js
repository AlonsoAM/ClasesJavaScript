alert("Ejercicio N° 1: 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion('Hola Mundo') devolverá 10.")

let cadena = prompt("Ingresa el texto: ")

function contarCaracteres(texto) {
    
    try {

        if (!isNaN(texto)) {
            throw new Error("Por favor ingrese un texto, no se permiten sólo números números")
        }

        if (texto === cadena) {
            texto = cadena.length
            alert(texto)
        }

        
        
    } catch (error) {

        alert("Se produjo el siguiente error "+ error)
        
    }

    //return texto

}

contarCaracteres(cadena)
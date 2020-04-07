alert("Ejercicio 2: 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion('Hola Mundo', 4) devolverá 'Hola'.")

let cadena = prompt("Ingresa el texto: ")
let corte = Math.abs(prompt("Ingresa la cantidad de caracteres a cortar: "))

function recortarTexto(texto, numero) {
    
    try {

        if (!isNaN(texto)) {
            throw new Error("Por favor ingrese un texto, no se permiten sólo números números o dejar el campo vacío")
        }

        if (isNaN(numero)) {
            throw new Error("Se necesita un valor numérico")
        }


        if (texto === cadena && numero === corte) {
            texto = cadena.slice(0, numero)
            alert(texto)
        }

        
        
    } catch (error) {

        alert("Se produjo el siguiente error "+ error)
        
    }

    //return texto

}

recortarTexto(cadena, corte)
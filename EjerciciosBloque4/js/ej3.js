const conversorDeGrados = (grados = undefined, unidad = undefined) => {
    

    if (grados === undefined) {
        return console.warn("no ingresaste grados a convertir")
    }

    if (typeof grados !== "number") {
        return console.warn(`El valor ${grados} ingresado, NO es un número`)
    }

    if (unidad === undefined) {
        return console.warn("no ingresaste el tipo grados a convertir")
    }

    if (typeof unidad !== "string") {
        return console.warn(`El valor ${unidad} ingresado, NO es una cadena de texto`)
    }

    if (unidad.length !== 1 || !(/C|F/.test(unidad))) {
        return console.warn("Valor de unidad no reconocido")
    }

    if (unidad === "C") {

        return console.info(`${grados}°C = ${Math.round((grados  *(9/5)) + 32)}°F`)
        
    }

    if (unidad === "F") {

        return console.info(`${grados}°C = ${Math.round((grados - 32) * (5/9))}°F`)
        
    }


}

conversorDeGrados()
conversorDeGrados("2")
conversorDeGrados(2)
conversorDeGrados(2,true)
conversorDeGrados(2, "Hola")
conversorDeGrados(2, "E")
conversorDeGrados(100, "C")
conversorDeGrados(100, "F")
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {

    if (numero === undefined) {
        return console.warn("no ingresaste el número a convertir")
    }

    if (typeof numero !== "number") {
        return console.warn(`El valor ${numero} ingresado, NO es un número`)
    }

    if (base === undefined) {
        return console.warn("no ingresaste la base")
    }

    if (typeof base !== "number") {
        return console.warn(`El valor ${base} ingresado, NO es un número`)
    }

    if (base === 2) {
        
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)

    } else if (base === 10) {
        
        return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2`)

    } else {
        
        return console.info(`El tipo de base a convertir no es valido`)

    }

}

convertirBinarioDecimal()
convertirBinarioDecimal("2")
convertirBinarioDecimal(100)
convertirBinarioDecimal(100, "2")
convertirBinarioDecimal(101, 2)
convertirBinarioDecimal(10110011, 2)
convertirBinarioDecimal(4, 10)
convertirBinarioDecimal(114, 10)
convertirBinarioDecimal(114, 3)
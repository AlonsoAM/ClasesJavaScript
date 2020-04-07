const capicua = (numero = 0) => {

    if (!numero) {
        return console.warn("No ingresaste un número")
    }

    if (typeof numero !== "number") {
        return console.error(`El valor ${numero} ingresado no es un número`)
    }

    numeroConvertido = numero.toString()
    let alReves = numeroConvertido.split("").reverse().join("")

    return (numeroConvertido === alReves)
        ? console.info(`SI es capícua, Número original: ${numero}, Número al revés: ${alReves}`)
        : console.info(`NO es capícua, Número original: ${numero}, Número al revés: ${alReves}`)

}

capicua(2002)
capicua()
capicua("191")
capicua([])
capicua(18.81)
capicua(215.212)
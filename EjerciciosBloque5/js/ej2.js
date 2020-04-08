const aplicarDescuento = (monto = undefined, descuento = 0) => {

    if (monto === undefined) {
        return console.warn("no ingresaste el número a convertir")
    }

    if (typeof monto !== "number") {
        return console.warn(`El valor ${monto} ingresado, NO es un número`)
    }

    if (monto === 0) {
        
        return console.warn(`El monto no puede ser cero`)

    }

    if (monto < 0) {
        
        return console.warn(`El monto no puede ser negativo`)

    }

    if (typeof descuento !== "number") {
        return console.warn(`El valor ${descuento} ingresado, NO es un número`)
    }

    if (descuento < 0) {
        
        return console.warn(`El descuento no puede ser negativo`)

    }

    return console.info(`$/${monto} - ${descuento}% = $/${monto - ((monto * descuento) / 100)}`)

}

aplicarDescuento()
aplicarDescuento("200")
aplicarDescuento(0)
aplicarDescuento(-1000)
aplicarDescuento(1000, "20")
aplicarDescuento(1000, -20)
aplicarDescuento(1000)
aplicarDescuento(1000, 25)
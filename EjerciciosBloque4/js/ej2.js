const parImpar = (numero = undefined) => {

    if (!numero) {
        return console.warn("no ingresaste un número válido")
    }

    if (typeof numero !== "number") {
        return console.warn("El valor ingresado no es un número")
    }

    if (numero === 0) {
        return console.info(`No puede ingresar el número 0`)
    }

    if (numero % 2 === 0) {

        return console.info(`El número ${numero} es par`)
        
    } else {

        return console.info(`El número ${numero} es impar`)

    }

}

parImpar()
parImpar(-2)
parImpar(0)
parImpar("34")
parImpar(3)
parImpar(29)
parImpar(30)
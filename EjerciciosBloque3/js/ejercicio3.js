const factorial = (numero = undefined) => {

    if (!numero) {
        return console.warn("No ingresaste un número")
    }

    if (typeof numero !== "number") {
        return console.error(`El valor ${numero} ingresado no es un número`)
    }

    if (numero === 0) {
        return console.error("No se puede sacar factorial al número 0")
    }

    if (numero <= 0) {
        return console.warn(`No se puede sacar Factorial al número ${numero} por ser negativo`)
    }

    let fac = 1

    for (let i = numero; i > 1; i--) {
        
        fac *= i
        
    }

    return console.info(`El factorial de ${numero} es: ${fac}`)

}

factorial()
factorial("4")
factorial([1, 2, 3])
factorial(0)
factorial(-5)
factorial(5)
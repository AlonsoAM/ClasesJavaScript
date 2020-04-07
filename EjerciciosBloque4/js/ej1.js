const primo = (numero = undefined) => {

    if (!numero) {
        return console.warn("no ingresaste un número")
    }

    if (typeof numero !== "number") {
        return console.warn("El valor ingresado no es un número")
    }

    if (numero <= 0) {
        return console.warn("Debe ingresar un número positivo")
    }

    if (numero === 0) {
        return console.info(`El número ${numero} NO es primo`)
    }

    if (numero === 1) {
        return console.info(`El número ${numero} NO es primo`)
    }


    let divisible = false

    for (let i = 2; i < numero; i++) {
        
        if ((numero % i === 0)) {
            divisible = true
            break
        }
        
    }

    return (divisible)
        ? console.info(`El número ${numero} NO es primo`)
        : console.info(`El número ${numero} SI es primo`)

}

primo()
primo("2")
primo(0)
primo(1)
primo(15)
primo(17)
primo(373)
primo(420)
primo(2)
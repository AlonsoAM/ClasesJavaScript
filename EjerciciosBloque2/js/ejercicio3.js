const palindromo = (palabra = "") => {

    if(!palabra) return console.warn("No ingresaste  una palabra o frase")

    palabra = palabra.toUpperCase()

    let alReves = palabra.split("").reverse().join("")

    return (palabra === alReves)
        ? console.info(`SI es palindromo, Palabra original ${palabra}, Palabra al revés: ${alReves}`)
        : console.info(`NO es palindromo, Palabra original ${palabra}, Palabra al revés: ${alReves}`)

}

palindromo("Salas")
palindromo("Hola Mundo")
palindromo("Salas")
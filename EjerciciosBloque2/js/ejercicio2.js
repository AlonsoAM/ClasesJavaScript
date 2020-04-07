const textoEnCadena = (cadena = "", texto = "") => {
 
    if (!cadena) return console.warn("No ingresaste el texto largo")
    
    if (!texto) return console.warn("No ingresaste la palabra a evaluar")

    let i = 0, contador = 0
    while (i !== -1) {
        
        i = cadena.indexOf(texto, i)

        if (i !== -1) {
            i++
            contador++
        }

    }

    return console.info(`La palabra ${texto} se repite ${contador} veces`)

}

textoEnCadena("Hola mundo Hola mundo Hola", "Hola")
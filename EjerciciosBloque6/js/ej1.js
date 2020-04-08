const contarLetras = (cadena = "") => {

    if (!cadena) return console.warn("No ingresaste una cadena de texto")
    
    if (typeof cadena !== "string") return console.warn(`El valor "${cadena}" ingresadom NO es una cadena de texto`)

    let vocales = 0, consonantes = 0

    cadena = cadena.toLowerCase()

    for (let letra of cadena) {
        
        if (/[aeiouáéíúóü]/.test(letra)) {
            
            vocales++

        }

        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
            
            consonantes++

        }

    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })

}

contarLetras()
contarLetras(3)
contarLetras("Hola Mundo")
contarLetras("ÑoÑo")
contarLetras("Consequat pariatur esse consequat qui aliquip nisi sint voluptate et consequat. Et occaecat cupidatat ipsum occaecat. Occaecat amet elit do sint dolore adipisicing deserunt.")
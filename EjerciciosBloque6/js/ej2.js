const validarNombre = (nombre = "") => {

    if (!nombre) return console.warn("No ingresaste una cadena de texto")
    
    if (typeof nombre !== "string") return console.warn(`El valor "${nombre}" ingresadom NO es una cadena de texto`)

    let expresionRegular = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre)

    return (expresionRegular)
        ? console.info(`${nombre} es un nombre válido`)
        : console.info(`${nombre} no es un nombre válido`)

}

validarNombre()
validarNombre(3)
validarNombre("Alonso")
validarNombre("Alonso Anchante")
validarNombre("Alonso Anchante")

/*

En las expresiones regulares

^ --> Significa que no debe haber nada delante de la expresion a evaluar, una vez se esta haciendo la evaluacion

$ --> Significa que no debe haber nada una vez culmminada la expresion a evaluar

+ --> Va a evaluar cada recorrido

A-Za-z --> Va a evaluar todas las letras del abecedario sin contar las tildes ni las ñ

\s --> Va a evaluar que existan espacios en blanco

g --> es el comodin que se usa al final de la expresion que indica que va a ser global y evaluara todo lo que este ingresado
*/
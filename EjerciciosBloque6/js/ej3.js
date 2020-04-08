// /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i  --> Expresion regular para verificar Mail

const validarEmail = (email = "") => {

    if (!email) return console.warn("No ingresaste un email")
    
    if (typeof email !== "string") return console.warn(`El valor "${email}" ingresadom NO es una cadena de texto`)

    let expresionRegular = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return (expresionRegular)
        ? console.info(`${email} es un email válido`)
        : console.info(`${email} no es un email válido`)

}

validarEmail()
validarEmail(35)
validarEmail("alonso.amoreno@live")
validarEmail("alonso.amoreno@live.com")
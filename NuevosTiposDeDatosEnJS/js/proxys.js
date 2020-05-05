const persona = {
    nombre: "", 
    apellido: "", 
    edad: 0
}

const manejador = {
    set(objeto, propiedad, valor) {
        if (Object.keys(objeto).indexOf(propiedad) === -1) {

            return console.error(`LA propiedad ${propiedad} no existe en el Objeto Persona`)
            
        }

        if (
            (propiedad === "nombre" || propiedad === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        ) {
            console.error(`La propiedad ${propiedad} sólo acepta letras y espacios en blanco`)
        }

        objeto[propiedad] = valor
    }
}

const alonso = new Proxy(persona, manejador)
alonso.nombre = "Alonso"
alonso.apellido = "Anchante"
alonso.edad = 25
//alonso.insta = "AlonsoAM"

console.log(alonso)
console.log(persona)
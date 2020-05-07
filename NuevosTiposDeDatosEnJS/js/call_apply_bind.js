console.log(this)

this.lugar = "Contexto Global"

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}

saludar("hola", "Dominic")

const obj = {
    lugar: 'Contexto Objeto'
}

// call
saludar.call(obj, "Hola", "Alonso")
saludar.call(null, "Hola", "Alonso") // indica que esta en el contexto global
saludar.call(null, "Hola", "Alonso")

// apply
saludar.apply(obj, ["Hola", "Alfredo"])
saludar.apply(null, ["Hola", "Alfredo"])
saludar.apply(this, ["Hola", "Alfredo"])

//bind (enlace)

this.nombre = "Window"

const persona = {
    nombre: "Alonso",
    saludar: function () {
        console.log(`Hola ${this.nombre}`)
    }
}
persona.saludar()

const otraPersona = {
    saludar: persona.saludar.bind(this)
}
otraPersona.saludar()

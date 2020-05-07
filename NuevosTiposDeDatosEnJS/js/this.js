console.log(this)
console.log(window)
console.log(this === window)

this.nombre = 'Contexto global'
console.log(this.nombre)

function imprimir () {
    console.log(this.nombre);
}

imprimir()

const obj = {
    nombre: 'Contexto objeto',
    imprimir: function () {
        console.log(this.nombre)
    }
}
obj.imprimir()


const obj2 = {
    nombre: 'Contexto Objeto 2',
    imprimir
}
obj2.imprimir()


const obj3 = {
    nombre: 'Contexto objeto 3',
    imprimir: () => {
        console.log(this.nombre)
    }
}
obj3.imprimir()


function Persona (nombre) {
    this.nombre = nombre
    //return console.log(this.nombre)
    return () => console.log(this.nombre)
}

let alonso = new Persona('Alonso')
alonso()

aleatorio = Math.round((Math.random() * 100) + 5)

const objetoUsuarios = {
    [`id_${aleatorio}`]: "Valor aleatorio"
}

const usuarios = ['Alonso', 'Irma', 'Miguel', 'Kala', 'Dominic']

console.log(objetoUsuarios)

usuarios.forEach((usuario, index) => objetoUsuarios[`id_${index}`] = usuario)

console.log(objetoUsuarios)

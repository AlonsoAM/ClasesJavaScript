const calcPromedio = (arr = undefined) => {

    if (arr === undefined) return console.warn("No ingresaste un arreglo de números")
    
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if (arr.length === 0) return console.error("El arreglo está vacío")

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`)
    }

    return console.info(
        arr.reduce((total, num, index, arr) => {
            total += num
            if (index === arr.length - 1) {
                return `El promedio de ${arr.join(" + ")} es igual a ${total / arr.length}`
            } else {
                return total
            }
        })
    )

}

calcPromedio()
calcPromedio({})
calcPromedio([])
calcPromedio(["a"])
calcPromedio([9,8,7,6,5,4,3,2,1,0])
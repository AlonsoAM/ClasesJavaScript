const eliminarDuplicado = (arr = undefined) => {

    if (arr === undefined) return console.warn("No ingresaste un arreglo de números")
    
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if (arr.length === 0) return console.error("El arreglo está vacío")

    if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos")

    /*return console.info({

        original: arr,
        sinDuplicados: arr.filter((value,index,self)=>self.indexOf(value) === index)
        
    })*/

    return console.info({

        original: arr,
        sinDuplicados: [...new Set(arr)]
        
    })


}

eliminarDuplicado()
eliminarDuplicado({})
eliminarDuplicado([])
eliminarDuplicado([1])
eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true])
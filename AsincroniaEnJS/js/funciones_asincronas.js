function cuadradoPromise(value) {

    if (typeof value !== 'number') return Promise.reject(`Error, el valor ${value} ingresado no es un número`)

    return new Promise((resolve, reject) => {

        setTimeout(() => {
        
            resolve({
                value,
                result: value * value
            })
    
        }, 0 || Math.random() * 1000)

    })

}

async function funcionAsincronaDeclarada() {

    try {
        
        console.log("Inicio de Async function")

        let obj = await cuadradoPromise(0)
        console.log(`Asymc Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(1)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(2)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(3)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(4)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(5)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        console.log("Fin de Async Function")


    } catch (error) {
        console.error(err)
    }
    
}

funcionAsincronaDeclarada()

const funcionAsincronaExpresada = async () => {
    
    try {
        
        console.log("Inicio de Async function")

        let obj = await cuadradoPromise(6)
        console.log(`Asymc Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(7)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(8)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(9)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(10)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(11)
        console.log(`Async Function ${obj.value}, ${obj.result}`)

        console.log("Fin de Async Function")


    } catch (error) {
        console.error(err)
    }

}

funcionAsincronaExpresada()
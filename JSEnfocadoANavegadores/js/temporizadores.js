console.log("inicio")

// setTimeout(() => {
    
//     console.log("Ejecutando un setTimeOut(), esto se ejecuta una sola vez.")

// }, 3000);


// setInterval(() => {

//     console.log("Ejecutando un setInterval(), esto se ejecuta indefinidamente cada cierto intervalo de tiempo.")
    
// }, 1000);

// let temporizador = setTimeout(() => {
    
//     console.log(new Date().toLocaleTimeString())

// }, 1000);

// clearTimeout(temporizador)

// console.log("Después del clearTimeout")

let temporizador = setInterval(() => {
    
    console.log(new Date().toLocaleTimeString())

}, 1000);

clearInterval(temporizador)

console.log("Después del clearInterval")


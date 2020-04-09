/*

Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

Procesamiento Single Thread y Multi Thread
Operaciones de CPU y Operacions de I/O
Operaciones Concurrentes y Paralelas.
Operaciones Bloqueantes y no Bloqueantes.
Operaciones Sincronas y Asincronas.

JavaScript una un modelo asíncrono y No bloqueante, con un loop de eventos implementado en un solo hilo, (single thread) para operaciones de entrada y salida (input/output)

*/

/*
En JavaScript vamos a tener dos tispo de codigo:
*/

/*Código Síncrono Bloqueante*/

((() => {
  console.log('Código Síncrono')
  console.log('Inicio')

  function dos() {
    console.log('Dos')
  }

  function uno() {
    console.log('Uno')
    dos()
    console.log('Tres')
  }

  uno()
  console.log('Fin')
})())

console.log("****************************");

/*Código Asíncrono No Bloqueante*/

((()=>{

  console.log("Código Asíncrono")
  console.log("Inicio")

  function dos() {
    setTimeout(() => {
      console.log("Dos")
    }, 1000)
  }

  function uno() {
    setTimeout(() => {
      console.log("Uno")
    }, 0)
    dos()
    console.log("Tres")
  }

  uno()
  console.log("Fin")

})())

/*

Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

Procesamiento Single Thread y Multi Thread
Operaciones de CPU y Operacions de I/O
Operaciones Concurrentes y Paralelas.
Operaciones Bloqueantes y no Bloqueantes.
Operaciones Sincronas y Asincronas.

*/

/*
En JavaScript vamos a tener dos tispo de codigo:
*/

/*Código Síncrono Bloqueante*/

// ((()=>{
//     console.log('Código Síncrono')
//     console.log('Inicio')
//
//     function dos() {
//       console.log('Dos')
//     }
//
//     function uno() {
//       console.log('Uno')
//       dos()
//       console.log('Tres')
//     }
//
//     uno()
//     console.log('Fin')
// })())

/*Código Asíncrono No Bloqueante*/

((()=>{

  console.log("Código Asíncrono")
  console.log("Inicio")

  function dos() {
    setTimeout()
  }

})())

// Objetos: URL, Historial y Navegador

// URL
// console.log('~~~~~~~~~~ Objeto URL (location) ~~~~~~~~~~')
// console.log(location)
// console.log('~~ Origen ~~')
// console.log(location.origin)
// console.log('~~ Protocolo ~~')
// console.log(location.protocol)
// console.log('~~ Host ~~')
// console.log(location.host)
// console.log('~~ Host Name ~~')
// console.log(location.hostname)
// console.log('~~ Puerto ~~')
// console.log(location.port)
// console.log('~~ Href ~~')
// console.log(location.href)
// console.log('~~ Hash - detecta lo que hay despues del # ~~')
// console.log(location.hash)
// console.log('~~ Search - detecta y alamcena los parámetros que pasas por URL ~~')
// console.log(location.search)
// console.log('~~ PathName ~~')
// console.log(location.pathname)

// location.reload() // Recarga la página

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// History - Historial
// console.log('~~~~~~~~~~ Objeto Historial (Histoy) ~~~~~~~~~~')
// console.log(history)
// console.log(history.length)

// Estas funciones ... funcionan como las flechas de atras y adelante del navegador
// console.log(history.back(número de páginas)) para regresar
// console.log(history.forward(numero)) para avanzar en el historial
// history.go(numero positivo o negativo) ... para navegar hacia atras o adelante ... positivo hacia adelante y negativo hacia atras

// Navogitor - Navegador
console.log('~~~~~~~~~~ Objeto Navegador (Navigator) ~~~~~~~~~~')
console.log(navigator)
console.log('~~ Información de la conexión ~~')
console.log(navigator.connection)
console.log('~~ Geolocalización ~~')
console.log(navigator.geolocation)
console.log('~~ Dispositivos como cámaras, micrófonos,etc ~~')
console.log(navigator.mediaDevices)
console.log('~~ Tipos de Formatos que acepta el navegador ~~')
console.log(navigator.mimeTypes)
console.log('~~ True o false (si se pierde la conexion) ~~')
console.log(navigator.onLine)
console.log('~~ API que ayuda a PWA(Progresive Web APP) ~~')
console.log(navigator.serviceWorker)
console.log('~~ API de almacenamiento ~~')
console.log(navigator.storage)
console.log('~~ Detecta dispotivos USB ~~')
console.log(navigator.usb)
console.log('~~ Información sobre el navegador ~~')
console.log(navigator.userAgent)
// Objeto XMLHttpRequest
;(() => {
  // Paso 1 - Instanciar el objeto XMLHttpRequest y los objetos del DOM
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById('xhr'),
    $fragment = document.createDocumentFragment()

  //console.log(xhr);

  // Paso 2 - Trabajar el evento

  // El evento readystatechange se lanza cuando se encuentra un cambio de estado en la aplicación
  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState !== 4) return
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("Éxito");
      //console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText)
      //console.log(json);
      json.forEach((el) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li)
      })
      $xhr.appendChild($fragment)
    } else {
      //console.log("Error");
      let message = xhr.statusText || 'Ocurrió un error'
      $xhr.innerHTML = `Error: ${xhr.status}: ${message}`
    }

    //console.log(xhr);
  })

  // Paso 3 - Abrir la conexión a la API
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

  // Paso 4 - Enviar la petición al servidor
  xhr.send()
})()
//-----------------------------------------------------------------------------------

// API Fetch
;(() => {
  const $fetch = document.getElementById('fetch'),
    $fragment = document.createDocumentFragment()

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res)
    })
    .then((json) => {
      json.forEach((el) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li)
      })
      $fetch.appendChild($fragment)
    })
    .catch((err) => {
      let message = err.statusText || 'Ocurrió un error'
      $fetch.innerHTML = `Error: ${err.status}: ${message}`
    })
  /*.finally(() =>
      //console.log("Esto se ejecutará independientemente de la Promesa Fetch")
    );*/
})()
//-----------------------------------------------------------------------------------

// API Fetch + Async - Await
;(() => {
  const $fetchAsync = document.getElementById('fetch-async'),
    $fragment = document.createDocumentFragment()

  const getData = async () => {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users'),
        json = await res.json()

      if (!res.ok) throw { status: res.status, statusText: res.statusText }

      json.forEach((el) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li)
      })
      $fetchAsync.appendChild($fragment)
      //console.log(res, json);
    } catch (err) {
      /* handle error */
      let message = err.statusText || 'Ocurrió un error'
      $fetchAsync.innerHTML = `Error: ${err.status}: ${message}`
    } finally {
      //console.log("Esto se ejecutará independientemente de la Promesa Fetch");
    }
  }
  getData()
})()

// ----------------------------------------------------------------------------------
// Axios
//const axios = require("axios");
;(() => {
  const $axios = document.getElementById('axios'),
    $fragment = document.createDocumentFragment()

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      //console.log(res);
      json = res.data
      json.forEach((el) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li)
      })
      $axios.appendChild($fragment)
    })
    .catch((err) => {
      //console.log("Estamos en el catch", err);
      let message = err.response.statusText || 'Ocurrió un error'
      $axios.innerHTML = `Error: ${err.response.status}: ${message}`
    })
    .finally(() => {
      /*console.log(
        "Esto se ejecutará independientemente del resultado de Axios"
      );*/
    })
})()
// ----------------------------------------------------------------------------------
// Axios con Asyn y Await
//const axios = require("axios");
;(() => {
  const $axiosAsync = document.getElementById('axios-async'),
    $fragment = document.createDocumentFragment()

  const getData = async () => {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
        json = await res.data
      json.forEach((el) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li)
      })
      $axiosAsync.appendChild($fragment)
    } catch (err) {
      let message = err.response.statusText || 'Ocurrió un error'
      $axiosAsync.innerHTML = `Error: ${err.response.status}: ${message}`
    }
  }
  getData()
})()
// ----------------------------------------------------------------------------------

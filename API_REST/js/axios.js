const d = document,
  $table = d.querySelector('.crud-table'),
  $form = d.querySelector('.crud-form'),
  $title = d.querySelector('.crud-title'),
  $template = d.getElementById('crud-template').content,
  $fragment = d.createDocumentFragment()

const getAll = async () => {
  try {
    let res = await axios.get('http://localhost:5555/santos')
    let json = await res.data
    // console.log(json)
    json.forEach((el) => {
      $template.querySelector('.name').textContent = el.nombre
      $template.querySelector('.constellation').textContent = el.constelacion
      $template.querySelector('.edit').dataset.id = el.id
      $template.querySelector('.edit').dataset.name = el.nombre
      $template.querySelector('.edit').dataset.constellation = el.constelacion
      $template.querySelector('.delete').dataset.id = el.id
      let $clone = d.importNode($template, true)
      $fragment.appendChild($clone)
    })
    $table.querySelector('tbody').appendChild($fragment)
  } catch (err) {
    let message = err.response.statusText || 'Ocurrió un error'
    $table.insertAdjacentHTML(
      'afterend',
      `<p>Error: <b>${err.response.status}: ${message}</b></p>`,
    )
  }
}

d.addEventListener('DOMContentLoaded', getAll)

d.addEventListener('submit', async (e) => {
  if (e.target === $form) {
    e.preventDefault()
    if (!e.target.id.value) {
      //POST
      // console.log('POST')
      try {
        let options = {
          method: 'POST',
          url: 'http://localhost:5555/santos',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          data: {
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          },
        }
        let res = await axios(options)
        let json = await res.data
        location.reload()
      } catch (err) {
        let message = err.response.statusText || 'Ocurrió un error'
        $form.insertAdjacentHTML(
          'afterend',
          `<p>Error: <b>${err.response.status}: ${message}</b></p>`,
        )
      }
    } else {
      //PUT
      try {
        let options = {
          method: 'PUT',
          url: `http://localhost:5555/santos/${e.target.id.value}`,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          data: {
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          },
        }
        let res = await axios(options)
        let json = await res.data
        location.reload()
      } catch (err) {
        let message = err.response.statusText || 'Ocurrió un error'
        $form.insertAdjacentHTML(
          'afterend',
          `<p>Error: <b>${err.response.status}: ${message}</b></p>`,
        )
      }
    }
  }
})

d.addEventListener('click', async (e) => {
  if (e.target.matches('.edit')) {
    $title.textContent = 'Editar Santo'
    $form.nombre.value = e.target.dataset.name
    $form.constelacion.value = e.target.dataset.constellation
    $form.id.value = e.target.dataset.id
  }
  if (e.target.matches('.delete')) {
    let isDelete = confirm(
      `¿Estas seguro de eliminar el id ${e.target.dataset.id}?`,
    )
    if (isDelete) {
      // DELETE
      try {
        let options = {
          method: 'DELETE',
          url: `http://localhost:5555/santos/${e.target.dataset.id}`,
        }
        let res = await axios(options)
        let json = await res.data
        location.reload()
      } catch (err) {
        let message = err.response.statusText || 'Ocurrió un error'
        alert(`Error: ${err.response.status}: ${message}`)
      }
    }
  }
})

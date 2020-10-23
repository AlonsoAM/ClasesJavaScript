const d = document,
    n = navigator;

const getGeolocation = (id) => {

    const $id = d.getElementById(id);

    const options = {
        enableHighAccuracy: true, // Le decimos que el dispositivo trate de hacer la mejor lectura que pueda.
        timeout: 5000, // tiempo de lectura
        maximunAge: 0 // Para que no se guarde en cache la lectura.
    };

    const success = position => {
        let coords = position.coords;
        $id.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Presición: <b>${coords.accuracy}</b> metros.</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},17z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
        // console.log(position);


    };

    const error = err => {
        $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
        // console.log(`Error: ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success, error, options); // Obtener la ubicación actual

}

export default getGeolocation;
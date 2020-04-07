const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto)
        ? console.warn("no ingreso un texto")
        : (!patron)
            ? console.warn("No ingresaste un aptron de caracteres")
            : console.info(texto.replace(new RegExp(patron, "ig"), ""))


eliminarCaracteres()
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5")
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")


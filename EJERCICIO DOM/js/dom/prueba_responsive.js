const d = document;

const responsiveTester = (form) => {

    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            // alert("Formulario enviado");
            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    })

    d.addEventListener("click", e => {
        if (e.target === $form.cerrar) tester.close();
    })

}
export default responsiveTester;
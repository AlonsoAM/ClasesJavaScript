export default function hamburgerMenu(panelBoton, panel, link) {
    const d = document;

    d.addEventListener("click", (e) => {
        if (
            e.target.matches(panelBoton) ||
            e.target.matches(`${panelBoton} *`)
        ) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBoton).classList.toggle("is-active");
        }

        if (e.target.matches(link)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBoton).classList.remove("is-active");
        }
    });
}
import { default as hamburgerMenu } from "./dom/menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".boton-panel", ".panel", ".menu a");
});
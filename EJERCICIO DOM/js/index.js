import scrollTopBtn from "./dom/boton_scroll.js";
import slider from "./dom/carrousel.js";
import countDown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilters from "./dom/filtro_busquedas.js";
import getGeolocation from "./dom/geolocalizacion.js";
import { default as hamburgerMenu } from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";

import { digitalClock, alarm } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo_digital.js";

import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import smartVideo from "./dom/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".boton-panel", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown(
        "countDown",
        "July 31, 2021 19:00:00",
        "Feliz Cumpleaños AlonsoAM"
    );
    scrollTopBtn(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/HiXLkL42tMU" target="_blank">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/HiXLkL42tMU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/de95ZSq8NA8USvPD9" target="_blank">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1637954637704!2d-76.20573498570556!3d-13.708527578761524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110658a7d0739fd%3A0x44899e446513a91e!2sMaky%20Neko!5e0!3m2!1ses-419!2spe!4v1602880006810!5m2!1ses-419!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-devices");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
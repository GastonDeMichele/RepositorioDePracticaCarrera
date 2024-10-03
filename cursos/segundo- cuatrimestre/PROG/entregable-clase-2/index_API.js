import hamburguerMenu from "./menu_hamburguesa.js";
import scrollTopButton from "./boton_scroll.js";
import searchFilters from "./filtro_busquedas.js"; 
import darkTheme from "./tema_oscuro.js";
import { fetchNasaImages, addCardsToDOM } from "./nasaApi.js";

const d = document;

d.addEventListener("DOMContentLoaded", async (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    scrollTopButton(".scroll-top-btn");
    searchFilters(".card-filter", ".card");

    try {
        // Llamar a la función para obtener imágenes de NASA
        const images = await fetchNasaImages(); 
        if (images && Array.isArray(images)) { 
            const cardsContainer = d.querySelector('.cards'); 

           
            addCardsToDOM(images, cardsContainer);
        } else {
            console.error("No se obtuvieron imágenes válidas de la API.");
        }
    } catch (error) {
        console.error("Error al cargar imágenes de NASA:", error);
    }
});

// Se supone que darkTheme está correctamente definido en su módulo.
darkTheme(".dark-theme-btn", "dark-mode");

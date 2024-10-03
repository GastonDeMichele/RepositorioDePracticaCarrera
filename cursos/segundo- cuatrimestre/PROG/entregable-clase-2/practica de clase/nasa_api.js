

export async function fetchNasaImages() {
    const apiKey = 'DEMO_KEY'; 
    const url = `https://api.nasa.gov/planetary/apod?count=6&api_key=${apiKey}`; 

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching data from NASA API:", error);
    }
}

// Función para agregar las cards al contenedor
export function addCardsToDOM(images, container) {
    images.forEach(image => {
        const cardHTML = `
            <figure class="card">
                <img src="${image.url || image.hdurl}" alt="${image.title}">
                <figcaption>${image.title}</figcaption>
            </figure>
        `;
        container.innerHTML += cardHTML; // Agregar la card al contenedor
    });
}

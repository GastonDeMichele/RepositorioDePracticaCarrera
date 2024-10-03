fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())  // Convertimos la respuesta a JSON
    .then(data => {
        console.log(data);  // Aquí podemos ver los datos en la consola
        mostrarPersonajes(data.results);  // Llamamos a una función para mostrar los personajes
    })
    .catch(error => console.error('Error:', error));  // Si hay algún error


function mostrarPersonajes(personajes) {
    const contenedor = document.getElementById('contenedor');
    personajes.forEach(personaje => {

        const card = `
        <div class="card">
          <img src="${personaje.image}" alt="${personaje.name}">
          <h2>${personaje.name}</h2>
          <p>${personaje.species}</p>
        </div>
      `;
        
        contenedor.innerHTML += card;
    });
}

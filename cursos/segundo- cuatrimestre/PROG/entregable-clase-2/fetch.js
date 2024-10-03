fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json()) 
    .then(data => {
        console.log(data); 
        mostrarPersonajes(data.results);  
    })
    .catch(error => console.error('Error:', error));  


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

// URL de la API
const apiUrl = 'https://raw.githubusercontent.com/uendelighet/valley-con-javascript/main/infouser.json';

// Función para crear un div con una imagen y un párrafo
function createCuadro(fotos, titulos) {
    const cuadrosDiv = document.createElement('div');
    cuadrosDiv.className = 'cuadros';

    const img = document.createElement('img');
    img.className = 'fotos';
    img.src = fotos;
    img.alt = '';

    const p = document.createElement('p');
    p.className = 'titulos';
    p.textContent = titulos;

    cuadrosDiv.appendChild(img);
    cuadrosDiv.appendChild(p);

    return cuadrosDiv;
}

// Función para cargar los datos y construir el div principal
function buildAlbums() {
    // Hacer una solicitud a la API usando fetch
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }
        return response.json();
      })
      .then(data => {
        const albumsDiv = document.querySelector('.albums');

        // Crear los elementos internos con los datos del JSON
        data.cuadros.forEach(item => {
          const cuadroDiv = createCuadro(item.fotos, item.titulos);
          albumsDiv.appendChild(cuadroDiv);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

// Llamar a la función para construir el div principal
buildAlbums();

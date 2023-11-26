// const generosContainer = document.querySelector('.generos');

// const jsonURL = 'https://raw.githubusercontent.com/uendelighet/valley-con-javascript/main/favoritos.json';

// fetch(jsonURL)
//   .then(response => response.json())
//   .then(data => {
//     const generos = data.generos;

//     generos.forEach(genero => {
//       const generoImagen = document.createElement('img');
//       generoImagen.classList.add('genero-imagen');
//       generoImagen.src = genero.imagen;
//       generoImagen.alt = genero.nombre;

//       generosContainer.appendChild(generoImagen);
//     });
//   })
//   .catch(error => {
//     console.error('Error al cargar el archivo JSON', error);
//   });

//   window.onload = render;


class GenerosRenderer {
  constructor(container, jsonURL) {
    this.container = container;
    this.jsonURL = jsonURL;
    this.fetchGenerosData();
  }

  fetchGenerosData() {
    fetch(this.jsonURL)
      .then(response => response.json())
      .then(data => this.renderGeneros(data.generos))
      .catch(error => {
        console.error('Error al cargar el archivo JSON', error);
      });
  }

  renderGeneros(generos) {
    generos.forEach(genero => {
      const generoImagen = document.createElement('img');
      generoImagen.classList.add('genero-imagen');
      generoImagen.src = genero.imagen;
      generoImagen.alt = genero.nombre;

      this.container.appendChild(generoImagen);
    });
  }
}

const generosContainer = document.querySelector('.generos');
const jsonURL = 'https://raw.githubusercontent.com/uendelighet/valley-con-javascript/main/favoritos.json';

const generosRenderer = new GenerosRenderer(generosContainer, jsonURL);

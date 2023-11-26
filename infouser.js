// const apiUrl = 'https://raw.githubusercontent.com/uendelighet/valley-con-javascript/main/infouser.json';

// function createCuadro(fotos, titulos) {
//     const cuadrosDiv = document.createElement('div');
//     cuadrosDiv.className = 'cuadros';

//     const img = document.createElement('img');
//     img.className = 'fotos';
//     img.src = fotos;
//     img.alt = '';

//     const p = document.createElement('p');
//     p.className = 'titulos';
//     p.textContent = titulos;

//     cuadrosDiv.appendChild(img);
//     cuadrosDiv.appendChild(p);

//     return cuadrosDiv;
// }

// function buildAlbums() {

//     fetch(apiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Error al obtener los datos de la API');
//         }
//         return response.json();
//       })
//       .then(data => {
//         const albumsDiv = document.querySelector('.albums');

//         data.cuadros.forEach(item => {
//           const cuadroDiv = createCuadro(item.fotos, item.titulos);
//           albumsDiv.appendChild(cuadroDiv);
//         });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
// }

// buildAlbums();

// window.onload = render;




class AlbumBuilder {
  constructor(apiUrl, containerSelector) {
    this.apiUrl = apiUrl;
    this.container = document.querySelector(containerSelector);
  }

  createCuadro(fotos, titulos) {
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

  buildAlbums() {
    fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }
        return response.json();
      })
      .then(data => {
        data.cuadros.forEach(item => {
          const cuadroDiv = this.createCuadro(item.fotos, item.titulos);
          this.container.appendChild(cuadroDiv);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}

const apiUrl = 'https://raw.githubusercontent.com/uendelighet/valley-con-javascript/main/infouser.json';
const containerSelector = '.albums';


const albumBuilder = new AlbumBuilder(apiUrl, containerSelector);
albumBuilder.buildAlbums();

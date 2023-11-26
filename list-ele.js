// import data from './assets/data.json' assert { type: 'json' };
// import { Album } from './assets/models/album.js';
// import { Song } from './assets/models/song.js';

// const render = () => {
// let sectionSong = document.getElementById("songs")
// let albumes = [];

// data.result.albumes.map((album) => {
//     let songs = []
//     console.log(album);
//     album.songs.map((song) => {
//         let newSong = new Song(song.index, song.name, song.autor, song.duration)
//         songs.push(newSong)
//     })
//     let newAlbum = new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs, album.id)

//     albumes.push(newAlbum)

    
// })


// function goToDetalle(){
//     window.location = `infouser.html` 
// }


// sectionSong.innerHTML = `
// ${albumes.map((album) => {
//     return `<div class="cuadro">
//         <img class="fotos"
//             src=${album.img}
//             alt=""
//             id=${album.id}>
//         <p class="titulos">${album.title}</p>
//         <img class="estrella" onClick="() => goToDetalle()"
//         src="https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-icono-de-contorno-favorito-de-estrella.png"
//         alt="">
//     </div>`
// })
//     }
// `

// let sectionForYou = document.getElementById("options-for-you")


// let options = [];

// data.result.recommend.map((album) => {
//     let songs = []
    
//     album.songs.map((song) => {
//         let newSong = new Song(song.index, song.name, song.autor, song.duration)
//         songs.push(newSong)
//     })
//     let newAlbum = new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs, album.id)
//     options.push(newAlbum)

//     console.log("this is options" +options)
// })

// sectionForYou.innerHTML = `

// ${options.map((album) => {
//     console.log("this is my albums" +album.title)
    
//     return `<div class="cuadro">
//         <img class="fotos"
//             src=${album.img}
//             alt=""
//             id=${album.id}>
//         <p class="titulos">${album.title}</p>
//         <img class="estrella" onClick="() => goToDetalle()"
//                         src="https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-icono-de-contorno-favorito-de-estrella.png"
//                         alt="">
//     </div>`
// })
//     }
// `


// let albumList = document.querySelectorAll('.fotos')
// let currentAlbum = 0;

// albumList.forEach(photo => {
//     photo.addEventListener('click', () => {
//         currentAlbum = photo.id
//         console.log(currentAlbum)
//         window.location = `detalle.html` 
//     })
// });

// let dataAlbum = {}

// if(currentAlbum <11){
//     dataAlbum = data.result.albumes[currentAlbum]
//     console.log(dataAlbum)
// } else {
//     dataAlbum = data.result.recommend[currentAlbum]
//     console.log(dataAlbum)
// }

// let portadaAlbum = document.getElementById("select-album")

// let photoPortadaAlbum = document.createElement(img);
// photoPortadaAlbum.class = 'album'
// portadaAlbum.appendChild(photoPortadaAlbum)



//     document.getElementById("star-link").addEventListener("click", function() {
//         // Redirige a la página deseada
//         window.location.href = "infouser.html";
//     });




// }

// fetch('https://raw.githubusercontent.com/uendelighet/valley-con-javascript/main/carrusel.json')
//     .then(response => response.json())
//     .then(data => {
//         const sliderUl = document.querySelector('.slider-ul');
//         if (Array.isArray(data['slider-box']['items'])) {
//             data['slider-box']['items'].forEach(item => {
//                 const li = document.createElement('li');
//                 const img = document.createElement('img');
//                 img.src = item.img;
//                 img.alt = item.title;

//                 const divTexto = document.createElement('div');
//                 divTexto.className = 'texto';

//                 const h2 = document.createElement('h2');
//                 h2.textContent = item.title;

//                 divTexto.appendChild(h2);

//                 li.appendChild(img);
//                 li.appendChild(divTexto);

//                 sliderUl.appendChild(li);
//             });
//         } else {
//             console.error('El JSON no es un array válido.');
//         }
//     })
//     .catch(error => console.error('Error al cargar el JSON:', error));


// window.onload = render;



// importar clases necesarias
import data from './assets/data.json' assert { type: 'json' };
import { Album } from './assets/models/album.js';
import { Song } from './assets/models/song.js';

// clase para manejar la renderización de álbumes
class AlbumRenderer {
  constructor(data) {
    this.data = data;
    this.albumes = this.createAlbums();
  }

  createAlbums() {
    return this.data.result.albumes.map((album) => {
      const songs = album.songs.map((song) => new Song(song.index, song.name, song.autor, song.duration));
      return new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs, album.id);
    });
  }

  renderAlbums(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = this.albumes.map((album) => this.generateAlbumHTML(album)).join('');
    this.addClickHandlers('.fotos', goToDetalle);
  }

  generateAlbumHTML(album) {
    return `<div class="cuadro">
        <img class="fotos" src="${album.img}" alt="" id="${album.id}" onclick="goToDetalle('${album.id}')">
        <p class="titulos">${album.title}</p>
        <img class="estrella"
            src="https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-icono-de-contorno-favorito-de-estrella.png"
            alt="">
      </div>`;
  }

  addClickHandlers(selector, clickHandler) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.addEventListener('click', () => {
        const albumId = element.id;
        clickHandler(albumId);
      });
    });
  }
}

// función para redirigir a la página de detalle
function goToDetalle(albumId) {
  window.location = `detalle.html?id=${albumId}`;
}

// clase para manejar la construcción y renderizado de álbumes recomendados
class RecommendedAlbumsRenderer extends AlbumRenderer {
  constructor(data) {
    super(data);
    this.options = this.createOptions();
  }

  createOptions() {
    return this.data.result.recommend.map((album) => {
      const songs = album.songs.map((song) => new Song(song.index, song.name, song.autor, song.duration));
      return new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs, album.id);
    });
  }

  renderRecommendedAlbums(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = this.options.map((album) => this.generateAlbumHTML(album)).join('');
    this.addClickHandlers('.fotos', goToDetalle);
  }
}

// clase para manejar la construcción y renderizado del carrusel
class SliderRenderer {
  constructor() {
    this.fetchSliderData();
  }

  fetchSliderData() {
    fetch('https://raw.githubusercontent.com/uendelighet/valley-con-javascript/main/carrusel.json')
      .then(response => response.json())
      .then(data => this.renderSlider(data))
      .catch(error => console.error('Error al cargar el JSON del carrusel:', error));
  }

  renderSlider(data) {
    const sliderUl = document.querySelector('.slider-ul');
    if (Array.isArray(data['slider-box']['items'])) {
      data['slider-box']['items'].forEach(item => {
        const li = this.createSliderItem(item);
        sliderUl.appendChild(li);
      });
    } else {
      console.error('El JSON del carrusel no es un array válido.');
    }
  }

  createSliderItem(item) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;

    const divTexto = document.createElement('div');
    divTexto.className = 'texto';

    const h2 = document.createElement('h2');
    h2.textContent = item.title;

    divTexto.appendChild(h2);

    li.appendChild(img);
    li.appendChild(divTexto);

    return li;
  }
}


function onLoad() {
  const albumRenderer = new AlbumRenderer(data);
  albumRenderer.renderAlbums('songs');

  const recommendedRenderer = new RecommendedAlbumsRenderer(data);
  recommendedRenderer.renderRecommendedAlbums('options-for-you');

  const sliderRenderer = new SliderRenderer();
}


window.onload = onLoad;

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
//     let newAlbum = new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs)
//     albumes.push(newAlbum)
// })

// sectionSong.innerHTML = `
// ${albumes.map((album) => {
//     return `<a href="detalle/${album.id}.html" target="">
//     <div class="cuadro">
//         <img class="fotos"
//             src=${album.img}
//             alt="">
//         <p class="titulos">${album.title}</p>
//     </div>
//     </a>`
// })
//     }
// `

// }

// window.onload = render;






import data from './assets/data.json' assert { type: 'json' };
import { Album } from './assets/models/album.js';
import { Song } from './assets/models/song.js';


class Renderer {
  constructor(data) {
    this.data = data;
    this.albums = this.createAlbums();
  }

  createAlbums() {
    return this.data.result.albumes.map((album) => {
      const songs = album.songs.map((song) => new Song(song.index, song.name, song.autor, song.duration));
      return new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs);
    });
  }

  render() {
    const sectionSong = document.getElementById("songs");

    sectionSong.innerHTML = this.albums.map((album) => {
      return `<a href="detalle/${album.id}.html" target="">
        <div class="cuadro">
          <img class="fotos" src="${album.img}" alt="">
          <p class="titulos">${album.title}</p>
        </div>
      </a>`;
    }).join('');
  }
}


const renderer = new Renderer(data);
window.onload = () => renderer.render();

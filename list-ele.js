import data from './assets/data.json' assert { type: 'json' };
import { Album } from './assets/models/album.js';
import { Song } from './assets/models/song.js';

const render = () => {
let sectionSong = document.getElementById("songs")
let albumes = [];

data.result.albumes.map((album) => {
    let songs = []
    console.log(album);
    album.songs.map((song) => {
        let newSong = new Song(song.index, song.name, song.autor, song.duration)
        songs.push(newSong)
    })
    let newAlbum = new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs)

    albumes.push(newAlbum)

    
})

sectionSong.innerHTML = `
${albumes.map((album) => {
    return `<div class="cuadro">
        <img class="fotos"
            src=${album.img}
            alt=""
            id=${album.id}>
        <p class="titulos">${album.title}</p>
    </div>`
})
    }
`


let sectionForYou = document.getElementById("options-for-you")


let options = [];

data.result.recommend.map((album) => {
    let songs = []
    console.log(album);
    album.songs.map((song) => {
        let newSong = new Song(song.index, song.name, song.autor, song.duration)
        songs.push(newSong)
    })
    let newAlbum = new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs)
    options.push(newAlbum)
})

sectionForYou.innerHTML = `
<a href="detalle.html" target="">
${options.map((album) => {
    return `<div class="cuadro">
        <img class="fotos"
            src=${album.img}
            alt="">
        <p class="titulos">${album.title}</p>
    </div>`
})
    }
`


let albumList = document.querySelectorAll('.fotos')
let currentAlbum = 0;

albumList.forEach(photo => {
    photo.addEventListener('click', () => {
        currentAlbum = photo.id
        console.log(currentAlbum)
        window.location = 'detalle.html'
    })
});

let dataAlbum = {}

if(currentAlbum <11){
    dataAlbum = data.result.albumes[currentAlbum]
    console.log(dataAlbum)
} else {
    dataAlbum = data.result.recommend[currentAlbum]
    console.log(dataAlbum)
}

let portadaAlbum = document.getElementById("select-album")

let photoPortadaAlbum = document.createElement(img);
photoPortadaAlbum.class = 'album'
portadaAlbum.appendChild(photoPortadaAlbum)


}

window.onload = render;
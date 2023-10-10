import data from './assets/data.json' assert { type: 'json' };
import { Album } from './models/album.js';
import { Song } from './models/song.js';

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
<a href="detalle.html" target="">
${albumes.map((album) => {
    return `<div class="cuadro">
        <img class="fotos"
            src=${album.img}
            alt="">
        <p class="titulos">${album.title}</p>
    </div>`
})
    }
`


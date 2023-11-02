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
    let newAlbum = new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs, album.id)

    albumes.push(newAlbum)

    
})


function goToDetalle(){
    window.location = `infouser.html` 
}


sectionSong.innerHTML = `
${albumes.map((album) => {
    return `<div class="cuadro">
        <img class="fotos"
            src=${album.img}
            alt=""
            id=${album.id}>
        <p class="titulos">${album.title}</p>
        <img class="estrella" onClick="() => goToDetalle()"
        src="https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-icono-de-contorno-favorito-de-estrella.png"
        alt="">
    </div>`
})
    }
`

let sectionForYou = document.getElementById("options-for-you")


let options = [];

data.result.recommend.map((album) => {
    let songs = []
    
    album.songs.map((song) => {
        let newSong = new Song(song.index, song.name, song.autor, song.duration)
        songs.push(newSong)
    })
    let newAlbum = new Album(album.title, album.img, album.autorInfo, album.description, album.releaseRecord, songs, album.id)
    options.push(newAlbum)

    console.log("this is options" +options)
})

sectionForYou.innerHTML = `

${options.map((album) => {
    console.log("this is my albums" +album.title)
    
    return `<div class="cuadro">
        <img class="fotos"
            src=${album.img}
            alt=""
            id=${album.id}>
        <p class="titulos">${album.title}</p>
        <img class="estrella" onClick="() => goToDetalle()"
                        src="https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-icono-de-contorno-favorito-de-estrella.png"
                        alt="">
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
        window.location = `detalle.html` 
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



    document.getElementById("star-link").addEventListener("click", function() {
        // Redirige a la página deseada
        window.location.href = "infouser.html";
    });




}

fetch('https://raw.githubusercontent.com/uendelighet/valley-con-javascript/main/carrusel.json')
    .then(response => response.json())
    .then(data => {
        const sliderUl = document.querySelector('.slider-ul');
        if (Array.isArray(data['slider-box']['items'])) {
            data['slider-box']['items'].forEach(item => {
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

                sliderUl.appendChild(li);
            });
        } else {
            console.error('El JSON no es un array válido.');
        }
    })
    .catch(error => console.error('Error al cargar el JSON:', error));


window.onload = render;
export class Song {
    index = 0
    nombre = ""
    autor = ""
    duration = ""

    constructor(index, nombre, autor, duration) {
        this.nombre = nombre;
        this.index = index;
        this.autor = autor;
        this.duration = duration;
    }
}
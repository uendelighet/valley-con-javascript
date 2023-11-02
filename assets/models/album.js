
    export class Album {
        title = ""
        img = ""
        autorInfo = ""
        description = ""
        releaseRecord = ""
        songs = [{}]
        id=""
        constructor(title, img, autorInfo, description, releaseRecord, songs, id) {
            this.title = title;
            this.img = img;
            this.autorInfo = autorInfo;
            this.description = description;
            this.releaseRecord = releaseRecord;
            this.songs = songs;
            this.id = id;
        }
        click() {
            this.image.addEventeListener('click', () => {
                return this.title
            })
        }
    }

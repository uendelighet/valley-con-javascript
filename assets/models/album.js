
    export class Album {
        title = ""
        img = ""
        autorInfo = ""
        description = ""
        releaseRecord = ""
        songs = [{}]
        constructor(title, img, autorInfo, description, releaseRecord, songs) {
            this.title = title;
            this.img = img;
            this.autorInfo = autorInfo;
            this.description = description;
            this.releaseRecord = releaseRecord;
            this.songs = songs
        }
        click() {
            this.image.addEventeListener('click', () => {
                return this.title
            })
        }
    }

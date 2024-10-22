// create your Media class:
class Media {
    constructor(title, genre, year) {
        this.title = title;
        this.genre = genre;
        this.year = year
    }
    static totalMediaCount = 0
    summary() {
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
}

const book = new Media("Oliver Twist", "Nostalgia", 1870);
Media.totalMediaCount;
console.log(book);

// uncomment below to export it:
module.exports = Media;

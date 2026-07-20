const songs = [
    { 
        title: "Toxicity", 
        artist: "System of a Down", 
        album: "Toxicity", 
        duration: 240, 
        cover: "./images/toxicity-cover.webp",
        audio: "./songs/alexguz-funk.mp3",
    },
    { 
        title: "Chop Suey", 
        artist: "System of a Down", 
        album: "Toxicity", 
        duration: 240, 
        cover: "./images/toxicity-cover.webp",
        audio: "./songs/kontraa-water.mp3",
    },
    { 
        title: "B.Y.O.B", 
        artist: "System of a Down", 
        album: "Mezmerize", 
        duration: 240, 
        cover: "./images/mezmerize-cover.webp",
        audio: "./songs/mickeyscat-moment.mp3",
    },
]

let currentSong = 0
const audio = document.getElementById("audio")

function loadSong(index) {
    const song = songs[index]

    document.getElementById("title").textContent = song.title
    document.getElementById("artist").textContent = song.artist
    document.getElementById("album").textContent = song.album
    document.getElementById("cover").src = song.cover
    audio.src = song.audio
    audio.volume = .1
    audio.play()
}

/*Pause/Play song*/
document.getElementById("pause").addEventListener("click", () => {
    
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
})

/*Reload song*/
document.getElementById("reload").addEventListener("click", () => {
    audio.currentTime = 0
    audio.play()
})

/*Next song*/
document.getElementById("next-song").addEventListener("click", () => {
    currentSong++

    if (currentSong >= songs.length) {
        currentSong = 0
    }

    loadSong(currentSong)
})

/*Prev song*/
document.getElementById("prev-song").addEventListener("click", () => {
    currentSong--

    if (currentSong < 0) {
        currentSong = songs.length - 1
    }

    loadSong(currentSong)
})

/*Like song*/
const fillHeart = document.getElementById("heart")

fillHeart.addEventListener("click", () => {
    if (fillHeart.getAttribute("fill") === "none") {
        fillHeart.setAttribute("fill", "currentColor") 
    } else {
        fillHeart.setAttribute("fill", "none")
    }
})

/*Pop sound effect when the song is liked*/
const likeSound = document.getElementById("like-sound")
const likeButton = document.getElementById("like")

likeButton.addEventListener("click", () => {
    likeSound.currentTime = 0
    likeSound.volume = .25
    likeSound.play()
})

/*Aleatory song*/
document.getElementById("random").addEventListener("click", () => {
    let randomSong

    do {
        randomSong = Math.floor(Math.random() * songs.length)
    } while (randomSong === currentSong) /*no repeat current song*/

    currentSong = randomSong
    loadSong(currentSong)
})

loadSong(currentSong)
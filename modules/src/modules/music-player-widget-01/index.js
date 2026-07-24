const songs = [
    {
        title: "Nova Horizon", 
        artist: "Luminous Echo", 
        album: "Pulse Avenue", 
        liked: false,
        cover: "./images/mountain-landscape.webp",
        audio: "./songs/mickeyscat-moment.mp3",
    },
    {
        title: "Tide Rhythm", 
        artist: "Kinetic Aurora", 
        album: "Aura Skyline", 
        liked: false, 
        cover: "./images/blue-mountain.webp",
        audio: "./songs/alexguz-funk.mp3",
    },
    {
        title: "Vibe Fusion", 
        artist: "Nero Meridian", 
        album: "Echo Horizon", 
        liked: false, 
        cover: "./images/mountains-forest.webp",
        audio: "./songs/kontraa-water.mp3",
    },
]

let currentSong = 0

const playICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>`

const pauseICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>`

const title = document.getElementById("title")
const artist = document.getElementById("artist")
const album = document.getElementById("album")
const cover = document.getElementById("cover")
const heart = document.getElementById("heart")
const audio = document.getElementById("audio")
const likeSound = document.getElementById("like-sound")
const setLike = document.getElementById("like")
const playButton = document.getElementById("play-button")
const reload = document.getElementById("reload")
const next = document.getElementById("next-song")
const prev = document.getElementById("prev-song")
const random = document.getElementById("random")
const progress = document.getElementById("progress")
const currentTime = document.getElementById("currentTime")
const duration = document.getElementById("duration")
const progressFill = document.getElementById("progress-fill")

/*Format seconds to minutes*/
function toMinutes(seconds) {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)

    return `${minutes}:${secs.toString().padStart(2, "0")}`
}

/*Duration of the song in minutes*/
audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration
    duration.textContent = toMinutes(audio.duration)
})

/*Update input progress value and current time of the song in minutes*/
audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime
    currentTime.textContent = toMinutes(audio.currentTime)

    const percent = (audio.currentTime / audio.duration) * 100
    progressFill.style.width = `${percent}%`
})

/*Handle input manually*/
progress.addEventListener("input", () => {
    audio.currentTime = progress.value
    const percent = (progress.value / progress.max) * 100
    progressFill.style.width = `${percent}%`
})

/*Load next song when song ended */
function autoNextSong() {
    currentSong = (currentSong + 1) % songs.length

    loadSong(currentSong)
}

audio.addEventListener("ended", () => {
    setTimeout(autoNextSong, 1000)
})

/*Load data of the song*/
function renderSong() {
    const song = songs[currentSong]

    title.textContent = song.title
    artist.textContent = song.artist
    album.textContent = song.album
    cover.src = song.cover

    heart.setAttribute("fill", songs[currentSong].liked ? "currentColor" : "none")
}

/*Load songs*/
function loadSong(index) {
    audio.src = songs[index].audio
    audio.volume = .05 /*Volume of the song*/
    audio.play()

    renderSong()
}

/*Like/Unlike song*/
function handleLike(index) {
    songs[index].liked = !songs[index].liked
    
    if (songs[index].liked === true) {
        likeSound.currentTime = 0
        likeSound.volume = .25
        likeSound.play()
    }
    
    renderSong()
}

setLike.addEventListener("click", () => {
    handleLike(currentSong)
})

/*pause/Play song*/
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play()
        playButton.innerHTML = pauseICON
    } else {
        audio.pause()
        playButton.innerHTML = playICON
    }
})

/*Reload song*/
reload.addEventListener("click", () => {
    audio.currentTime = 0
    audio.play()
})

/*Next song*/
next.addEventListener("click", () => {
    currentSong++

    if (currentSong >= songs.length) {
        currentSong = 0
    }

    loadSong(currentSong)
})

/*Prev song*/
prev.addEventListener("click", () => {
    currentSong--

    if (currentSong < 0) {
        currentSong = songs.length - 1
    }

    loadSong(currentSong)
})

/*Aleatory song*/
random.addEventListener("click", () => {
    let randomSong

    do {
        randomSong = Math.floor(Math.random() * songs.length)
    } while (randomSong === currentSong) /*no repeat current song*/

    currentSong = randomSong
    loadSong(currentSong)
})

loadSong(currentSong)
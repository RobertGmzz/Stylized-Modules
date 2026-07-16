const keys = document.querySelectorAll(".key-sound")
const audio = document.getElementById("audio")

keys.forEach(key => {
    key.addEventListener("click", () => {
        audio.currentTime = 0
        audio.volume = 0.25
        audio.play()
    })
})
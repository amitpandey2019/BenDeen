console.long("Welcome to BeeDen");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');

let song = [
    {songName: "1.mp3", filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "1.mp3", filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "1.mp3", filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "1.mp3", filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "1.mp3", filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "1.mp3", filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
]


// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=){
        audioElement.play();
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update Seekbar
})
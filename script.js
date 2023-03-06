console.log('Welcome to Music App')

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "Maan Meri Jaan", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Kahani Suno", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Jhoome Jo Pathaan", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Ami Je Tomar", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Kesariya", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Raatan Lambiyan", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "Besharam Rang", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName: "Sona Re", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "Dil Galti Kar Baitha", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"}
]

songItems.forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = song[i].coverPath;
    e.getElementsByClassName('songName')[0].innerText = song[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    p = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = p;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const player = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele)=>{
        ele.classList.remove('fa-pause-circle');
        ele.classList.add('fa-play-circle');
    })
}  

Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        player();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
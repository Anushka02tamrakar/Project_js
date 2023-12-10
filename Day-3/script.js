let playBtn = document.getElementsByClassName('play')[0];
let pauseBtn = document.getElementsByClassName('pause')[0];
let audioplay = document.getElementById('audioplay');

let text = document.getElementById('text');

playBtn.addEventListener('click', function(){
    audioplay.play();
    text.innerHTML = "Music Playing!";
});
pauseBtn.addEventListener('click', function(){
    audioplay.pause();
    text.innerHTML = "Music Paused!";
});
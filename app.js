const musicPlayer = document.getElementById('music-player');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
playButton.addEventListener('click', () => {
    musicPlayer.play();
});

pauseButton.addEventListener('click', () => {
    musicPlayer.pause();
});
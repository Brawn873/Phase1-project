const musicPlayer = document.getElementById('music-player');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
playButton.addEventListener('click', () => {
    musicPlayer.play();
});

pauseButton.addEventListener('click', () => {
    musicPlayer.pause();
});

.then(data => {
    if (data.success) {
        // The to-do task was successfully added
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block'; // Show the success message
    }
})
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.style.display = 'block';
        video.play();
        playButton.textContent = 'pause';
    } else {
        video.pause();
        playButton.textContent = 'Play';
    }

    }
);

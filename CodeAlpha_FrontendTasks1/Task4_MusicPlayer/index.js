const audio = document.getElementById('audio');

function playSong() { audio.play(); }
function pauseSong() { audio.pause(); }
function stopSong() { audio.pause(); audio.currentTime = 0; }

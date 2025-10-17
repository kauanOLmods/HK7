const playButton = document.getElementById('play-sound');
const sound = document.getElementById('background-sound');


playButton.addEventListener('click', () => {
  sound.play();              
  playButton.style.display = 'none'; 

});

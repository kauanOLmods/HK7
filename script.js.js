// Pega o botão e o áudio
const playButton = document.getElementById('play-sound');
const sound = document.getElementById('background-sound');

// Quando o usuário clicar, toca o áudio
playButton.addEventListener('click', () => {
  sound.play();               // inicia a música
  playButton.style.display = 'none'; // esconde o botão
});
import MediaPlayer from './MediaPlayer.js'
import autoPlay from './plugins/autoPlay.js'

const video = document.querySelector("#video1");
const button = document.querySelector('#button1');
const btnToggleMute = document.querySelector('#toggleMute');
const player = new MediaPlayer({ el: video, plugins: [new autoPlay()] });

button.onclick = () => player.toggle();
btnToggleMute.onclick = () => player.toggleMute();


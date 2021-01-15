const video = document.querySelector("#video1");
const button = document.querySelector('#button1');



function MediaPlayer(config) {
    this.media = config.el;//elemento
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}
MediaPlayer.prototype.toggle = function () {
    this.media.paused ? this.play() : this.pause();
}

const player = new MediaPlayer({ el: video });

button.onclick = () => player.toggle();

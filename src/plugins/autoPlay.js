function autoPlay() { }
autoPlay.prototype.run = function (MediaPlayer) {
    MediaPlayer.mute();
    MediaPlayer.play();
}
export default autoPlay;
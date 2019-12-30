function Autolay() {}

Autolay.prototype.run = function(player) {
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};

export default Autolay;

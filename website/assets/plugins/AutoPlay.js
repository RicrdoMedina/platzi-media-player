function Autolay() {}

Autolay.prototype.run = function(player) {
  player.mute();
  player.play();
};

export default Autolay;

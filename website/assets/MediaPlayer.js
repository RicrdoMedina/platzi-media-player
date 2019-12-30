function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPligins();
}

MediaPlayer.prototype._initPligins = function() {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    }
  };

  this.plugins.forEach(plugin => {
    plugin.run(player);
  });
};

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.isPaused = function() {
  return this.media.paused;
};

MediaPlayer.prototype.isMuted = function() {
  return this.media.muted;
};

MediaPlayer.prototype.mute = function() {
  return (this.media.muted = true);
};

MediaPlayer.prototype.unmute = function() {
  return (this.media.muted = false);
};

export default MediaPlayer;

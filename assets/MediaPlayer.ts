class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPligins();
  }

  private initPligins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play = () => {
    this.media.play();
  };

  pause = () => {
    this.media.pause();
  };

  isPaused = () => {
    return this.media.paused;
  };

  isMuted = () => {
    return this.media.muted;
  };

  mute = () => {
    return (this.media.muted = true);
  };

  unmute = () => {
    return (this.media.muted = false);
  };
}

export default MediaPlayer;

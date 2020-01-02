class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPligins();
  }

  initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";

    this.media.parentNode.insertBefore(this.container, this.media);

    this.container.appendChild(this.media);
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

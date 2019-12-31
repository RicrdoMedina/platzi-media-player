class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.pausedByScroll = false;
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    });

    observer.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  handleVisibilityChange = () => {
    const isVisible = document.visibilityState === "visible";
    const {
      player: { play, pause }
    } = this;

    isVisible ? play() : pause();
  };

  handlePausedByScrolling = (value = false) => {
    this.pausedByScroll = value;
  };

  handleIntersection = entries => {
    const entry = entries[0];
    const {
      threshold,
      pausedByScroll,
      handlePausedByScrolling,
      player: { play, pause, media }
    } = this;

    const isVisible = entry.intersectionRatio > threshold;

    if (isVisible) {
      if (pausedByScroll) {
        handlePausedByScrolling();
        play();
      }
    } else {
      if (!media.paused) {
        handlePausedByScrolling(true);
        pause();
      }
    }
  };
}

export default AutoPause;

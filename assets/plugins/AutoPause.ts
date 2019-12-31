import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  private pausedByScroll: boolean;
  player: MediaPlayer;

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

  private handleVisibilityChange = () => {
    const isVisible = document.visibilityState === "visible";
    const {
      player: { play, pause }
    } = this;

    isVisible ? play() : pause();
  };

  private handlePausedByScrolling = (value: boolean = false) => {
    this.pausedByScroll = value;
  };

  private handleIntersection = (entries: IntersectionObserverEntry[]) => {
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

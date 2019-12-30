import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const playOrPause = document.getElementById("playOrPause");
const muteOrUnmute = document.getElementById("muteOrUnmute");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()]
});

playOrPause.onclick = () =>
  player.isPaused() ? player.play() : player.pause();

muteOrUnmute.onclick = () =>
  player.isMuted() ? player.unmute() : player.mute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../../sw.js").catch(error => {
    console.log("*** ERROR ***", error.message);
  });
}

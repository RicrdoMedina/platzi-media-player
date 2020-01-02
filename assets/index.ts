import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector("video");
const playOrPause: HTMLElement = document.getElementById("playOrPause");
const muteOrUnmute: HTMLElement = document.getElementById("muteOrUnmute");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

playOrPause.onclick = () =>
  player.isPaused() ? player.play() : player.pause();

muteOrUnmute.onclick = () =>
  player.isMuted() ? player.unmute() : player.mute();

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("../sw.js").catch(error => {
//     console.log("*** ERROR ***", error.message);
//   });
// }

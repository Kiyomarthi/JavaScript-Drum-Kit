const audios = document.querySelectorAll("#keyAudio");
const keys = document.querySelectorAll(".key");
// let arr = [];
// keys.forEach((key) => (arr = [...arr, key.getElementsByTagName("kbd")]));
// keys.forEach((i) => console.log(i));

window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const style = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.currentTime = 0;
  key.play();
  style.classList.add("playing");
});

// function handleGetKey(e) {
//   keys.forEach((key) => {
//     if (
//       key.getElementsByTagName("kbd")[0].innerHTML.toLowerCase() ===
//       e.key.toLowerCase()
//     ) {
//       handlePlayMusic(key.getAttribute("data-key"));
//       key.classList.add("playing");
//     }
//   });
// }

// function handlePlayMusic(dataKey) {
//   audios.forEach((audio) => {
//     if (audio.getAttribute("data-key") === dataKey) {
//       audio.play();
//     }
//   });
// }

// window.addEventListener("keydown", (e) => handleGetKey(e));

function removeClass(e) {
  if (e.propertyName === "transform") {
    this.classList.remove("playing");
  }
}

keys.forEach((key) => key.addEventListener("transitionend", removeClass));

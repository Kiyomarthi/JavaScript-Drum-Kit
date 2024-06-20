const audios = document.querySelectorAll("#keyAudio");
const keys = document.querySelectorAll(".key");
let arr = [];
keys.forEach((key) => (arr = [...arr, key.getElementsByTagName("kbd")]));

function handlePlayMusic(e) {
  arr.forEach((i) => {
    if (i[0].innerHTML.toLowerCase() === e.key.toLowerCase()) {
      console.log("ok");
    }
  });
}

window.addEventListener("keydown", (e) => handlePlayMusic(e));

const audios = document.querySelectorAll("#keyAudio");
const keys = document.querySelectorAll(".key");
// let arr = [];
// keys.forEach((key) => (arr = [...arr, key.getElementsByTagName("kbd")]));
// keys.forEach((i) => console.log(i));

function handleGetKey(e) {
  keys.forEach((key) => {
    if (
      key.getElementsByTagName("kbd")[0].innerHTML.toLowerCase() ===
      e.key.toLowerCase()
    ) {
      handlePlayMusic(key.getAttribute("data-key"));
    }
  });
}

function handlePlayMusic(dataKey) {
  audios.forEach((audio) => {
    if (audio.getAttribute("data-key") === dataKey) {
      audio.play();
    }
  });
}

window.addEventListener("keydown", (e) => handleGetKey(e));

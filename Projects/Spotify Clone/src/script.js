async function fetchSongs() {
  let a = await fetch(
    "http://127.0.0.1:5500/Projects/Spotify%20Clone/src/songs/"
  );
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let links = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < links.length; index++) {
    let element = links[index];
    if (element.href.endsWith(".mp3")) {
      let filename = element.href.split("src/songs/")[1];
      songs.push("src/songs/" + filename);
    }
  }
  return songs;
}

let currentSong = new Audio()

let playBtn = document.querySelector("#songPlay")
let playIco = playBtn.querySelector("img")

function musicPlay(track) {
  track = track.replaceAll("&amp;", "%26")
  currentSong.src = "src/songs/" + track;
  currentSong.play();
  playIco.src = "src/img/pause.svg"
}

async function main() {
  // Get the list of all the songs
  let songs = await fetchSongs();

  // Show all the songs in the list
  let songsList = document
    .querySelector(".songsList")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    let displayName = decodeURIComponent(song.split("/").pop());
    songsList.innerHTML =
      songsList.innerHTML +
      `<li>
                <div class="musicIconContainer flex justify-center align-center">
                  <img src="src/img/music-note-04-stroke-rounded.svg" alt="Music Icon" class="musicIcon invert">
                </div>
                <div class="songName">
                  ${displayName} 
                </div>
                <div class="play flex justify-center align-center">
                  <img src="src/img/play.svg" alt="Play Song" class ="invert playBtn">
                </div>
              </li>`;
  }

  // Attach an event listenener to each song
  Array.from(
    document.querySelector(".songsList").getElementsByTagName("li")
  ).forEach((e) => {
    console.log(e);
    e.addEventListener("click", () => {
      let song = e.querySelector(".songName").innerHTML.trim();
      console.log("Playing " + song)
      musicPlay(song);
    });
  });


  // Attach an event listener to play, previos and next buttons
  playBtn.addEventListener("click", ()=> {
    if (currentSong.paused) {
      currentSong.play()
      playIco.src = "src/img/pause.svg"
    } else {
      currentSong.pause()
      playIco.src="src/img/play.svg"
    }
  })

}

main();

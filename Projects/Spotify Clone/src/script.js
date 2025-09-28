async function fetchSongs() {
  let a = await fetch(
    "http://127.0.0.1:5500/Projects/Spotify%20Clone/src/songs"
  );
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let links = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < links.length; index++) {
    let element = links[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}

async function main() {
  let songs = await fetchSongs();
  console.log(songs);

  let songsList = document
    .querySelector(".songsList")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songsList.innerHTML = songsList.innerHTML + `<li>
                <div class="musicIconContainer flex justify-center align-center">
                  <img src="src/img/music-note-04-stroke-rounded.svg" alt="Music Icon" class="musicIcon invert">
                </div>
                ${song.replaceAll("%20", " ").replaceAll("%26", "&")} 
                <div class="play flex justify-center align-center">
                  <img src="src/img/play.svg" alt="Play Song" class ="invert playBtn">
                </div>
              </li>`;
  }

  var firstSong = new Audio(songs[0]);
  // firstSong.play();
}

main();

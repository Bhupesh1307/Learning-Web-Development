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
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}

let currentSong = new Audio();

let playBtn = document.querySelector("#songPlay");
let playIco = playBtn.querySelector("img");

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

function musicPlay(track, pause = false) {
  track = decodeURIComponent((track));
  currentSong.src = "src/songs/" + encodeURIComponent(track);
  if (!pause) {
    currentSong.play();
    playIco.src = "src/img/pause.svg";
  }
  let songInfo = document.querySelector(".songInfo");
  songInfo.innerHTML = `<div class="musicIconContainer flex justify-center align-center">
                          <img src="src/img/music-note-04-stroke-rounded.svg" alt="Music Icon" class="musicIcon invert">
                        </div> 
                        ${track}`;
}

function songTimeUpdate() {
  let songCurrentTime = document.querySelector(".songCurrentTime");
  let songDuration = document.querySelector(".songDuration");
  songCurrentTime.innerHTML = secondsToMinutesSeconds(currentSong.currentTime);
  songDuration.innerHTML = secondsToMinutesSeconds(currentSong.duration);
  let songProgress = (currentSong.currentTime / currentSong.duration) * 100 + "%";
  document.querySelector(".circle").style.left = songProgress;
  document.querySelector(".progress").style.width = songProgress;
  if (songProgress == "100%") {
    playIco.src = "src/img/play.svg";
  }
}

async function main() {
  // Get the list of all the songs
  let songs = await fetchSongs();

  // Add first song in queue
  musicPlay(songs[0], true);

  // Function to pause/play songs with Space key
  document.addEventListener("keyup", (e)=> {
    if (e.code === "Space") {
      if (currentSong.paused) {
      currentSong.play();
      playIco.src = "src/img/pause.svg";
      } else {
        currentSong.pause();
        playIco.src = "src/img/play.svg";
      }
    }
  })

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
    e.addEventListener("click", () => {
      let song = e.querySelector(".songName").innerText.trim();
      console.log("Playing " + song);
      musicPlay(song);
    });
  });

  // Attach an event listener to play, previos and next buttons
  playBtn.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      playIco.src = "src/img/pause.svg";
    } else {
      currentSong.pause();
      playIco.src = "src/img/play.svg";
    }
  });

  // Listen for song time update
  currentSong.addEventListener("timeupdate", () => {
    songTimeUpdate();
  });

  // Function to Seek Song Duration
  document.querySelector(".seekbarContainer").addEventListener("click", (e)=> {
    let percent = (e.offsetX / e.currentTarget.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    document.querySelector(".progress").style.width = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  })

  songTimeUpdate();

}

// Add Eventlistener to Hamburger Menu Button
let hamMenuBtn = document.querySelector(".hamburgerBtn");
hamMenuBtn.addEventListener("click", ()=> {
  let hamMenu = document.querySelector(".hamMenu");
  if (hamMenu.style.right == "-100%") {
    hamMenu.style.right = "0";
    hamMenu.style.opacity = "100%"
    hamMenuBtn.querySelector("img").src = "src/img/x.svg";
  } else {
    hamMenu.style.right = "-100%";
    hamMenu.style.opacity = "10%";
    hamMenuBtn.querySelector("img").src = "src/img/menu-wider.svg";
  }
});

main();

async function fetchSongs() {
  let a = await fetch("http://127.0.0.1:5500/Projects/Spotify%20Clone%20Project/src/songs");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let links = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < links.length; index++) {
    let element = links[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}

async function main() {
  let getSongs = await fetchSongs();
  console.log(getSongs);
}

main();

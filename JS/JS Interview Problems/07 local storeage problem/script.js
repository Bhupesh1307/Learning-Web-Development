if (localStorage.getItem("name")) {
  Name = localStorage.getItem("name");
  document.querySelector(".name").innerText = "Hi," + Name
} else {
  let Name = prompt("Enter your name");
  localStorage.setItem("name", Name);
  document.querySelector(".name").innerText = "Hi," + Name
}

function getNote(note) {
  note = prompt("Enter your note");
  localStorage.setItem("note", note);
  document.querySelector(".note").innerText = note;
}

let note = localStorage.getItem("note");
if (note) {
  document.querySelector(".note").innerText = note;
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getNote(note);
});

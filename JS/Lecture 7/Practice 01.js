let body = document.querySelector("body");
let newBtn = document.createElement("button");
body.prepend(newBtn);
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let para = document.querySelector("p");
para.classList.add("new-class");
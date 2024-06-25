let div = document.querySelector("div");
console.log(div);

let atr = div.getAttribute("class");
console.log(atr);

let para = document.querySelector("p");
paraAtr = para.getAttribute("class");
console.log(paraAtr);

para.setAttribute("class", "p-tag")
para.style.backgroundColor = "blue";
para.style.color = "white";
para.style.fontSize = "24px";
para.style.fontWeight = "bold";
para.style.fontFamily = "sans-serif";

// Insert Elements
let btn = document.createElement("button");
let body = document.querySelector("body");
body.append(btn);
btn.style.width = "65px";
btn.style.height = "25px";
btn.innerText = "Button";

let paragraph = document.createElement("p");
body.prepend(paragraph);
paragraph.innerText = "This paragraph is added to the document using JavaScript";
paragraph.style.fontFamily = "sans-serif";
paragraph.style.fontWeight = "bold";
paragraph.style.color = "red";

head1 = document.createElement("h1");
head1.innerText = "Heading before div";
head2 = document.createElement("h2");
head2.innerHTML = "<i>Heading after the div</i>";
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "skyblue";
div.before(head1);
div.after(head2);

btn.remove();
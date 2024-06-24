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
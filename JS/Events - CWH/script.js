const btn = document.getElementById("btn");
const dibba = document.querySelector(".box");

btn.addEventListener("click", ()=> {
    dibba.innerHTML = "<b>Yayy you clicked the button</b>";
});

btn.addEventListener("dblclick", ()=> {
    dibba.style.backgroundColor = "blue";
});

document.addEventListener("contextmenu", ()=> {
    alert("Please don't try to hack me!")
});

document.addEventListener("keydown", ()=> {
    document.body.style.backgroundColor = 'green';
});

document.addEventListener("keydown", (e)=> {
    console.log(e.key);
});

// Event Bubbling
document.querySelector(".child").addEventListener("click", (e)=> {
    e.stopPropagation();
    alert("Child was Clicked!");
});

document.querySelector(".childContainer").addEventListener("click", () => {
    alert("Child Container was clicked");
});

document.querySelector(".container").addEventListener("click", () => {
    alert("Container was clicked");
});

// If you click on container the event triggers but while you click on child you are also clicking on container so container's event is also triggered
// If you stop propogation the Event Bubbling will not be happened

// Set Intervel
setInterval(() => {
    document.body.style.backgroundColor = "red";
}, 3000);

setTimeout(() => {
    document.body.style.backgroundColor = "blue";
}, 5000);

// SetInterval Loops in intervals but SetTimout is run only once after the timeOut
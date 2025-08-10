const addItem = async (item) => {
  await randDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

let randDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 300);

  let text = [
    "Initialising Hacking",
    "Reading your files",
    "Password files detected",
    "Sending all paswords and personal files to server",
    "Cleaning up",
  ];

  for (const item of text) {
    await addItem(item);
  }

  await randDelay();
  clearInterval(t);
}

main();

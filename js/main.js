// google csv url
var csv =
  "https://docs.google.com/spreadsheets/d/1gYzw56_7EyoKAitdRL-_5j2jCmXorbgoUnZTimuqBWc/edit?usp=sharing";

function init() {
  Tabletop.init({ key: csv, callback: showInfo, simpleSheet: true }); //multiple sheet should be changed
}

// TODO: Filtering according to the fields, seperate by date

function showInfo(d, tabletop) {
  const container = document.querySelector(".title");
  for (let i = 0; i < d.length; i++) {
    let createDiv = document.createElement("div");
    createDiv.className = "section";
    createDiv.innerHTML = `
    <h5 class="pub pu_title">${d[i].Title}</h5>
    <p class="pub author">${d[i].Author}</p>
    <h6 class="pub publisher">${d[i].Publisher}</h6>`;
    container.appendChild(createDiv);
  }
}

window.addEventListener("DOMContentLoaded", init);

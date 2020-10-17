// google csv url
var csv =
  "https://docs.google.com/spreadsheets/d/1gYzw56_7EyoKAitdRL-_5j2jCmXorbgoUnZTimuqBWc/edit?usp=sharing";

var field_list = ["Poster", "Workshop", "Conference", "Journal"];

function init() {
  Tabletop.init({ key: csv, callback: showInfopub, simpleSheet: true }); //multiple sheet should be changed
}

// TODO: Filtering according to the fields, seperate by date

function showInfopub(d, tabletop) {
  const container = document.querySelector(".publications");
  const container_pub = document.querySelector(".projects");
  for (let i = 0; i < d.length; i++) {
    if (field_list.indexOf(d[i].Field) > -1) {
      let createDiv = document.createElement("div");
      createDiv.className = "section";
      createDiv.innerHTML = `
      <h6 class="pub pu_title">${d[i].Title}</h6>
      <div class="pub author">${d[i].Author}</div>
      <div class="pub publisher">${d[i].Publisher}</div>
      <a class="pub link" href="${d[i].Paper ? d[i].Paper : null}">${
        d[i].Paper ? "&#128218;" : " "
      }</a>
      <a class="pub link" href="${d[i].Video_Link ? d[i].Video_Link : null}">${
        d[i].Video_Link ? "&#129302;" : " "
      }</a>
      `;

      container.appendChild(createDiv);
    } else {
      let createDiv = document.createElement("div");
      createDiv.className = "section";
      createDiv.innerHTML = `
      <a class="pub link" href="${d[i].Video_Link ? d[i].Video_Link : null}">
      <img
      class="responsive-img"
      style="width:600px;" src="./files/publications/${d[i].thumbnail}/${
        d[i].thumbnail
      }.gif"
    />
    </a>
      <h6 class="pub pu_title">${d[i].Title}</h6>
      <div class="pub author">${d[i].Author}</div>
      <div class="pub description">${d[i].description}</div>
      <div class="pub publisher">${d[i].Publisher}</div>
      <a class="pub link" href="${d[i].Paper ? d[i].Paper : null}">${
        d[i].Paper ? "&#128218" : " "
      }</a>
      <a class="pub link" href="${d[i].Video_Link ? d[i].Video_Link : null}">${
        d[i].Video_Link ? "&#129302;" : " "
      }</a>
     
      `;
      container_pub.appendChild(createDiv);
    }
  }
}

window.addEventListener("DOMContentLoaded", init);

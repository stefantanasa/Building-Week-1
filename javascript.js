let albumList = document.querySelector(".list");
let button = document.createElement("button");
let buttonCount = document.createElement("button");
button.classList = "btn btn-primary m-2";
button.innerText = "List Albums";
buttonCount.classList = "btn btn-primary m-2";
buttonCount.classList = "btn btn-primary m-2";
buttonCount.innerText = "Count Albums";

albumList.appendChild(button);
albumList.appendChild(buttonCount);

const handleAlbums = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=a")
    .then((response) => response.json())
    .then((response) => {
      let data = response.data;

      for (i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        card.innerHTML = `<p>
        <li class="card-text text-muted"> ${data[i].album.title}</li>
      <p>
        `;
        albumList.appendChild(card);
      }
    })
    .catch((err) => console.error(err));
};
const handleCount = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=a")
    .then((response) => response.json())
    .then((response) => {
      let data = response.data;
      let count = 0;
      const listData = [...data];
      for (i = 0; i < data.length; i++) {
        if (listData.includes(data[i].album)) {
          console.log("Already exists");
        } else count = i;
      }
      console.log("There are", data.length, "albums!");
    })
    .catch((err) => console.error(err));
};

button.addEventListener("click", handleAlbums);
buttonCount.addEventListener("click", handleCount);

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth")
  .then((response) => response.json())
  .then((response) => {
    let data = response.data;
    let recently = document.querySelector(".recently");

    for (i = 0; i < 5; i++) {
      let card = document.createElement("div");
      card.innerHTML = `<div class="card p-3 m-2" style="width:170px;height:300px;">
      <img 
      
        src=${data[i].album.cover}
        class="card-img-top" alt="..." />
      <div class="card-body p-0">
        <h5 class="card-title">${data[i].artist.name}</h5>
        <p class="card-text text-muted"> ${data[i].album.title}</p>
      </div>
    </div>
        `;

      recently.appendChild(card);
    }
  })
  .catch((err) => console.error(err));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metalica")
  .then((response) => response.json())
  .then((response) => {
    let data = response.data;
    let shows = document.querySelector(".shows");

    for (i = 0; i < 5; i++) {
      let card = document.createElement("div");
      card.innerHTML = `<div class="card p-3 m-2" style="width:170px;height:300px;">
      <img 
      
        src=${data[i].album.cover}
        class="card-img-top" alt="..." />
      <div class="card-body p-0">
        <h5 class="card-title">${data[i].artist.name}</h5>
        <p class="card-text text-muted"> ${data[i].album.title}</p>
      </div>
    </div>
        `;
      shows.appendChild(card);
    }
  })
  .catch((err) => console.error(err));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
  .then((response) => response.json())
  .then((response) => {
    let data = response.data;
    let shows = document.querySelector(".jumbo");

    for (i = 0; i < 14; i++) {
      let card = document.createElement("div");
      card.innerHTML = `
    <div class="col d-inline-flex mt-3">
      <div class="image">
        <img src=${data[i].album.cover} alt="Metal Ballads"
          height="55px"  />
      </div>

      <div class="image-text" >
        <span>${data[i].artist.name}</span>
      </div>
    </div>
        `;
      shows.appendChild(card);
    }
  })
  .catch((err) => console.error(err));

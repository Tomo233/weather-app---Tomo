class DisplayWeather {
  _parentEl = document.querySelector(".container");
  getQuery() {
    return document.querySelector(".search").value;
  }

  renderMarkup(data) {
    let markup = `
    <div class="weather-box">
    <div class="weather-content">
      <input class="search" type="search" placeholder="Search" />
      <img class="main-img" src="images/${data.img}.png" alt="" />
      <p class="degrees">${Math.ceil(data.temp)}&#176;C</p>
      <p class="city">${data.name}</p>

      <div class="second-content">
        <div class="humidity flex">
          <img class="image-size" src="images/humidity.png" alt="" />
          <p class="w-p">${data.humidity} % vlaznosti</p>
        </div>
        <div class="wind flex">
          <img class="image-size" src="images/wind.png" alt="" />
          <p class="w-p">${data.wind} m/s brzina vjetra</p>
        </div>
      </div>
    </div>
  </div>
    `;
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new DisplayWeather();

class DisplayWeather {
  _search = document.querySelector(".search");
  _form = document.querySelectorAll("form");
  _weatherBox = document.querySelector(".weather-box");
  _weatherContent = document.querySelector(".weather-content");
  _searchBox = document.querySelector("#search-box");

  getQuery() {
    const query = document.querySelector(".search").value;
    this._search.value = "";
    return query;
  }

  renderMarkup(data) {
    this._weatherContent.innerHTML = "";
    let markup = `
      <div class="box">
      <img class="main-img" src="images/${data.img}.png" alt="" />
        <p class="degrees">${Math.round(data.temp)}&#176;C</p>
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
    `;
    this._weatherContent.insertAdjacentHTML("beforeend", markup);
  }

  addEvent(handler) {
    this._form.forEach((e) =>
      e.addEventListener("submit", (e) => {
        e.preventDefault();
        handler();
        this._weatherBox.classList.add("background");
      })
    );
  }

  renderError(err) {
    this._weatherContent.innerHTML = "";

    let markup = `
    <div class="box error-box">
    <p class="error-message">${err}</p>
    </div>
    `;
    this._weatherContent.insertAdjacentHTML("beforeend", markup);
    this._weatherContent.classList.add("height");
  }
}
export default new DisplayWeather();

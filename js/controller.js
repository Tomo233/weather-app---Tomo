import * as model from "./model.js";
import { API_KEY } from "./config.js";
import displayWeather from "./views/DisplayWeather.js";

const loadAndDisplayWeather = async function () {
  try {
    let query = displayWeather.getQuery();
    // 1) Load API Info
    if (!query) return;
    await model.loadAPI(query, API_KEY);
    // 2) Display Weather
    displayWeather.renderMarkup(model.state.data);
  } catch (err) {
    displayWeather.renderError(err);
  }
};

const init = function () {
  displayWeather.addEvent(loadAndDisplayWeather);
};

init();

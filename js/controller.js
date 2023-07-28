import * as model from "./model.js";
import { API_KEY } from "./config.js";
import displayWeather from "./views/DisplayWeather.js";

const loadAndDisplayWeather = async function () {
  let query = displayWeather.getQuery();
  // 1) Load API Info
  await model.loadAPI("nikaragva", API_KEY);
  console.log(model.state.data.img);
  // 2) Display Weather
  displayWeather.renderMarkup(model.state.data);
};

loadAndDisplayWeather();

export let state = {
  data: {},
};

export const loadAPI = async function (city, api_key) {
  try {
    const res = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=hr`
    );
    if (!res.ok)
      throw new Error(`${res.status} Grad koji ste pretrazili ne postoji ! `);
    const data = await res.json();
    console.log(data);
    state.data = {
      name: data.name,
      temp: data.main.temp,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      img: data.weather[0].main,
    };
  } catch (err) {
    throw new Error(err);
  }
};

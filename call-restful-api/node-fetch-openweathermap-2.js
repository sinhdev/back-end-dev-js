var fetch = require("node-fetch");

const params = new URLSearchParams();
params.set('q', 'hanoi');
params.append('appid', '{your-appid}');
var url = `https://api.openweathermap.org/data/2.5/weather?${params}`
fetch(url)
  .then(response => {
    return response.json();
  })
  .then((data) => { console.log(data) })
  .catch(err => { console.log(err); });
var fetch = require("node-fetch");
const querystring = require("querystring");

(async () => {
  // const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=32869e3e8f5554bbf48d05172e7085d2');
  // const data = await response.json();
  // console.log(data);

  // const response = await fetch('https://api.openweathermap.org/data/2.5/weather?' + 
  //   querystring.stringify({q:"hanoi", appid:"32869e3e8f5554bbf48d05172e7085d2"}));
  // const data = await response.json();
  // console.log(data);

  const params = new URLSearchParams();
  params.set('q', 'hanoi');
  params.append('appid', '32869e3e8f5554bbf48d05172e7085d2');
  var url = `https://api.openweathermap.org/data/2.5/weather?${params}`
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
})()
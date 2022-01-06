const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid={your-app-id}')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
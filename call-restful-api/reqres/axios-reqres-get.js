const axios = require('axios');

var url = `https://reqres.in/api/users`
// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
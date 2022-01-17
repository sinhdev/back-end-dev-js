const axios = require('axios');

var url = `https://reqres.in/api/users`
const params = new URLSearchParams();
params.set("name", "sinhnx");
params.append('job', 'student');

axios.post(url, params)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
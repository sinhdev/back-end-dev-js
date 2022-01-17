var fetch = require("node-fetch");

var url = `https://reqres.in/api/users`
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => { console.log(data) })
  .catch(err => { console.log(err); });
var fetch = require("node-fetch");

const params = new URLSearchParams();
params.set("name", "sinhnx");
params.append('job', 'student');
var url = `https://reqres.in/api/users`
fetch(url, {
  method: 'post',
  body: params
})
  .then(response => {
    return response.json();
  })
  .then(data => { console.log(data) })
  .catch(err => { console.log(err); });
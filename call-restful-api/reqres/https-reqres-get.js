const https = require('https')
const options = {
  hostname: 'reqres.in',
  port: 443,
  path: '/api/users',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  var bodyChunks = [];
  res.on('data', d => {
    bodyChunks.push(d);
  }).on('end', function () {
    var body = Buffer.concat(bodyChunks);
    console.log('response data: ' + body);
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

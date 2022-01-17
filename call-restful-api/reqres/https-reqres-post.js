const https = require('https')

const data = new TextEncoder().encode(
  JSON.stringify({ name: "sinhnx", job: "student" })
)
const options = {
  hostname: 'reqres.in',
  port: 443,
  path: '/api/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  var bodyChunks = [];
  res.on('data', d => {
    bodyChunks.push(d);
  }).on('end', function () {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
  })
})
req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

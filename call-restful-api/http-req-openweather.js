var http = require('http');
var options = {
  host: 'api.openweathermap.org',
  port: 80,
  path: '/data/2.5/weather?q=hanoi&appid=32869e3e8f5554bbf48d05172e7085d2'
};

var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
  })
});
req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
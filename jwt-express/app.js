var express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// get config vars
dotenv.config();
// access config var
process.env.TOKEN_SECRET;

var app = express();

// create application/json parser
var jsonParser = bodyParser.json()
app.use(jsonParser);
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
app.post('/api/createNewUser', (req, res) => {
  // ...
  const token = generateAccessToken({ username: req.body.username });
  res.json(token);
  // ...
});
app.get('/api/userOrders', authenticateToken, (req, res) => {
  // executes after authenticateToken
  // ...
  res.json({message: "authorization..."})
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = app;
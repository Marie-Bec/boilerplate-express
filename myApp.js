let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/name", function(req, res) {
  var fullName = req.body.first + " " + req.body.last;
  res.json
    ({ name: fullName });
});

// app.get("/:word/echo", (req, res) => {
//   req.word = req.params.word;
//   res.send({ echo: req.word });
// });

// app.get("/now", (req, res, next) => {
//   req.time = new Date().toString();
//   next();
// }, (req, res) => {
//   res.send({ time: req.time });
// });

// app.use(function(req, res, next) {
//   console.log(req.method + " " + req.path + " - " + req.ip);
//   next();
// });

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.use("/public", express.static(__dirname + '/public'));

// app.get('/json', (req, res) => {
//   if (process.env['MESSAGE_STYLE'] == 'uppercase') {
//     res.json({ 'message': 'HELLO JSON' })
//   } else {
//     res.json({ 'message': 'Hello json' })
//   }
// });



















module.exports = app;

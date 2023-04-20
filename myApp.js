let express = require('express');
let app = express();

// SERVE STATIC ASSETS (SEND THE CSS TO THE INDEX)
app.use("/public", express.static(__dirname + '/public'));
// SEND THE INDEX TO BE DISPLAYED
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
// Serve JSON on a Specific Route

// app.get('/json', (req, res) => {
//   res.json({
//       message: "Hello json".toUpperCase();
//     });
// });






// app.get('/json', (req, res) => { res.json(
//   if (process.env.MESSAGE_STYLE === 'uppercase'){
//   return {
//         message: "Hello json".toUpperCase();
//       }
//   } else {
//     return {
//         message: "Hello json";
//       })
//   }
// }




























module.exports = app;

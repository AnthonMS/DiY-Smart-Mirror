const express = require('express');
const app = new express();
const port = 8080;

// app.get('/', (req, res) => res.send("Hello World!"));
app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/front-end.html');
});

// Serve the face-detection JSON file located in plugins/face-detection/
// This is so the controller can fetch this file, and read which user to display.
// This JSON file will be updated by a python script that checks for faces in the background
app.get('/face-detection', (request, response) => {
  response.sendFile(__dirname + '/public/plugins/face-detection/test.json');
});

// app.post('/', function(request, response) {
//   console.log('POST /')
//   console.dir(request.url)
//   response.writeHead(200, {'Content-Type': 'text/html'})
//   response.end('thanks')
// });

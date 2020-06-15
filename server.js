const express = require('express');
const app = new express();
const port = 8080;

// app.get('/', (req, res) => res.send("Hello World!"));
app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/front-end.html');
});

app.get('/keyboard', (request, response) => {
  response.sendFile(__dirname + '/public/plugins/virtual_keyboard/container.html');
});
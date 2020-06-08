# Node.js notes

create project folder
Run command "npm init"
create app.js / server.js or whatever
install nodemon "npm install nodemon"
install express "npm install express"
package.json should look something like this now:
```
{
  "name": "nodejs-test",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "author": "Anthon M. Steiness",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.4"
  }
}
```
 
Paste this into server.js or whatever you called it:
```
const express = require('express');
const app = new express();
const port = 8000;
 
// app.get('/', (req, res) => res.send("Hello World!"));
app.use(express.static(__dirname + '/public'));
 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
 
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/demo-file.html');
});
```

Make folder called public in the project directory.
Make the demo-file.html and put it in the public folder
Make any test html code in the .html file.
If you run "npm start" it should start the server and host the .html file. And this is how you host a webpage using node.js and express.
You can now make .js and .css files and import them in the html code.
 
HTML example:
```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="/styling.css">
    <script type="text/javascript" src="/script.js"></script>
</head>
    <body>
```

# DiY Smart Touch Mirror (WIP)

*FYI: This project will be using a raspberry pi with an IR frame, something like this: https://www.amazon.co.uk/Deyowo-Infrared-Overlay-Interactive-Whiteboard/dp/B07XTM964X 

This is a proof af concept, I have not tested any of this with the IR frame. But since the IR frame plugged into a pi, should work like a regular touch screen.
I will not be buying a the components for at least a couple of months. And from next month, this project will be put on pause for, I don't know how long. This is because I am moving into a new house, and there is a lot of renovations to be done, before I even start making it smart. So theres that, hopefully I will be able to finish this in the next 6 months or so. I will of course update this readme when I have started working on it again. So as long as this text is here, I am not working on it.*


This is the repo for my DiY Smart Mirror with touch functionality. The containers can be dragged around on screen and scaled bigger or smaller. It has buttons to hide/show desired containers. 

It shows the time and date in the upper right corner and underneath it shows weather data.
For weather data to show correctly, uncomment function call in script.js "getWeatherLatLon();" and replace the lat/lon with lat/lon for your location.
These two fields can also be toggled on/off with the white buttons/bars next to the text. 

All the containers are located in the folder plugins/ and under specific plugin folders.

The youtube container will work, when an API key is put in the variable 'key' in the function 'searchYoutube()'. When this has been enabled, you will be able to search for videos with the virtual keyboard. It will write in the text input field, after it has been clicked once. After that, every click on the keyboard will be translated and put in the input field. It will only search for videos by clicking on the enter key on the virtual keyboard.

The virtual keyboard has one specific size, this was to make styling the individual keys a lot easier. It is still possible to drag the keyboard around on the screen. 

The containers will stack in the order they where clicked last. So if you click containers in the order: Youtube, Keyboard, Hass.io, the top container will be Hass.io, underneath that will be Keyboard and on the bottom will be the youtube container.


### Plugins so far

- Virtual Keyboard
- Youtube
- Home Assistant (WIP)
- Face Detection (WIP)

#### Virtual Keyboard

This plugin is a container with, as the name suggests, a virtual keyboard. Right now the only thing that uses this keyboard is the YouTube plugin.
You need to click on an input field before starting to type with the keyboard. This is so the keyboard knows which input field you want to write to.

#### YouTube

This plugin is a container that starts with only an input field. You can use the virtual keyboard with this plugin. After opening the container and selection the input field one time, you can start typing with the virtual keyboard.
The only way to search for videos is by clicking on the keyboard enter key.
It will take the search term from the input field and search youtube videos with that, it will then take the top 10 results and show in a list in the container underneath the input field. When clicking one of these items from the list, it will hide the list and show the video. To go back to the list, simply click the back button to the right of the input field.

#### Home Assistant

This plugin is still a work in process. Right now it supports light sliders. Simply take one of the premade slider divs, change the title to what you want and change the id of the input range slider. This id needs to be the Home Assistant Entity ID. Example id="light.living_room".
When changing the slider it will call the function 'onInputChange()' with the value and sliderId. It will take the sliderId and put in the payload and take the value and multipli with 2.55 and put in payload as well. And then it will call function to post this payload to the haUrl you have specified in the variable at the top.

Right now the haUrl is a local url with full "api/services/light/turn_on". This will be changed later, so the haUrl should only be "http://<ha-ip>:8123/" and then the URI should be set in the onInputChange function.
Because it should only call that service when changing light brightness. 
When I add switches and toggle buttons it should add new URI on those button clicks.

*Remember to set api: in root of ha configuration and set cors_allowed_origins: under http in configuration. Take a look here for more information: https://www.home-assistant.io/integrations/http/*

#### Face Detection

This will read the file in the plugins folder called 'test.txt'. If it says "guest" it will show the guest.gif image. If it does not contain the text 'guest', it will take the name it contains and set the image to be 'name.jpg'. *Remember to name the images all lowercase and as a jpg format. And also to add these images to the folder located in the face-detection directory.*

This is very much a work in progress, but I can't really get any further with it, until I buy another raspberry pi with camera module. Because I need to write the Python script to detect the faces. When this script detects a face, it should write the name in the test.txt file located in plugin directory.


## Node.js notes

This is the new Repository for the DiY Smart Mirror

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

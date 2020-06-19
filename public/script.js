var lastClickedInputField = null;
var weatherAPI = '';
var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

function init() {
    includeHTML();
    // ##### Import Scripts ##### //
    setTimeout(function() { importScripts(); }, 500); // Wait .5 Sec to import scripts

    // ##### Start Clock ##### //
    startTime();

    // ##### Start Weather ##### //
    //getWeatherLatLon('55.194364', '11.744197');

    createEventListeners();
}

function createEventListeners() {
  var btns = document.getElementsByClassName('btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mousedown', (event) => {
      if (event.target.className === 'btn clock') {
        var txts = document.getElementsByClassName('clock_txt');
        for (var j = 0; j < txts.length; j++) {
          toggleDiv(txts[j]);
        }
      }
      else if (event.target.className === 'btn weather') {
        var txts = document.getElementsByClassName('weather_txt');
        for (var j = 0; j < txts.length; j++) {
          toggleDiv(txts[j]);
        }
      }
    });
  }
}

function toggleDiv(div) {
  if (div.style.display === 'none') {
    div.style.display = 'block';
  }
  else {
    div.style.display = 'none';
  }
}

function startTime() {
  var today = new Date();
  var day = checkNumber(today.getDate());
  var month = checkNumber(today.getMonth() + 1);
  var year = today.getFullYear();
  document.getElementsByClassName('date')[0].innerHTML = day + "/" + month + "-" + year;

  var h = checkNumber(today.getHours());
  var m = checkNumber(today.getMinutes());
  var s = checkNumber(today.getSeconds());
  document.getElementsByClassName('time')[0].innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkNumber(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  if (i === "0") {i = "00"};
  return i;
}



async function getWeatherLatLon(lat, lon) {
  console.log('Get Weather');
  var uri = '?lat=' + lat + '&lon=' + lon + '&lang=da' + '&appid=' + weatherAPI;
  const response = await fetch(weatherUrl + uri);
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
  setWeather(myJson.weather[0].description, myJson.main.temp);
  setTimeout(function() { getWeatherLatLon('55.194364', '11.744197'); }, 600000); // Wait 10 minuttes and get weather again
}

function setWeather(desc, temp) {
  desc = desc[0].toUpperCase() + desc.slice(1); // make first letter Uppercase
  temp = temp - 273.15; // Convert Kelvin to Celsius
  temp = Math.round(temp); // This will round to int without decimals
  //temp = temp.toFixed(2); // This will round decimals down to 2
  document.getElementsByClassName('weather_txt title')[0].innerHTML = desc;
  document.getElementsByClassName('weather_txt temp')[0].innerHTML = 'Temp: ' + temp + '°';
}





function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }


function importScripts() {
    // Import Google Translate Script
    var import_translate = document.createElement('script');
    import_translate.type = 'text/javascript';
    import_translate.src = '/scripts/translate_script.js';
    document.head.appendChild(import_translate);

    // Import Container Manager Script
    var import_container_manager = document.createElement('script');
    import_container_manager.type = 'text/javascript';
    import_container_manager.src = '/scripts/container_manager_script.js';
    document.head.appendChild(import_container_manager);

    // Import Menu Manager Script
    var import_menu_manager = document.createElement('script');
    import_menu_manager.type = 'text/javascript';
    import_menu_manager.src = '/scripts/menu_manager_script.js';
    document.head.appendChild(import_menu_manager);

    // Import Virtual Keyboard Script
    var virtual_keyboard_script = document.createElement('script');
    virtual_keyboard_script.type = 'text/javascript';
    virtual_keyboard_script.src = '/plugins/virtual_keyboard/script.js';
    document.head.appendChild(virtual_keyboard_script);

    // Import Youtube Script
    var youtube_script = document.createElement('script');
    youtube_script.type = 'text/javascript';
    youtube_script.src = '/plugins/youtube/script.js';
    document.head.appendChild(youtube_script);

    // Import Home Assistant Controller
    var ha_controller = document.createElement('script');
    ha_controller.type = 'text/javascript';
    ha_controller.src = '/plugins/home-assistant/controller.js';
    document.head.appendChild(ha_controller);

    // Import Face-Detection Controller
    var fd_controller = document.createElement('script');
    fd_controller.type = 'text/javascript';
    fd_controller.src = '/plugins/face-detection/controller.js';
    document.head.appendChild(fd_controller);

    // Import Compliment Controller
    var compliment_controller = document.createElement('script');
    compliment_controller.type = 'text/javascript';
    compliment_controller.src = '/plugins/compliments/controller.js';
    document.head.appendChild(compliment_controller);
}
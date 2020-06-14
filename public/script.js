var lastClickedInputField = null;

function init() {
    includeHTML();
    // ##### Import Scripts ##### //
    setTimeout(function() { importScripts(); }, 500); // Wait .5 Sec to import scripts
    startTime();
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
  // h = checkNumber(h);
  // m = checkNumber(m);
  // s = checkNumber(s);
  document.getElementsByClassName('time')[0].innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkNumber(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  if (i === "0") {i = "00"};
  return i;
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
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

    // Import Spotify Script
    var spotify_script = document.createElement('script');
    spotify_script.type = 'text/javascript';
    spotify_script.src = '/plugins/spotify/script.js';
    document.head.appendChild(spotify_script);
  
    // // Import Gmail Script
    // var gmail_script = document.createElement('script');
    // gmail_script.type = 'text/javascript';
    // gmail_script.src = '/plugins/gmail/script.js';
    // document.head.appendChild(gmail_script);
}
console.log("Import - Menu Manager");

var mainContainer = document.getElementsByClassName('main-container')[0];
//document.getElementById('youtube_container');
//document.getElementById('spotify_container');

var elements = document.getElementsByClassName('menu_button');
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener('mousedown', (event) => {
        handleButtonClick(event.target);
    });
}

function handleButtonClick(button) {
    //console.log(button.parentNode);
    if (button.textContent == "Youtube") {
        youtubeContainer = document.getElementById('youtube_container');
        toggleContainer(youtubeContainer);
        if (youtubeContainer.style.display == 'none') {
            document.getElementsByClassName('video_player_div')[0].innerHTML = "";
        }
        else {
            document.getElementsByClassName('video_list')[0].style.display = "block";
        }
    }
    else if (button.textContent == "Weather") {
        weatherContainer = document.getElementById('weather_container');
        toggleContainer(weatherContainer);
        if (weatherContainer.style.display == 'none') {
            // Logic here
        }
        else {
            // Logic here
        }
    }
    else if (button.textContent == "Keyboard") {
        keyboardContainer = document.getElementById('keyboard_container');
        toggleContainer(keyboardContainer);
        if (keyboardContainer.style.display == 'none') {
            // Logic here
        }
        else {
            // Logic here
        }
    }
    else if (button.textContent == "Hass.io") {
        haContainer = document.getElementById('ha_container');
        toggleContainer(haContainer);
        if (haContainer.style.display == 'none') {
            // Logic here
        }
        else {
            // Logic here
        }
    }
}


function toggleContainer(container) {
    if (container.style.display === 'none') {
        container.style.display = 'block';
    }
    else {
        container.style.display = 'none';
    }
}
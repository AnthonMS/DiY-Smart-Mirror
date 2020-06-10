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
            button.parentNode.style.backgroundColor = "black";
            button.style.color = "white";
        }
        else {
            button.parentNode.style.backgroundColor = "white";
            button.style.color = "black";
        }
    }
    else if (button.textContent == "Spotify") {
        spotifyContainer = document.getElementById('spotify_container');
        toggleContainer(spotifyContainer);
        if (spotifyContainer.style.display == 'none') {
            button.parentNode.style.backgroundColor = "black";
            button.style.color = "white";
        }
        else {
            button.parentNode.style.backgroundColor = "white";
            button.style.color = "black";
        }
    }
    else if (button.textContent == "Keyboard") {
        keyboardContainer = document.getElementById('keyboard_container');
        toggleContainer(keyboardContainer);
        if (keyboardContainer.style.display == 'none') {
            button.parentNode.style.backgroundColor = "black";
            button.style.color = "white";
        }
        else {
            button.parentNode.style.backgroundColor = "white";
            button.style.color = "black";
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
console.log("Menu Manager Imported");


var mainContainer = null;

mainContainer = document.getElementsByClassName('main-container')[0];
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
    //console.log(button.textContent);
    if (button.textContent == "Youtube") {
        toggleContainer(document.getElementById('youtube_container'));
    }
    else if (button.textContent == "Spotify") {
        toggleContainer(document.getElementById('spotify_container'));
    }
}


function toggleContainer(container)
{
    if (container.style.display === 'none')
    {
        container.style.display = 'block';
    }
    else 
    {
        container.style.display = 'none';
    }
}
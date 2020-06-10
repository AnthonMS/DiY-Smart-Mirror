console.log("Import - Keyboard Manager");

var mainContainer = document.getElementsByClassName('main-container')[0];
var keyboardContainer = document.getElementById('keyboard_container');
var containers = document.getElementsByClassName('container');

var lastClickedInputField = null;
var caps = false;
var shift = false;

// function youtubeInit() {
//     gapi.client.setApiKey("AIzaSyD89LUjdU1AEtSgD3dZWhTvNvz94rvwjUM");
//     gapi.client.load('youtube', 'v3', () => {
//         console.log('Youtube api ready!');
//     });
// }

document.getElementById('youtube_search').addEventListener('mousedown', (event) => {
    lastClickedInputField = event.target;
});


var btn_keys = document.getElementsByClassName('btn_key');
//console.log("Found " + btn_keys.length + " btn_keys");
for (var i = 0; i < btn_keys.length; i++)
{
    btn_keys[i].addEventListener('mousedown', (event) => {
        //handleKeyClick(event.target);
        if (lastClickedInputField !== null) {
            handleKeyClick(event.target);
        }
    });
}

function handleKeyClick(key) {
    // If key pressed was a character
    if (key.className.includes('reg_key')) {
        if (caps || shift) {
            lastClickedInputField.value = lastClickedInputField.value + key.innerHTML;
        } else {
            lastClickedInputField.value = lastClickedInputField.value + key.innerHTML.toLowerCase();
        }
        shift = false;
    }
    // If key was delete
    else if (key.className.includes('del_key')) {
        lastClickedInputField.value = lastClickedInputField.value.substring(0, lastClickedInputField.value.length - 1);
    }
    // If key was space
    else if (key.className.includes('space_key')) {
        lastClickedInputField.value = lastClickedInputField.value + ' ';
    }
    // If key caps space
    else if (key.className.includes('cap_key')) {
        if (caps === false) {
            caps = true;
        } else {
            caps = false;
        }
    }
    // If key was shift
    else if (key.className.includes('shift_key') || key.className.includes('shift_long_key')) {
        shift = true;
    }
    // If key was enter
    else if (key.className.includes('ent_key')) {
        if (lastClickedInputField.value !== "") {
            searchYoutube();
        }
    }
    else {
        console.log(key.className);
    }
}



async function searchYoutube() {
    console.log("Calling async func");
    const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=&type=video&q=' + encodeURIComponent(lastClickedInputField.value));
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson.items)
}





// Styling for enter key
var btnEnterTop = document.getElementById('key_ent_top');
var btnEnterBottom = document.getElementById('key_ent_bottom');

btnEnterTop.addEventListener('mouseenter', (event) => {
    mouseEnter();
});
btnEnterTop.addEventListener('mouseleave', (event) => {
    mouseLeave();
});
btnEnterBottom.addEventListener('mouseenter', (event) => {
    mouseEnter();
});
btnEnterBottom.addEventListener('mouseleave', (event) => {
    mouseLeave();
});

function mouseEnter() {
    btnEnterTop.style.backgroundColor = "white";
    btnEnterTop.style.color = "black";
    btnEnterBottom.style.backgroundColor = "white";
    btnEnterBottom.style.color = "black";
}
function mouseLeave() {
    btnEnterTop.style.backgroundColor = "black";
    btnEnterTop.style.color = "white";
    btnEnterBottom.style.backgroundColor = "black";
    btnEnterBottom.style.color = "white";
}
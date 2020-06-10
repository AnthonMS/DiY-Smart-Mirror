console.log("Import - Keyboard Manager");

var mainContainer = document.getElementsByClassName('main-container')[0];
var keyboardContainer = document.getElementById('keyboard_container');
var containers = document.getElementsByClassName('container');


var btn_keys = document.getElementsByClassName('btn_key');
//console.log("Found " + btn_keys.length + " btn_keys");
for (var i = 0; i < btn_keys.length; i++)
{
    btn_keys[i].addEventListener('mousedown', (event) => {
        handleKeyClick(event);
    });
}

function handleKeyClick(key) {
    //console.log("Key was clicked");
    //console.log(key);
    // for (var i = 0; i < containers.length; i++)
    // {
    //     containers[i].style.zIndex = "0";
    // }
    //keyboardContainer.style.zIndex = "1";
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
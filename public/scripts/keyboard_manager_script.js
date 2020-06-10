console.log("Import - Keyboard Manager");

var mainContainer = null;
var btnEnterTop = null;
var btnEnterBottom = null;

mainContainer = document.getElementsByClassName('main-container')[0];
btnEnterTop = document.getElementById('key_ent_top');
btnEnterBottom = document.getElementById('key_ent_bottom');

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
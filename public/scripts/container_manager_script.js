console.log("Import - Container Manager");

var mainContainer = null;

var drag = false;
var dragPos = null;
var dragElement = null;

var scale = false;
var scalePos = null;
var scaleElement = null;

mainContainer = document.getElementsByClassName('main-container')[0];
document.getElementById('youtube_container').style.backgroundColor = "blue";
document.getElementById('spotify_container').style.backgroundColor = "green";
document.getElementById('youtube_container').style.display = "none";
document.getElementById('spotify_container').style.display = "none";
document.getElementById('keyboard_container').style.width = "690px";
document.getElementById('keyboard_container').style.height = "220px";

// #### Event Listeners for Document #### //
// Add Event Listeners to the document to handle dragging function.
document.addEventListener('mousedown', (event) => {
    if (dragElement != null) {
        dragElement.style.zIndex = "1";
    }
});
document.addEventListener('mouseup', (event) => {
    if (dragElement != null) {
        dragElement.style.zIndex = "1";
    }
    drag = false;
    dragPos = null;
    dragElement = null;

    scale = false;
    scalePos = null;
    scaleElement = null;
});
document.addEventListener('mousemove', (event) => {
    //console.log('PosX: ' + event.clientX + ' PosY: ' + event.clientY);
    if (drag && dragPos !== null && dragElement !== null) {
        dragElement.style.zIndex = "1";
        var posX = event.clientX - getOffset(mainContainer).left;
        var posY = event.clientY- getOffset(mainContainer).top;
        dragPos = { y: posY, x: posX };
        
        moveElementToPos();
    }

    if (scale && scalePos !== null && scaleElement !== null) {
        scaleElement.style.zIndex = "1";
        // Create logic to scale element
        var posX = event.clientX - getOffset(mainContainer).left;
        var posY = event.clientY- getOffset(mainContainer).top;
        scalePos = { y: posY, x: posX };
        scaleElementToSize();
    }
});




// #### Event Listeners for Containers and Child Elements #### //
// Add Event Listerners to all containers to handle which is in front
var elements = document.getElementsByClassName('container');
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener('mousedown', (event) => {
        var containers = document.getElementsByClassName('container');
        for (var i = 0; i < containers.length; i++)
        {
            containers[i].style.zIndex = "0";
        }

        event.target.style.zIndex = "1";
    });
}

// Add Event Listeners to all Drag buttons on containers to set dragPos and dragElement
elements = document.getElementsByClassName('btn_drag');
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener('mousedown', (event) => {
        drag = true;

        var relX = event.clientX - getOffset(mainContainer).left;
        var relY = event.clientY - getOffset(mainContainer).top;
        dragPos = { y: relY, x: relX };
        dragElement = event.target.parentNode;
    });
}

// Add Event Listeners to all Close buttons on containers
elements = document.getElementsByClassName('btn_close');
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener('mousedown', (event) => {
        console.log(event.target.parentNode.id);
        document.getElementById(event.target.parentNode.id).style.display = 'none';
    });
}

// Add Event Listeners to all Scale buttons on containers
elements = document.getElementsByClassName('btn_scale');
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener('mousedown', (event) => {
        scale = true;

        var relX = event.clientX - getOffset(mainContainer).left;
        var relY = event.clientY - getOffset(mainContainer).top;
        scalePos = { y: relY, x: relX };
        scaleElement = event.target.parentNode;
    });
}







// Move dragElement to dragPos when function is called
function moveElementToPos(){
    var tmpPosX = dragPos.x - 10;
    var tmpPosY = dragPos.y - 10;

    dragElement.style.left = dragPos.x + 'px';
    dragElement.style.top = dragPos.y + 'px';
}

function scaleElementToSize() {
    var tmpPosX = scalePos.x - 10;
    var tmpPosY = scalePos.y - 10;
    
    var newWidth = scalePos.x - scaleElement.offsetLeft;
    var newHeight = scalePos.y - scaleElement.offsetTop;
    scaleElement.style.width = newWidth + 'px';
    scaleElement.style.height = newHeight + 'px';
}

// Get offset of element to calculate where to put element when dragging
function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
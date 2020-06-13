console.log("Import - Container Manager");

var mainContainer = document.getElementsByClassName('main-container')[0];
var containers = document.getElementsByClassName('container');
var clickedContainerList = [];

for (var i = 0; i < containers.length; i++)
{
    clickedContainerList.push(containers[i]);
}

var drag = false;
var dragPos = null;
var dragElement = null;

var scale = false;
var scalePos = null;
var scaleElement = null;

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
    // Move Container to Position
    if (drag && dragPos !== null && dragElement !== null) {
        var posX = event.clientX - getOffset(mainContainer).left;
        var posY = event.clientY- getOffset(mainContainer).top;
        dragPos = { y: posY, x: posX };
        moveElementToPos();
    }

    // Scale Container to Size
    if (scale && scalePos !== null && scaleElement !== null) {
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
        // Go through all containers and make zIndex 0
        stackContainers(event);
    });
}

// Add Event Listeners to all Drag buttons on containers to set dragPos and dragElement
elements = document.getElementsByClassName('btn_drag');
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener('mousedown', (event) => {
        //stackContainers(event);
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
        document.getElementById(event.target.parentNode.id).style.display = 'none';
        document.getElementsByClassName('video_player_div')[0].innerHTML = "";
    });
}

// Add Event Listeners to all Scale buttons on containers
elements = document.getElementsByClassName('btn_scale');
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener('mousedown', (event) => {
        //stackContainers(event);
        scale = true;

        var relX = event.clientX - getOffset(mainContainer).left;
        var relY = event.clientY - getOffset(mainContainer).top;
        scalePos = { y: relY, x: relX };
        scaleElement = event.target.parentNode;
    });
}



function stackContainers(clickedContainer) {
    var container = null;
    // check if clicked element has class container
    // if not find closest element that does
    // And make the container that was closest to clicked element zIndex 1
    if (clickedContainer.target.className.includes('container')){
        container = clickedContainer.target;
    }
    else {
        container = clickedContainer.target.closest('.container');
    }

    // Go through clicked container list and remove clicked container from position
    // and add it to the end of the list
    for (var i = 0; i < clickedContainerList.length; i++) 
    {
        if (clickedContainerList[i].id == container.id) {
            clickedContainerList.splice(i, 1);
            clickedContainerList.push(container);
        }
    }
    
    // Go through clicked containers and add zIndex value corrosponding to position in list
    for (var i = 0; i < clickedContainerList.length; i++) 
    {
        clickedContainerList[i].style.zIndex = i;
    }
}



// Move dragElement to dragPos when function is called
function moveElementToPos(){
    var tmpPosX = dragPos.x + 7;
    var tmpPosY = dragPos.y + 7;

    dragElement.style.left = tmpPosX + 'px';
    dragElement.style.top = tmpPosY + 'px';
}

// Scale scaleElement to scalePos when function is called
function scaleElementToSize() {
    var tmpPosX = scalePos.x - 5;
    var tmpPosY = scalePos.y - 5;
    
    var newWidth = tmpPosX - scaleElement.offsetLeft;
    var newHeight = tmpPosY - scaleElement.offsetTop;
    scaleElement.style.width = newWidth + 'px';
    scaleElement.style.height = newHeight + 'px';
}

// Get offset of element to calculate where to put element when dragging and scaling
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
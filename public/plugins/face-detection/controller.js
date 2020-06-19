console.log('PLUGIN: Face-Detection');

var fdContainer = document.getElementById('fd_container');
var faceImage = document.getElementsByClassName('face_image')[0];
var faceText = document.getElementsByClassName('face_text')[0];

// fdContainer.style.display = "none";
// fdContainer.style.width = "140px";
// fdContainer.style.height = "140px";
// fdContainer.style.left = '500px';
// fdContainer.style.top = '20px';

var user = 'guest';
getUser();


function getUser() {
    // Fetch face-detection txt
    fetch('http://localhost:8080/face-detection')
    .then(response => response.text())
    .then(text => setUser(text));

    
    setTimeout(function() { getUser(); }, 1000);
}

function setUser(value) {
    value = value.toLowerCase();
    if (user !== value) {
        if (value === 'none') {
            // Hide the image container
            console.log('Hide image container');
            faceText.innerHTML = '';
            faceImage.src = 'plugins/face-detection/images/guest.gif';
        }
        else if (value === 'guest') {
            // Set image as guest image
            faceImage.src = 'plugins/face-detection/images/wifi_qrcode.png';
            faceText.innerHTML = 'Scan for WiFi';
            fdContainer.style.display = "block";
        }
        else {
            // Set image as Anthon
            faceImage.src = 'plugins/face-detection/images/' + value + '.jpg';
            faceText.innerHTML = 'Godt at se dig, Anthon!';
            fdContainer.style.display = "block";
        }
    }

    user = value;
    //console.log(user);
}
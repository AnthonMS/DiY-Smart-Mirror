console.log('PLUGIN: Home Assistant');

var haContainer = document.getElementById('ha_container');

haContainer.style.display = "none";
haContainer.style.width = "200px";
haContainer.style.height = "350px";
haContainer.style.left = '720px';
haContainer.style.top = '120px';

var apiToken = '';
var haUrl = 'http://192.168.0.10:8123/api/services/light/turn_on';

function onInputChange(value, sliderId) {
    // console.log(sliderId + ': ' + value);
    var dimmer = document.getElementById(sliderId);
    var lightPercentage = dimmer.parentElement.parentElement.getElementsByClassName('light_percentage')[0];
    lightPercentage.innerHTML = value + '%';


    var payload = {
        'entity_id': sliderId,
        'brightness': value * 2.55
    };
    postData(haUrl, payload).then(data => {});
    
}




// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Authorization": "Bearer " + apiToken,
            'Content-Type': 'application/json',
            'origin': 'http://localhost:8080/'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

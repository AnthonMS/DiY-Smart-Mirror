console.log('PLUGIN: Home Assistant');

var haContainer = document.getElementById('ha_container');

haContainer.style.display = "block";
haContainer.style.width = "200px";
haContainer.style.height = "350px";
haContainer.style.left = '610px';
haContainer.style.top = '45px';

var apiToken = '';
var haUrl = 'http://192.168.0.10:8123/api';


getDimmerStates();

function onInputChange(value, sliderId) {
    // console.log(sliderId + ': ' + value);
    var dimmer = document.getElementById(sliderId);
    var lightPercentage = dimmer.parentElement.parentElement.getElementsByClassName('light_percentage')[0];
    lightPercentage.innerHTML = value + '%';


    var payload = {
        'entity_id': sliderId,
        'brightness': value * 2.54
    };
    postData(haUrl, '/services/light/turn_on', payload).then(data => {});
    
}

function getDimmerState() {
    var dimmers = document.getElementsByClassName('light_dimmer');
    for (var i = 0; i < dimmers.length; i++) {
        
        getState(haUrl, '/states/', dimmers[i].id)
            .then(json => {
                setDimmerState(json);
            });
    }

}

function setDimmerState(data) {
    var dimmer = document.getElementById(data.entity_id);
    var lightTitle = dimmer.parentElement.parentElement.getElementsByClassName('light_title')[0];
    var lightPercentage = dimmer.parentElement.parentElement.getElementsByClassName('light_percentage')[0];
    lightTitle.innerHTML = data.attributes.friendly_name + ': ';
    console.log(data.entity_id);
    if (data.attributes.brightness === undefined) {
        console.log('Light is off');
        dimmer.value = '0';
        lightPercentage.innerHTML = '0%';
    }
    else {
        var brightness = Math.round(data.attributes.brightness / 2.54);
        console.log(brightness);
        dimmer.value = brightness;
        lightPercentage.innerHTML = brightness + '%';
    }
    
}


async function getState(url, uri, entity) {
    // Default options are marked with *
    const response = await fetch(url + uri + entity, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Authorization": "Bearer " + apiToken,
            'Content-Type': 'application/json',
            'origin': 'http://localhost:8080/'
        }
    });
    const myJson = await response.json();
    return myJson; // parses JSON response into native JavaScript objects

}


// Example POST method implementation:
async function postData(url = '', uri, data = {}) {
    // Default options are marked with *
    const response = await fetch(url + uri, {
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

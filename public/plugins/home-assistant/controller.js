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

//colorPicker.addEventListener("change", watchColorPicker, false);
var colorPickers = document.getElementsByClassName('color_picker');
for (var i = 0; i < colorPickers.length; i++) {
    colorPickers[i].addEventListener('input', (event) => {
        var rgbValue = hexToRgb(event.target.value);
        var lightBox = event.target.parentElement.parentElement;
        var entityId = lightBox.getElementsByClassName('light_dimmer')[0].id;

        var payload = {
            'entity_id': entityId,
            'rgb_color': [rgbValue.r, rgbValue.g, rgbValue.b]
        };
        postData(haUrl, '/services/light/turn_on', payload)
            .then(data => {});

    });
    // colorPickers[i].addEventListener('change', (event) => {
    //     console.log('change');
    //     console.log(event);
    // });
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Called when sliders change value
function onInputChange(value, sliderId) {
    var dimmer = document.getElementById(sliderId);
    var lightPercentage = dimmer.parentElement.parentElement.getElementsByClassName('light_percentage')[0];
    lightPercentage.innerHTML = value + '%';


    var payload = {
        'entity_id': sliderId,
        'brightness': value * 2.54
    };
    postData(haUrl, '/services/light/turn_on', payload)
        .then(data => {
            // Check if light entity has rgb support
            // Show/Hide color picker if it does/'nt
            if (data[0].attributes.rgb_color) {
                toggleColorOption(dimmer.parentElement.parentElement, true);
            }
            else {
                toggleColorOption(dimmer.parentElement.parentElement, false);
            }
        });
}

// Called once when controller is loaded
// Will get light states of dimmers
function getDimmerStates() {
    var dimmers = document.getElementsByClassName('light_dimmer');
    for (var i = 0; i < dimmers.length; i++) {
        
        getState(haUrl, '/states/', dimmers[i].id)
            .then(json => {
                setDimmerState(json);
            });
    }

}

// Called when getting dimmer states on controller load
function setDimmerState(data) {
    var dimmer = document.getElementById(data.entity_id);
    var lightTitle = dimmer.parentElement.parentElement.getElementsByClassName('light_title')[0];
    var lightPercentage = dimmer.parentElement.parentElement.getElementsByClassName('light_percentage')[0];
    lightTitle.innerHTML = data.attributes.friendly_name + ': ';
    if (data.attributes.brightness === undefined) {
        dimmer.value = '0';
        lightPercentage.innerHTML = '0%';
        // Hide color button and color picker, because light is off
        toggleColorOption(dimmer.parentElement.parentElement, false);
    }
    else {
        var brightness = Math.round(data.attributes.brightness / 2.54);
        dimmer.value = brightness;
        lightPercentage.innerHTML = brightness + '%';

        // Check if light entity has rgb support
        if (data.attributes.rgb_color) {
            // Show color button and color picker
            toggleColorOption(dimmer.parentElement.parentElement, true);
        }
        else {
            // Hide color button and color picker
            toggleColorOption(dimmer.parentElement.parentElement, false);
        }
    }
    
}

// This will Show/Hide color picker inside the div that is given in variable lightBox.
function toggleColorOption(lightBox, show) {
    if (show) {
        var colorpicker = lightBox.getElementsByClassName('color_picker_div')[0];
        //console.log(colorBtn);
        colorpicker.style.display = 'block';
    } 
    else {
        var colorpicker = lightBox.getElementsByClassName('color_picker_div')[0];
        //console.log(colorBtn);
        colorpicker.style.display = 'none';

    }
}

// This will GET the state of an entity specified
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


// This will POST data to given service (uri) with the payload given (data)
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
    const myJson = await response.json();
    return myJson; // parses JSON response into native JavaScript objects
}

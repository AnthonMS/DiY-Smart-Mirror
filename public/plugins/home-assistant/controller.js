console.log('PLUGIN: Home Assistant');

var haContainer = document.getElementById('ha_container');

haContainer.style.display = "block";
haContainer.style.width = "200px";
haContainer.style.height = "350px";
haContainer.style.left = '720px';
haContainer.style.top = '120px';


function onInputChange(value, sliderId) {
    console.log(sliderId + ': ' + value);
}

var haUrl = 'http://192.168.0.10:8123/';
var entityId = 'light.anthon_room';

postData(haUrl, { 'state': 'off' })
.then(data => {
    console.log(data); // JSON data parsed by `response.json()` call
});

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'authorization': '',
            'Content-Type': 'application/json',
            'origin': 'http://localhost:8080/'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

////// POST
// turn_light_on:
//   url: http://localhost:8123/api/states/light.study_light
//   method: POST
//   headers:
//     authorization: 'Bearer ABCDEFGH'
//     content-type: 'application/json'
//   payload: '{"state":"on"}'


////// GET
// url = "http://localhost:8123/ENDPOINT"
// headers = {
//     "Authorization": "Bearer ABCDEFGH",
//     "content-type": "application/json",
// }

// response = get(url, headers=headers)
// print(response.text)
// This will not be implemented. This is because to get the oauth token is tricky to 
// implement without pop-up windows where you have to login.
// I know there are easier ways out there, I have seen people get emails with only
// email and password. But I can't seem to find any good examples.
// Will maybe revisit later. But it's not important for me to see emails on the mirror.
// So most likely, I will not revisit.


console.log('PLUGIN: Gmail');

var gmailContainer = document.getElementById('gmail_container');
var mailList = document.getElementsByClassName('mail_list')[0];

gmailContainer.style.display = "block";
gmailContainer.style.width = "450px";
gmailContainer.style.height = "100px";
gmailContainer.style.left = '300px';
gmailContainer.style.top = '520px';

var clientId = 'xxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com';
var apiKey = '';
var scopes = 'https://www.googleapis.com/auth/gmail.readonly';
//getEmails();
//initClient();
//handleClientLoad();


// gapi.load('client', initClient);
// var GoogleAuth; // Google Auth object.
// function initClient() {
//     gapi.client.init({
//         'apiKey': '',
//         'clientId': 'xxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxx.apps.googleusercontent.com',
//         'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
//         'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
//     }).then(function () {
//         GoogleAuth = gapi.auth2.getAuthInstance();
//         console.log(GoogleAuth);
        
//         GoogleAuth.signIn();

//         // Listen for sign-in state changes.
//         GoogleAuth.isSignedIn.listen(updateSigninStatus);
//     });
// }

// function updateSigninStatus() {
//     console.log('Checking Sign In Status');
// }


// async function getEmails() {
//     var maxResults = 10;
//     var key = "";
//     var fetchUrl = "https://www.googleapis.com/gmail/v1/users/test%40gmail.com/messages?maxResults=" + maxResults + "&key=" + key;
//     console.log(fetchUrl);
//     const response = await fetch(fetchUrl);
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//     console.log(myJson);
// }
console.log('PLUGIN: Face-Detection');

var fdContainer = document.getElementById('fd_container');

fdContainer.style.display = "none";
fdContainer.style.width = "140px";
fdContainer.style.height = "125px";
fdContainer.style.left = '500px';
fdContainer.style.top = '20px';

// // Fetch face-detection txt
// fetch('http://localhost:8080/face-detection')
//   .then(response => response.text())
//   .then(text => console.log(text));

// // Fetch face-detection JSON
// fetch('http://localhost:8080/face-detection')
//   .then(response => response.json())
//   .then(jsonResponse => console.log(jsonResponse));
console.log('PLUGIN: Compliments');

var complimentText = document.getElementsByClassName('compliment_txt')[0];
var compliments;

getComplimentList();

setTimeout(function() { setComplimentText(); }, 1000);

function getComplimentList() {
    fetch('http://localhost:8080/compliments')
    .then(response => response.json())
    .then(myJson => compliments = myJson);
}


function setComplimentText() {
    date = checkDate();
    time = checkTime();
    
    if (date === 'birthday') {
        // Display Happy birthday
        displayBirthdayMessage();
    }
    else if (date === 'newyear') {
        // Display Happy New Year
        displayNewyearMessage();
    }
    else {
        // Not a special day, now check if special time
        if (time === 'morning') {
            // Display morning compliment
            displayMorningMessage();
        }
        else {
            // Display anytime compliment
            displayAnytimeMessage();
        }
    }

    setTimeout(function() { setComplimentText(); }, 600000); // Set new compliment every 10nth minutte
}

function displayBirthdayMessage() {
    var message = '';
    if (compliments.birthday.length === 1) {
        message = compliments.birthday[0];
    }
    else {
        message = compliments.birthday[getRandomInt(0, compliments.birthday.length)];
    }
    complimentText.innerHTML = message;

}

function displayMorningMessage() {
    var message = '';
    if (compliments.morning.length === 1) {
        message = compliments.morning[0];
    }
    else {
        message = compliments.morning[getRandomInt(0, compliments.morning.length)];
    }
    complimentText.innerHTML = message;

}

function displayNewyearMessage() {
    var message = '';
    if (compliments.newyear.length === 1) {
        message = compliments.newyear[0];
    }
    else {
        message = compliments.newyear[getRandomInt(0, compliments.newyear.length)];
    }
    complimentText.innerHTML = message;

}

function displayAnytimeMessage() {
    var message = compliments.anytime[getRandomInt(0, compliments.anytime.length)];
    complimentText.innerHTML = message;
}

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function checkTime() {
    var tmpTime = new Date();
    var h = tmpTime.getHours();
    var m = tmpTime.getMinutes();
    // console.log(h + ":" + m);

    var returnTime = '';

    if (h >= 4 && h <= 8) {
        returnTime = 'morning';
    }

    return returnTime;
}

function checkDate() {
    var tmpDate = new Date();
    var day = tmpDate.getDate();
    var month = tmpDate.getMonth() + 1;
    var year = tmpDate.getFullYear();
    // console.log(day + "/" + month + "-" + year);

    var returnDate = "";

    if (day === 27 && month === 8) {
        returnDate = "birthday";
    }
    else if ((day === 31 && month === 12) || (day === 1 && month === 1)) {
        returnDate = 'newyear';
    }

    return returnDate;
}
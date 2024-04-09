import './styles.css';

// i need to make a div.welcome with h1.rest-name and p.info as children
// i need to make a div.hours with p.hour-title and ul as children
// i need to make a div.loaction with p.loc-title and p.loc-info as children

const contentDiv = document.getElementById('content');

const welcomeDiv = document.createElement('div');
const restNameH1 = document.createElement('h1');
const infoP = document.createElement('p');

const hoursDiv = document.createElement('div');
const hoursTitleP = document.createElement('p');
const hoursUl = document.createElement('ul');
const hoursLiElements = ['Sun: 8am - 8pm', 'Mon: 6am - 8pm', 'Tues: 6am - 8pm', 'Wed: 6am - 8pm', 'Thur: 6am - 8pm', 'Fri: 6am - 2am', 'Sat: 8am - 4am'];

const locationDiv = document.createElement('div');
const locTitleP = document.createElement('p');
const locInfoP = document.createElement('p');

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});

menuBtn.addEventListener('click', function() {
    window.location.href = 'menu.html';
});

aboutBtn.addEventListener('click', function() {
    window.location.href = 'about.html';
});



welcomeDiv.className = 'welcome';
restNameH1.className = 'rest-name';
infoP.className = 'info';

restNameH1.innerText = "BRASS STACK JACK'S";
infoP.innerText = "Brass Stack Jack's – where the jazz is hot, and the food is even hotter.";

welcomeDiv.appendChild(restNameH1);
welcomeDiv.appendChild(infoP);

hoursDiv.className = 'hours';
hoursTitleP.className = 'hours-title';

hoursTitleP.innerText = 'Hours';

hoursLiElements.forEach(hour => {
    const li = document.createElement('li');
    li.innerText = hour;
    hoursUl.appendChild(li);
});

hoursDiv.appendChild(hoursTitleP);
hoursDiv.appendChild(hoursUl);

locationDiv.className = 'location';
locTitleP.className = 'loc-title';
locInfoP.className = 'loc-info';

locTitleP.innerText = 'Location';
locInfoP.innerText = '6969 Goodhead Drive, Jackson, Mississippi';

locationDiv.appendChild(locTitleP);
locationDiv.appendChild(locInfoP);


contentDiv.appendChild(welcomeDiv);
contentDiv.appendChild(hoursDiv);
contentDiv.appendChild(locationDiv);

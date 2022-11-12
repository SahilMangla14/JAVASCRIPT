document.querySelector("#banner").src;

document.querySelector('a').href;

document.querySelector('a').title;

const firstLink = document.querySelector('a');
// M1
firstLink.href
// M-2
firstLink.getAttribute('href')
// Slight differnce in the above two methods with respect to href

firstLink.getAttribute('class');
// If not present -> null

firstLink.getAttribute('title');

document.querySelectorAll('input')[1];

const input = document.querySelector('input[type="text"]');

input.type // gives the type because type is an attribute

input.type = 'color' // sets the type to color

// Another method
input.setAttribute('type','text');





const h1 = document.querySelector('h1');
// Use camelcasing
h1.style.fontSize // gives the font size of h1
                    // won't give css font size but inline font size
h1.style.fontSize = 2; // sets the inline font size

// To get all the final computed styles

window.getComputedStyle(h1);

// To get final particular computed style
window.getComputedStyle(h1).color;
window.getComputedStyle(h1).fontSize;
window.getComputedStyle(h1).fontFamily;
window.getComputedStyle(h1).marginLeft;
window.getComputedStyle(h1).margin;
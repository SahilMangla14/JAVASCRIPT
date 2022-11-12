const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// IN javascript, donot contain style elements from the style sheet
// if there are inline styles, then it will be there in javascript style

// const h1 = document.querySelector("h1");
// h1.style.color = 'green' sets the inline style

// const h1 = document.querySelector("h1");
// window.getComputedStyle(h1) ->gives all the final computed styles
// To access a particular style
// window.getComputedStyle(h1).color
// window.getComputedStyle(h1).fontSize
// appendchild
document.createElement('img');
const newImg = document.createElement('img'); // creates img tag
document.body.appendChild(newImg);
newImg.classList.add('square');
const newH3 = document.createElement('h3');
document.body.appendChild(newH3);

// append
const p = document.querySelector('p');
p.append('i am new text yaaaaaaaaaayy!!');
p.appendChild('i am new text yaaaaaaaaaayy!!');// error because through appendchild we can append tags
p.append('i am new text yaaaaaaaaaayy!!',"sdfasdfsadf");

const newB = document.createElement('b');
newB.append('hi');
newB // <b>hi</b>
p.prepend(newB);


// insertadjacentElement
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend',h2);
h1.after(h3);
// Syntax -> Node.removeChild()

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

const b = document.querySelector('b');
b.parentElement.revoveChild(b);

// better method
// syntax ->  childNode.remove
b.remove();
const img = document.querySelector('img');
img.remove();


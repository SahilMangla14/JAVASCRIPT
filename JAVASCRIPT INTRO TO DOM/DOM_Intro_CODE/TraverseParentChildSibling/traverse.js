const firstBold = document.querySelector('b');
firstBold.parentElement // gives the parent
firstBold.parentElement.parentElement // gives grandparent
firstBold.parentElement.parentElement.parentElement // gives greatgrandpareant


const p = firstBold.parentElement;
p.children // gives all the tags that are children of p // basically an array of children
p.children[0] // first children of p

p.children[0].parentElement // gives p again


const squareImage = document.querySelector('.square');
squareImage.parentElement
squareImage.children

squareImage.nextSibling     // gives the next node
squareImage.previousSibling // gives the previous node

// node is different element
squareImage.nextElementSibling
squareImage.previousElementSibling

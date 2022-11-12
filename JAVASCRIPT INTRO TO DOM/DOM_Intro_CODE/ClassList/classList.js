const h2 = document.querySelector('h2');
h2.getAttribute('class');  // gives the class of h2 if present otherwise null

h2.setAttribute('class','purple'); // sets class purple replacing class already present
h2.setAttribute('class','border'); // sets class border replacing purple

// What if we want to have both the classes
// M1
let currentClasses = h2.getAttribute('class');
h2.setAttribute('class',`${currentClasses} purple`)


// M2 better method
h2.classList; // gives the list of classes
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.remove('border');
h2.classList.contains('border'); // true if present else false
h2.classList.toggle('purple'); // false
h2.classList.toggle('purple'); // true  toggle removes if present and adds if not present





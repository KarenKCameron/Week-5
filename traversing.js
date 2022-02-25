// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');

let main = body.firstElementChild

console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');

const ulParent = ul.parentNode;

const ulBody = ulParent.parentNode;

console.log(ulBody);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

const listItem = p.previousElementSibling

const listLastChild = listItem.lastElementChild;

console.log(listLastChild);


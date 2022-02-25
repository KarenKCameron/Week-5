// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const newAnchor = document.createElement('a');

const newAnchorTextNode = document.createTextNode('Buy Now!');

newAnchor.appendChild(newAnchorTextNode);

const main = document.getElementsByTagName('main')[0];

main.appendChild(newAnchor);

newAnchor.setAttribute(
    'id',
    'cta'
);

// Access (read) the data-color attribute of the <img>,
// log to the console

const carImg = document.getElementsByTagName('img')[0];

const imgDetail = carImg.getAttribute('data-color');

console.log(imgDetail);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const parentElement = document.getElementsByTagName('li')[2];

parentElement.className = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const paragraphEl = document.getElementsByTagName('p')[0];

paragraphEl.remove(paragraphEl);


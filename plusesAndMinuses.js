// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;
let displayCounter = document.getElementById('counter')

const plusEl = document.getElementById('plus');
plusEl.addEventListener('click', () => {
    counter++;
    console.log(`Count is: ${counter}`);
    displayCounter.innerText = counter;
});

const minusEl = document.getElementById('minus');
minusEl.addEventListener('click', () => {
    counter--;
    console.log(`Count is: ${counter}`);
    displayCounter.innerText = counter;
});
let L4_1 = document.querySelector("#L4_1");
let L4_2 = document.querySelector("#L4_2");
let L4_3 = document.querySelector("#L4_3");
let L4_4 = document.querySelector("#L4_4");
let L4_5 = document.querySelector("#L4_5");

// const classArray = ['John', 'Victor'];

//  const classArray = [
//     { name: 'Eve', role: 'student' },
//     { name: 'Adam', role: 'student' }
// ]

// for loop
// for(let i = 0; i < classArray.length; i++) {
//     let newElm = document.createElement('p');
//     newElm.innerText = classArray[i];
//     L4_1.appendChild(newElm);
// }

// for(let i = 0; i < classArray.length; i++) {
//     let nameElm = document.createElement('p');
//     let roleElm = document.createElement('p');
//     nameElm.innerText = `Name: ${classArray[i].name}`;
//     roleElm.innerText = `Role: ${classArray[i].role}`;
//     L4_1.appendChild(nameElm);
//     L4_1.appendChild(roleElm);
// }

// forEach loop
// classArray.forEach(element => {
//     let newElm = document.createElement('p');
//     newElm.innerText = element;
//     L4_1.appendChild(newElm);
// });

// Opgave 1 - Inputter navne ændringer ved brug af change eventlistener.
const showFullName = () => {
    let firstNameInput = document.createElement('input');
    firstNameInput.setAttribute('placeholder', 'Input firstname');

    let lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('placeholder', 'Input lastname');

    let fullNameElm = document.createElement('p');

    const updateFullName = () => {
        fullNameElm.textContent = 'Name: ' + firstNameInput.value + ' ' + lastNameInput.value;
    }

    firstNameInput.addEventListener('change', updateFullName);
    lastNameInput.addEventListener('change', updateFullName);
    
    L4_1.append(firstNameInput, lastNameInput, fullNameElm);
}

// Opgave 2 - Function køres efter 4 sekunders delay.
const delayedFunction = () => {
    const delay = (seconds, callback) => {
        setTimeout(callback, seconds * 1000);
    }

    const myFunction = () => {
        console.log('Hello from the other side, 4 seconds later');
        let paragraph = document.createElement('p');
        paragraph.innerText = 'It took me a whole 4 seconds to get here.';
        L4_2.appendChild(paragraph);
    }

    console.log('Start of function log');
    delay(4, myFunction);
}

// Opgave 3 - Stopursfuntion
const stopWatchFunction = () => {
    let seconds = 0; // Starting number for stop watch.
    let i; // Id of interval

    let startBtn = document.createElement('button');
    startBtn.innerText = 'Start';
    let stopBtn = document.createElement('button');
    stopBtn.innerText = 'Stop';
    let resetBtn = document.createElement('button');
    resetBtn.innerText = 'Reset';
    
    let timeElement = document.createElement('h2');
    timeElement.innerText = seconds;

    startBtn.addEventListener('click', () => {
        i = setInterval(() => {
            seconds++;
            timeElement.innerText = seconds + ' seconds has passed';
        }, 1000); // 1000 = milliseconds
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(i);
        i = null;
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(i)
        seconds = 0; // Sets starting number back to 0
        timeElement.innerText = 'Timer was reset';
        i = null;
    });

    L4_3.append(timeElement, startBtn, stopBtn, resetBtn);
}

// Opgave 4
const scrollPercentageElm = () => {
    let scrollMsg = document.createElement('p');
    scrollMsg.innerHTML = `You have scrolled %`;
    L4_4.appendChild(scrollMsg);

    window.addEventListener('scroll', () => {
        let winTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;

        let scrollPercentage = winTop / (docHeight - winHeight);
        let roundedPercentage = Math.round(scrollPercentage * 100);
        scrollMsg.innerHTML = `You have scrolled ${roundedPercentage}%`;
    });
}

// Calls
showFullName();
// delayedFunction();
stopWatchFunction();
scrollPercentageElm();
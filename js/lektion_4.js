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
        
    L4_1.appendChild(firstNameInput);
    L4_1.appendChild(lastNameInput);
    L4_1.appendChild(fullNameElm);
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



// Calls
showFullName();
delayedFunction();
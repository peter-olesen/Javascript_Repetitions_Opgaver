let L4_1 = document.querySelector("#L4_1");
let L4_2 = document.querySelector("#L4_2");
let L4_3 = document.querySelector("#L4_3");
let L4_4 = document.querySelector("#L4_4");
let L4_5 = document.querySelector("#L4_5");

// const classArray = ['John', 'Victor'];

 const classArray = [
    { name: 'Eve', role: 'student' },
    { name: 'Adam', role: 'student' }
]

// for loop
// for(let i = 0; i < classArray.length; i++) {
//     let newElm = document.createElement('p');
//     newElm.innerText = classArray[i];
//     L4_1.appendChild(newElm);
// }

for(let i = 0; i < classArray.length; i++) {
    let nameElm = document.createElement('p');
    let roleElm = document.createElement('p');
    nameElm.innerText = `Name: ${classArray[i].name}`;
    roleElm.innerText = `Role: ${classArray[i].role}`;
    L4_1.appendChild(nameElm);
    L4_1.appendChild(roleElm);
}

// forEach loop
// classArray.forEach(element => {
//     let newElm = document.createElement('p');
//     newElm.innerText = element;
//     L4_1.appendChild(newElm);
// });
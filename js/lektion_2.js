let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");

// Opgave 1 - Tjekker om input er tal eller string.
function checkInputValue() {
    let inputElm = document.createElement('input');
    inputElm.type = 'text';
    inputElm.placeholder = 'Input something';

    let msgElm = document.createElement('p');

    inputElm.addEventListener('input', () => {
        let value = inputElm.value;
        let type = !isNaN(value) ? 'number' : 'string';
        let msg = `${value} is a ${type}`;

        msgElm.textContent = msg;
    });

    L2_1.appendChild(inputElm);
    L2_1.appendChild(msgElm);
}

// Opgave 2 - Tjekker om email er valid.
function checkEmail() {
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Input your email');

    emailInput.addEventListener('input', function() {
        const email = this.value;

        if (validateEmail(email)) {
            this.style.border = 'solid 5px green';
        } else {
            this.style.border = 'solid 5px red';
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]+$/;

        if (emailRegex.test(email)) {
            const domainParts = email.split('@')[1].split('.');

            if (domainParts[domainParts.length - 1].length >= 2) {
                return true;
            }
        }

        return false;
    }

    L2_2.appendChild(emailInput);
}

// Opgave 3 - Tjekker om en string er over/under to bogstaver.
function stringLength() {
    let inputElm = document.createElement('input');
    inputElm.type = 'text';
    inputElm.placeholder = 'Input something';

    let msgElm = document.createElement('p');

    inputElm.addEventListener('input', () => {
        let value = inputElm.value.trim();
        
        if (value.length >= 2) {
            let msg = `String is equal or longer than two characters.`;
            msgElm.textContent = msg;
            msgElm.style.color = 'green';
        } else {
            let msg = `String is too short.`;
            msgElm.textContent = msg;
            msgElm.style.color = 'red';
        }
    });

    L2_3.appendChild(inputElm);
    L2_3.appendChild(msgElm);
}

// Opgave 4 - Generere et nummer mellem to inputs.
function randomNumber() {
    let msg = document.createElement('p');
    msg.innerText = 'Input two numbers to get a random output between the two.';

    let inputValue1 = document.createElement('input');
    inputValue1.setAttribute('type', 'number');
    inputValue1.setAttribute('id', 'value1');
    inputValue1.style = 'display: block'

    let inputValue2 = document.createElement('input');
    inputValue2.setAttribute('type', 'number');
    inputValue2.setAttribute('id', 'value2');
    inputValue2.style = 'display: block'

    let generateButton = document.createElement('button');
    generateButton.innerText = 'Get random number';
    generateButton.addEventListener('click', generateRandomNumber);

    let resultMsg = document.createElement('p');
    resultMsg.setAttribute('id', 'resultMsg');

    L2_4.appendChild(msg);
    L2_4.appendChild(inputValue1);
    L2_4.appendChild(inputValue2);
    L2_4.appendChild(generateButton);
    L2_4.appendChild(resultMsg);

    function generateRandomNumber() {
        let value1 = parseInt(document.getElementById('value1').value);
        let value2 = parseInt(document.getElementById('value2').value);
    
        if (isNaN(value1) || isNaN(value2)) {
            document.getElementById('resultMsg').innerText = 'Please enter valid numbers.';
            return;
        }
    
        let min = Math.min(value1, value2);
        let max = Math.max(value1, value2);
        let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    
        document.getElementById('resultMsg').innerText = 
        `Vores tilfældige tal mellem ${min} og ${max} er:
        ${randomValue}`;
    }
}


// Opgave 5 - Ændrer baggrundsfarven til en random RGB ud fra getRandomRGB
function rgbRandomizer() {
    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    function createColorChangingElement() {
        let rgbButton = document.createElement('button');
        rgbButton.innerText = 'Generate Random Color';
        
        let colorParagraph = document.createElement('p');
        colorParagraph.innerText = 'Watch my background color change!';
        
        rgbButton.addEventListener('click', () => {
            let randomColor = getRandomRGB();
            colorParagraph.style.backgroundColor = randomColor;
        });
        
        L2_5.appendChild(rgbButton);
        L2_5.appendChild(colorParagraph);
    }

    createColorChangingElement();
}


// Calls
checkInputValue();
checkEmail();
stringLength()
randomNumber();
rgbRandomizer();
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

// Opgave 2
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
    })

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


// Calls
checkInputValue();
checkEmail();
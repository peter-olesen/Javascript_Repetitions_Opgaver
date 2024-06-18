let L5_1 = document.querySelector("#L5_1");
let L5_2 = document.querySelector("#L5_2");
let L5_3 = document.querySelector("#L5_3");
let L5_4 = document.querySelector("#L5_4");
let L5_5 = document.querySelector("#L5_5");

// Opgave 1
const myFetchFunction = async (url, options) => {
    try {
        let res = await fetch(url, options);

        if (!res.ok) {
            throw new Error('HTTP error! status: ${res.status}');
        }

        let json = await res.json();
        return json;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Used for create user post fetch
const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        firstName: 'Christian',
        lastName: 'Dingo The 16th',
        age: 69420
    })
}

// Opgave 2 - Fetch product list
let shopData = await myFetchFunction('https://dummyjson.com/products');

let singleProduct = document.createElement('p');
singleProduct.innerHTML = `Brand: ${shopData.products[1].brand} <br> Title: ${shopData.products[1].title}`;

L5_2.append(singleProduct);

// Opgave 3 - Create new user using post fetch
let newUserData = await myFetchFunction('https://dummyjson.com/users/add', options);

let newUser = document.createElement('p');
newUser.innerHTML = `New user added: <br>${newUserData.firstName} ${newUserData.lastName}<br> Age: ${newUserData.age}`;
L5_3.append(newUser);
let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// Opgave 1 - Inputter navn i velkomst.
function fullName(firstName, lastName) {
  let greeting = "Welcome " + firstName + " " + lastName;
  let newH3 = document.createElement("h3");
  newH3.innerText = greeting;
  L1_1.appendChild(newH3);
}

// Opgave 2 - Fjerner/viser paragraph ved button click.
function isVisible() {
  let hideBtn = document.createElement('button');
  hideBtn.innerText = 'Click to hide paragraph';
  let paragraph = document.createElement('p');
  paragraph.innerText = 'Hey, you suck!';

  hideBtn.addEventListener('click', () => {
    paragraph.classList.toggle('hidden');
    hideBtn.innerText = 'Click to show paragraph';
  })

  L1_2.appendChild(hideBtn);
  L1_2.appendChild(paragraph);
}

// Opgave 3 - Ændrer baggrundsfarve på boks 3 ved button click.
function colorButton() {
  let changeColorBtn = document.createElement('button');
  changeColorBtn.innerText = 'Change Color';
  L1_3.appendChild(changeColorBtn);
  let colorWarning = document.createElement('p');
  L1_3.appendChild(colorWarning);

  let isColored = false;

  changeColorBtn.addEventListener('click', () => {
    if (isColored) {
      L1_3.classList.toggle('colorChange');
      colorWarning.innerText = 'Farven er ændret tilbage';
    } else {
      L1_3.classList.toggle('colorChange');
      colorWarning.innerText = 'Farven er ændret til rød';
    }
    isColored = !isColored;
  });
}

// Opgave 4 - Tæller hvor mange gange knappen er clicked.
function clickCounter() {
  let counterBtn = document.createElement('button');
  counterBtn.innerText = "Don't Click Me";
  L1_4.appendChild(counterBtn);
  let clickCount = document.createElement('p');
  L1_4.appendChild(clickCount);

  let count = 0;

  counterBtn.addEventListener('click', () => {
    count++;
    clickCount.innerText = `Some redneck clicked the button ${count} times`;
  })
}

// Opgave 5 - Tæller antallet af bogstaver (og mellemrum) ord/sætning.
function wordLenght(word) {
  let insertedWord = document.createElement('p');
  let wordLenght = document.createElement('p');
  insertedWord.innerText = `Word: ${word}`;
  wordLenght.innerText = `Length: ${word.length}`;
  L1_5.appendChild(insertedWord);
  L1_5.appendChild(wordLenght);
}

// Opgave 6 - Fjern vokaler fra ord.
function removeLetters(word) {
  let lettersRemoved = word.replace(/[aeiouyæøå]/gi, '');
  let paragraph = document.createElement('p');
  paragraph.innerText = `Cleaned word: ${lettersRemoved}`;
  L1_6.appendChild(paragraph);
}


// Function Calls
fullName("Dr.", "Strange");
isVisible();
colorButton();
clickCounter();
wordLenght('ChatGPT');
removeLetters('Rød grød med fløde. Fed flade flødeboller på et fladt flødebollefad. Gå lige op og sig de skal skrue ned. Æbler er sunde, har jeg hørt en sige engang.');
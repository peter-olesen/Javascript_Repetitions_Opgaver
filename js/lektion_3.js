let L3_1 = document.querySelector("#L3_1");
let L3_2 = document.querySelector("#L3_2");
let L3_3 = document.querySelector("#L3_3");
let L3_4 = document.querySelector("#L3_4");
let L3_5 = document.querySelector("#L3_5");

// Opgave 7
function createElement() {
    let inputElm = document.createElement('input');
    inputElm.setAttribute('id', 'input');
    let btn = document.createElement('button');
    btn.innerText = 'Click';
    let warningMsg = document.createElement('p');
    warningMsg.setAttribute('id', 'warning');
  
    btn.addEventListener('click', () => {
        let newElm = inputElm.value.trim();
        let warning = document.getElementById('warning');

        if (newElm === '') {
            warning.innerText = 'Please enter a valid element name.';
            warning.style.display = 'block';
        } else {
            warning.style.display = 'none';
            let inputtedElm = document.createElement(`${newElm}`)
            L3_1.appendChild(inputtedElm);
        }
    });

    L3_1.appendChild(inputElm);
    L3_1.appendChild(btn);
    L3_1.appendChild(warningMsg);
}

createElement()

// Lektion 3 - Opgave 1

function studentDB() {
    const classroom = {
        classNumber: 'A1',
        room: '101',
        students: ['Mark', 'Bobby', 'Charlie', 'Hamlet'],
    
        addStudent(newStudent) {
            this.students.push(newStudent);
        }
    }

    let classRoomElm = document.createElement('p');
    classRoomElm.innerText = 'Course:' + " " + classroom.classNumber;

    let roomElm = document.createElement('p');
    roomElm.innerText = 'Room #:' + " " + classroom.room;

    let studentsElm = document.createElement('p');
    studentsElm.innerText = 'Students: ' + classroom.students.join(', ');

    L3_2.appendChild(classRoomElm);
    L3_2.appendChild(roomElm);
    L3_2.appendChild(studentsElm);

    let newStudentInput = document.createElement('input');
    let newStudentBtn = document.createElement('button');
    newStudentBtn.innerText = 'Add Student';

    L3_2.appendChild(newStudentInput);
    L3_2.appendChild(newStudentBtn);

    newStudentBtn.addEventListener('click', () => {
        let newStudentName = newStudentInput.value.trim();
        if (newStudentName !== '') {
            classroom.addStudent(newStudentName);
            studentsElm.innerText = 'Students: ' + classroom.students.join(', ');
            newStudentInput.value = '';
        }
    });

    console.log(newStudentInput.value);
}

studentDB()

// Задание 1

const searchElementMass = [1, 5, 4, 10, 0, 3];


for (let i = 0; i < searchElementMass.length; i++) {
    console.log(searchElementMass[i]);
    if (searchElementMass[i] === 10) {
        break;
    }
}

// Задание 2

const indexMass = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < indexMass.length; i++) {
    if (indexMass[i] === 4) {
        console.log(i);
        break;
    }
}

// Задание 3

const joinMass = [1, 3, 5, 10, 20];

joinMass.join(' ');

console.log(joinMass.join(' '));

// Задание 4

const mainNestedMass = [];

for (let i = 0; i < 3; i++) {
    const nestedMass = []
    for (let i = 0; i < 3; i++) {
        nestedMass.push(1);
    }
    mainNestedMass.push(nestedMass);
}

console.log(mainNestedMass);


// Задание 5

const pushMass = [1, 1, 1];

pushMass.push(2, 2, 2);

console.log(pushMass);

// Задание 6

const sortMass = [9, 8, 7, 'a', 6, 5];

sortMass.sort();
sortMass.pop();

console.log(sortMass);

// Задание 7

// const gameMass = [9, 8, 7, 6, 5];

// const userQue = +prompt('Угадай число');

// if (gameMass.includes(userQue)) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }


// Задание 8

let string = 'abcdef';

string =  string.split('');
console.log(string);

string.reverse();
console.log(string);

string = string.join('');
console.log(string);

// Задание 9

const origParseMass = [[1, 2, 3],[4, 5, 6]];
const parseMass = [];

for (let i = 0; i < origParseMass.length; i++) {
    parseMass.push(...origParseMass[i]);
}

console.log(parseMass);


// Задание 10

const numbMass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbMass.length; i++) {
    if (numbMass[i + 1]) {
      console.log(numbMass[i] + numbMass[i + 1]);  
    }
}

// Задание 11

function square(squareMass) {
    return squareMass.map(item => item ** 2);
}

console.log(square([2, 4, 6]));

// Задание 12

function swords(wordsMass) {
    return wordsMass.map(item => item.length);
}

console.log(swords(['Ну', 'пусть', 'будет', 'так']));

// Задание 13

function negative(array) {
    return array.filter(item => item < 0);
}

console.log(negative([1, 2, 3, 4, -5, 6, 7, -8, 9, 10]));

// Задание 14

function random() {
    return Math.floor(Math.random() * 10);
}

const randomMass = [];

for (let i = 0; i < 10; i++) {
    randomMass.push(random());
}

const newRamdomMass = [];

for (let i = 0; i < randomMass.length; i++) {
    if (randomMass[i] % 2 === 0) {
        newRamdomMass.push(randomMass[i]);
    }
}

console.log(newRamdomMass);

// Задание 15

function randomNumb() {
    return Math.floor(Math.random() * 10);
}

const arr = [];

for (let i = 0; i < 6; i++) {
    arr.push(random());
}

console.log(arr)
console.log(arr.reduce((a, b) => a + b) / arr.length);
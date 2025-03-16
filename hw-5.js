//Заднаие 1
function min(a,b) {
return a<=b?a:b
}
let result = min(8, 4);
alert(result)
alert(min(7, 7))

// Задание 2

const isOdd = (n) => (n % 2 ===0) ? 'Число четное' : 'Число нечетное';

console.log(isOdd(7));
console.log(isOdd(6));

// Задание 3

function square(number) {
    console.log(number ** 2);
}

const up = (n) => n ** 2;

square(5);
console.log(up(5));

// Задание 4

function userAge() {
    let age = Number(prompt('Сколько вам лет?'));
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age > 0 && age <= 12) {
        alert('Привет, друг!');        
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Я вас не понимаю');
    }
}

// Задание 5

function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }    
}

console.log(calc(6, 10))

//Задание 6

function nan() {
    let n = prompt('Введите число')
    let degree = n ** 3

    if (isNaN(n)) {
        alert('Переданный параметр не является числом');
    } else {
        alert(`${n} в кубе равняется ${degree}`);
    }
}

//Задание 7

 function getArea() {
    return Math.PI * this.radius ** 2;
 }

 function getPerimeter() {
    return 2 * Math.PI * this.radius;
 }

 const circle1 = {
    radius: 10,
    metodGetArea: getArea,
    metodGetPerimeter: getPerimeter,
 }

 const circle2 = {
    radius: 20,
    metodGetArea: getArea,
    metodGetPerimeter: getPerimeter,
 }

 console.log(circle1.metodGetArea());
 console.log(circle2.metodGetArea());
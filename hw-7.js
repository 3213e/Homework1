//Задание 1
const upCaseJs = 'js'
const toUpperCaseJs = upCaseJs.toUppercase()
alert(toUpperCaseJs)

//Задание 2

function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));    
}

console.log(filter(['Копия', 'Краска', 'Красота'], 'Кр'));

//Задание 3

let digit = 32.58884;

console.log(Math.floor(digit));
console.log(Math.ceil(digit));
console.log(Math.round(digit));

//Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;  
}

console.log(getRandomNumber());

//Задание 6

function getRanNum(num) {
    return Array.from({length: Math.floor(num / 2)}, () => Math.floor(Math.random() * num))
}

console.log(getRanNum(10));

//Задание 7

function diapazon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

console.log(diapazon(1, 10));

//Задание 8

console.log(new Date());

//Задание 9

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//Задание 10

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время : ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
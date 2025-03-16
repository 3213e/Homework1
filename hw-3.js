// //Задание 1
// let password = 'Пароль';
// let userInput = prompt("Введите пароль:");
// if (userInput === password) {
//   alert ("Пароль введен верно");
// } else {
//   alert ("Пароль введен неправильно");
// }

//Задание 2
let c = 5;
с = 0
с = 10
с = -3
с = 2
if (c > 0 && c < 10) {
  alert("Верно");
} else {
  alert("Неверно");
}

// Задание 3
let d = 11;
let e = 14;
if (d > 100 || e > 100) {
    alert ('Верно');
} else {
    alert ('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
let i = Number (a)
let f = Number (b)
alert(i + f);


// Задание 5
var monthNumber = prompt("Введите номер месяца");

switch (monthNumber) {
    case '1':
      alert('январь - это зима');
      break;
    case '2':
      alert('февраль - это зима');
      break;
    case '3':
      alert('март - это весна');
      break;
    case '4':
      alert('апрель - это весна');
      break;
    case '5':
      alert('май - это весна');
      break;
    case '6':
      alert('июнь - это лето');
      break;
    case '7':
      alert('июль - это лето');
      break;
    case '8':
      alert('август - это лето');
      break;
    case '9':
      alert('сентябрь - это осень');
      break;
    case '10':
      alert('октябрь - это осень');
      break;
    case '11':
      alert('ноябрь - это осень');
      break;
    case '12':
      alert('декабрь - это зима');
      break;
   default:
      alert('Два+Два - 22');
}
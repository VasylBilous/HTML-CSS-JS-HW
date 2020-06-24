//1
let name = prompt("Enter your name");
alert(`Hello, ${name}`);


//2
const year = 2020;
let age = +prompt("Enter your birth year");
alert(`Your age is ${year - age}`);

//3
let length = +prompt("Enter length of square");
alert(`P =  ${length * 4}`);

//4
const pi = 3.14;
let radius = +prompt("Enter radius of a circle");
alert(`S =  ${pi * radius * radius}`);

//5
let distance = +prompt("Enter a distance between of two cities");
let time = +prompt("Enter a time of travel");
alert(`Calcucalted speed =  ${distance / time} km/h`);

//6
const USD = 26.5907;
const EUR = 29.6293;
let money = +prompt("Enter amount of USD");
alert(`Amount of EUR =  ${money * USD / EUR} euros`);


//7
const size = 820;
let capacity = +prompt("Enter flash capacity in GB");
alert(`You can write here a ${Math.floor(capacity * 1000 / 820)} files ${size}mb size`);


//8
let inWallet = +prompt("Enter amount of money in wallet");
let price = +prompt("Enter price of chocollate");
let chocolattes = Math.floor(inWallet / price);
alert(`You can buy ${chocolattes} chocolattes. Your change also is ${inWallet - chocolattes * price}`);


//9
let number = +prompt("Enter a number");
function reverse(number, r = 0) {
  if (!number)
    return r;
  r = r * 10 + number % 10;
  return reverse(Math.floor(number / 10), r);
}
alert(`Reserse = ${reverse(number)}`);


//10
let digit = +prompt("Enter a digit");
function isEven(digit) {
  return (digit % 2 == 0) ? true : false;
};
alert(`Is digit is even ? ${isEven(digit)}`);
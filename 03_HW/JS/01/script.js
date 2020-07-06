//1
/*
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let c = 0;

if (a < b) {
    while (a <= b)
        c += a++;
} else if (b < a) {
    while (b <= a)
        c += b++;
}

console.log(`Summ = ${c}`);
*/

//2
/*
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
while (b != 0)
{
    let c = b;
    b = a % b;
    a = c;
}
console.log(`NOD = ${a}`);
*/

//3
/*
let a = +prompt("Enter a number");
let b = 1;
let res = ""

while (b != a) {
    if (a % b == 0) {
        console.log(`Число ${a} ділиться без остачі на ${b}`);
    }
    b++;
}
*/

//4
/*
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let c = 0;

if (a < b) {
    while (a <= b) {
        c += 1;
        a++
    }
} else if (b < a) {
    while (b <= a)
       {
        c += 1;
        b++
       }
}

console.log(`Summ = ${c}`);
*/

//5
/*
let str = prompt("Enter 10 numbers");
let numbers = str.split(" ");

let minus = 0;
let plus = 0;
let zero = 0;
let parne = 0;
let neparne = 0;

for (let i of numbers) {
    if (i == 0)
        zero++;
    else if (i < 0)
        minus++;
    else if (i > 0)
        plus++;

    if (i % 2 == 0)
        parne++;
    else
        neparne++;
}

console.log(`Статистика по числам: мінусових = ${minus}, плюсових = ${plus}, нулів = ${zero}, парних = ${parne}, непарних = ${neparne}`)
*/

//6
/*
let isOn = "так";

do {

    let str = prompt("Введіть математичний вираз");
    let numbers = Array.from(str);
    let res = "Вираз не корректний";

    switch (numbers[1]) {
        case '+':
            res = +numbers[0] + +numbers[2];
            break;
        case '-':
            res = +numbers[0] - +numbers[2];
            break;
        case '*':
            res = +numbers[0] * +numbers[2];
            break;
        case '/':
            res = +numbers[0] / +numbers[2];
            break;
        default:
            break;
    }
    alert(`${str} = ${res}`);

    isOn = prompt("Бажаєте продовжити ? (так або ні)");
} while (isOn != "ні");
*/

//7
/*
let str = prompt("Enter big number");
let shifter = +prompt("Enter a shift number");
let numbers = Array.from(str);
let res = "";

if (shifter < numbers.length) {
    for (let i = shifter; i < numbers.length; ++i)
        res += numbers[i];

    for (let i = 0; i < shifter; ++i)
        res += numbers[i];
}
alert(`New number = ${res}`);
*/

//8
/*
let counter = 0;
let isOn = "так";
let array = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Субота', 'Неділя'];

do {

    isOn = prompt(`${array[counter++]}. Бажаєте побачити наступний день ? (так або ні)`);
    if (counter == 7)
        counter = 0;

} while (isOn != "ні");
*/

//9
/*
let a = 2;
let b = 9;

while (a <= b) {
    let res = "";
    for (let i = 1; i <= 10; ++i)
        res += a * i + " ";
    console.log(`${a++} multipliers: ${res}`);
}
*/

//10
/*
alert(`Загадайте число від 0 до 100`);
let start = 0,
    end = 100,
    N = 0;
let asnwer = "";

do {
    N = Math.round((end + start) / 2);
    asnwer = prompt(`Ваше число: > ${N} ? < ${N} ? == ${N} ? (введіть < або > або ==)`);

    if (asnwer == ">")
        start = N + 1;
    else if (asnwer == "<")
        end = N - 1;

} while (asnwer != "==");
*/
let str = prompt("Виберіть країну: \nУкраїна \nНімеччина \nАвстрія \nФранція \nБолгарія")

let country = str.toUpperCase();

switch (country) {
    case "УКРАЇНА":
        document.getElementById('country').innerHTML = "Україна";
        document.getElementById('capital').innerHTML = "Київ";
        document.getElementById('language').innerHTML = "Українська";
        document.getElementById('ustriy').innerHTML = "Парламентська-президенська республіка";
        document.getElementById('date').innerHTML = "24 серпня 1991 року";
        document.getElementById('square').innerHTML = `603 628 км<sup>2</sup>`;
        break;
    case "НІМЕЧЧИНА":
        document.getElementById('country').innerHTML = "Німеччина";
        document.getElementById('capital').innerHTML = "Берлін";
        document.getElementById('language').innerHTML = "Німецька";
        document.getElementById('ustriy').innerHTML = "Парламентська-президенська республіка";
        document.getElementById('date').innerHTML = "24 серпня 1991 року";
        document.getElementById('square').innerHTML = `603 628 км<sup>2</sup>`;
        break;
    case "АВСТРІЯ":
        document.getElementById('country').innerHTML = "Австрія";
        document.getElementById('capital').innerHTML = "Вена";
        document.getElementById('language').innerHTML = "Австрійська";
        document.getElementById('ustriy').innerHTML = "Парламентська-президенська республіка";
        document.getElementById('date').innerHTML = "24 серпня 1991 року";
        document.getElementById('square').innerHTML = `603 628 км<sup>2</sup>`;
        break;
    case "ФРАНЦІЯ":
        document.getElementById('country').innerHTML = "Франція";
        document.getElementById('capital').innerHTML = "Париж";
        document.getElementById('language').innerHTML = "Французька";
        document.getElementById('ustriy').innerHTML = "Парламентська-президенська республіка";
        document.getElementById('date').innerHTML = "24 серпня 1991 року";
        document.getElementById('square').innerHTML = `603 628 км<sup>2</sup>`;
        break;
    case "БОЛГАРІЯ":
        document.getElementById('country').innerHTML = "Болгарія";
        document.getElementById('capital').innerHTML = "Софія";
        document.getElementById('language').innerHTML = "Болгарська";
        document.getElementById('ustriy').innerHTML = "Парламентська-президенська республіка";
        document.getElementById('date').innerHTML = "24 серпня 1991 року";
        document.getElementById('square').innerHTML = `603 628 км<sup>2</sup>`;
        break;
    default:
        document.body.innerHTML = "";
}
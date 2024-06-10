let userName = prompt("Як твое им'я", 'Оксимирон');
let userSurname = prompt("Як твое призвище", 'Янович');
let userAge = +prompt("Скока рокив", '35');
document.write(`Я ${userName} ${userSurname} i менi ${userAge} рокiв. <br />`);


let number = +prompt("Введіть  число");
let x = number.toString().split('');

if (x.length === 5) {
    for (let i = 0; i < x.length; i++) {
        document.write(x[i] + "&nbsp;");
    }
} else {
    document.write("Москаль!!!");
}
console.group('1 task');
console.log('Напишіть програму, яка запитує у користувача довжину та ширину прямокутника, а потім обчислює та виводить площу і периметр. Підтвердіть розрахунок за допомогою confirm.');
const rectangleLength = prompt('Напишіть довжину прямокутника.');
const rectangleWidth = prompt('Напишіть висоту прямокутника.');
if (confirm('Ви хочете знайти площу і периметр прямокутника?')) {
    const rectanglePerimetr = (Number(rectangleLength) + Number(rectangleWidth)) * 2;
    const rectangleArea = rectangleLength * rectangleWidth;
    alert('Площа прямокутника: ' + rectangleArea + '.' + '\n'
        + 'Периметр прямокутника: ' + rectanglePerimetr + '.');
}
console.groupEnd();
console.group('2 task');
console.log('Напишіть програму, яка запитує у користувача радіус кола, а потім обчислює та виводить площу і периметр (довжину кола). Підтвердіть розрахунок за допомогою confirm.');
console.log(Math.PI);
const radiusCircle = prompt('Введіть радіус кола.');
if (confirm('Ви хочете знайти радіус та площу і периметр кола?')) {
    circleArea = 3.141592653589793 * Number(radiusCircle) ** 2;
    circleLength = 2 * 3.141592653589793 * Number(radiusCircle);
    alert('Площа кола дорівнює - ' + circleArea + '.' + '\n'
        + 'Периметр кола дорівнює - ' + circleLength + '.');
}
console.groupEnd();
console.group('3 task');
console.log("Напишіть програму, яка запитує у користувача довжину ребра куба, а потім обчислює та виводить об'єм куба. Підтвердіть розрахунок за допомогою confirm.");
const rebroCuba = prompt('Введіть довжину ребра куба.');
if (confirm("Ви дійсно хочете обчислити об'єм куба?")) {
    cubeVolume = Number(rebroCuba) ** 3
    alert("Об'єм куба - " + cubeVolume + '.')
}
console.groupEnd()
console.group('4 task')
console.log("Напишіть програму, яка запитує у користувача радіус основи та висоту циліндра, а потім обчислює та виводить його об'єм. Підтвердіть розрахунок за допомогою confirm.");
const cylinderRadius = prompt('Введіть радіус основи циліндра.');
const cylinderWidth = prompt('Введіть висоту циліндра.');
if (confirm("Ви хочете обчислити об'єм циліндра?")) {
    cylinderVolume = 3.141592653589793 * Number(cylinderRadius) ** 2 * Number(cylinderWidth);
    alert("Об'єм циліндра дорівнює: " + cylinderVolume + '.')
}
console.groupEnd();
console.group('5 task');
console.log('Напишіть програму, яка  за допопмогою confirm запитує у користувача чи хоче він привітатися англійською мовою. Якщо користувач погоджується - виводите привітання англійською, інакше - українською.');
if (confirm('Чи хочете ви привітатися англійською мовою?')) {
    alert('Hi!');
} else {
    alert('Привіт!');
}
console.groupEnd();
console.group('6 task');
console.log('Напишіть програму, яка запитує у користувача суму рахунку і відсоток чайових, які він хоче залишити. Використовуйте confirm, щоб переконатися, що користувач хоче зробити розрахунок, і alert, щоб показати результат(скільки усього грошей він заплатить разом з чайовими) або повідомлення про скасування.');
const scoreSum = prompt('Введіть суму рахунку.');
const tipProcent = prompt('І введіть відсоток чайових.');
if (confirm('Ви дійсно хочете зробити розрахунок?')) {
    allSum = Number(scoreSum) + Number(tipProcent);
    alert('Вам потрібно заплатити - ' + allSum + ' грн.' + '\n'
        + 'Сума - ' + scoreSum + ' грн.' + '\n'
        + 'Відсоток - ' + tipProcent + ' грн.');
} else {
    alert('Ви скасували операцію.');
}
console.groupEnd();
console.group('7 task');
console.log('Напишіть програму, яка запитує у користувача, скільки грошей він відкладає на своє хобі за тиждень. Використовуйте confirm, щоб запитати, чи хоче він розрахувати витрати за місяць, і alert для показу результату.');
const userHobby = prompt('Скільки грошей ви відкладаєте на своє хобі за тиждень?');
if (confirm('Чи хочете ви розрахувати витрати за місяць?')) {
    monthCosts = Number(userHobby) * 4;
    alert('За місяць ви витрачаєте на хобі - ' + monthCosts + ' грошей.');
} else {
    alert('За тиждень ви відкладаєте на своє хобі - ' + userHobby + ' грошей.');
}
console.groupEnd();
console.group('8 task');
console.log('Напишіть програму, яка запитує у користувача, скільки він платить за інтернет щомісяця. Використовуйте confirm, щоб запитати, чи хоче він розрахувати витрати за рік, і alert, щоб показати результат');
const userInternet = prompt('Скільки ви платите за інтернет щомісяця?');
if (confirm('Чи хочете ви розрахувати витрати за рік?')) {
    yearInternet = Number(userInternet) * 12;
    alert('Ваші витрати за рік - ' + yearInternet + ' грн.');
}
console.groupEnd();

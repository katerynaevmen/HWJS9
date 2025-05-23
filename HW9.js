// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        const result = `${i + 1} - ${array[i]}`;
        newArray.push(result);
    }
    return newArray;
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function(message, pricePerWord) {
    const newMessage = message.split(" ");
    const fullPrice = newMessage.length*pricePerWord;
    // let res = 0;
    // for (let i = 0; i < newMessage.length; i += 1) {   //за допомогою цикла фор
    //     const elem = newMessage[i];
    //     res = newMessage[i].length*pricePerWord;
    // }
    // return res
    return fullPrice;
}

const textToEngrave = "jdhsad jshfkjsdh sjd jshdjs jshdj";
const price = 10;
console.log(calculateEngravingPrice(textToEngrave,price));

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function(string) {
    const stringArray = string.split(" ");
    let longestWord = stringArray[0];
    for (let i = 0; i < stringArray.length; i += 1) {
        const element = stringArray[i].length;
        if (longestWord = element) {
            longestWord = `найдовше слово ${stringArray[i]}`;
        }
    }
    return longestWord;
}

const newString = "quwh wueiopiwe wfjkjf jdsik djfkdkkkkkkkkkk";
console.log(findLongestWord(newString));

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
const formatString = function(string) {
    let message = "";
    if (string.length <= 40) {
        message = string;
    } else {
        message = string.slice(0, 40)+"...";
    }
    return message;
    }
const newFormatString = "djfndjfh oweiwoei dsnmfm dnfkdjf dfnjjfkjfkjgfj";
const formatString1 = "jsjfj jfgthb jgtyu jgrrty gtyivpifbu jr";
console.log(formatString(formatString1));
console.log(formatString(newFormatString));

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
    
const checkForSpam = function(message) {
    let value = "";
    if (message.includes("spam")) {
        value = true;
    } else if (message.includes("sale")){
        value = true;
    } else {
        value = false;
    }
    return value;
}

const string = "spam";
const srting2 = "sale";
const stringTrue = "mes";
const stringTrue2 = "mnfd";
console.log(checkForSpam(string));
console.log(checkForSpam(srting2));
console.log(checkForSpam(stringTrue));
console.log(checkForSpam(stringTrue2));

// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.
// let input;
// const numbers = [];
// let total = 0;

// const inputtingNumbers = function(input, numbers) {
//     let total = 0;
//     return total;
// }

let input1;
let total = 0;
const numbers1 = [];
numbers1.push(input1);

console.log(numbers1);
// console.log(inputtingNumbers(input1, numbers1));
console.log(input1);


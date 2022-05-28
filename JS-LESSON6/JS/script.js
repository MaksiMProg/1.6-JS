//1)let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"] Перебрать массив. Имена, содержащие подстроку "а", добавить в новый массив "teamA"; подстроку "H" в новый массив "teamH" Регистр важен

let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
let teamA = [];
let teamH = [];
harryPotterTeam.forEach(item => {
    if (item.includes('a')) {
        teamA.push(item);
    }
    if (item.includes('H')) {
        teamH.push(item);
    }
});
console.log(`Команда A: ${teamA}. Команда H: ${teamH}.`);

//2) let arr = [6, 3, "ten", 1, true, "4"]Получите и выведите в консоль сумму и произведение всех числовых значений данного массива

let arr = [6, 3, "ten", 1, true, "4"];
let devide = 1;
let sum = 0;
arr.forEach(item => {
    if (typeof item === 'number') {
        devide *= item;
        sum += item;
    }
});
console.log(`Сумма чисел массива:${sum}. Произведение чисел массива:${devide}.`);


//3)  Создайте функцию, которая в качестве аргумента принимает массивlet numArr = [1, 3, 5, 7, 9, 11] И возвращает новый массив с квадратами этих чисел

let numArr = [1, 3, 5, 7, 9, 11];

function getDoubleNums(arr) {
    let newArr = [];
    arr.forEach(item => {
        newArr.push(item * item);
    });
    return newArr;
}
console.log(getDoubleNums(numArr));

//4) Найдите элемент массива с id: 101

let students = [
    { name: 'Alexey', id: 123, marks: 9 },
    { name: 'Vitalik', id: 101, marks: 5 },
    { name: 'Tanya', id: 200, marks: 7 },
    { name: 'Sasha', id: 115, marks: 10 }
];
students.forEach(item => {
    if (item.id === 101) {
        console.log(item);
    }
});

//5) Дополнить массив недостающими типами данных (используя уже другой метод)

let javaScriptTypes = ["number", "null", "undefined", "string"];
let javaScriptTypes2 = ["bigint", "boolean", "object", "symbol"];
// 5-1
javaScriptTypes.unshift("bigint", "boolean", "object", "symbol");
console.log(javaScriptTypes);

// 5-2
// while (javaScriptTypes2.length > 0) {
//     javaScriptTypes.push(javaScriptTypes2.pop());
// }

// 5-3

//let result = javaScriptTypes.concat(javaScriptTypes2);


//6) Заменить последний элемент на "Jo Malone" учитывая что мы не знаем сколько у нас элементов массива

// 6-1
let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];
parfume.splice(parfume.length - 1, 1, 'Jo Malone');
console.log(parfume);

// 6-2
//parfume[parfume.length - 1] = 'Jo Malone';
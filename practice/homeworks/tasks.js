// Написать и проверить функции
// 1. Принимает 2 аргумента, 3й аргумент не обязателен - если он есть, то функция возвращает сумму первых двух аргументов,
// иначе - разницу.

function calculate(x, y, operation = 'difference' ) {
    if (operation === 'sum') {
        return x + y
    } else if (operation = 'difference') {
        return x - y
    }
}

let resultSum = calculate(8,3)
console.log('Sum:  ', resultSum)
let resultDiff = calculate(8,3)
console.log('difference',resultDiff)

// 2. Определить сколько раз каждый элемент встречается в массиве. Оформить ввиде функции, принимающей любой массив
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

function countOccurrences(arr) {
    const occurrences = {};

    arr.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });

    return occurrences;
}

const result = countOccurrences(fruits);

console.log(result);


// 3. Получить единый массив из любимых пицц каждого друга - т.е. массив только из пицц

const friends = [
    { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
    { name: 'mike', pizzas: ['salami', 'margarita'] },
    { name: 'stas', pizzas: ['meat'] },
    { name: 'anna', pizzas: ['fish'] }
];

function getAllFavoritePizzas(friends) {
    return friends.map(friend => friend.pizzas).flat();
}

const favoritePizzas = getAllFavoritePizzas(friends);
console.log(favoritePizzas);

// 4. Записать строку (символы строки) в обратном порядке
const myStr = 'pizza';
const reversedStr = myStr.split('').reverse().join('');

console.log(reversedStr);

// 5. функция принимает число n, вернуть количество положительных нечетных чисел меньше n

function countPositiveOddNumbers(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return;
    }

    let count = 0;

    for (let i = 1; i < n; i += 2) {
        count++;
    }

    return count;
}

// Пример использования:
const resultN = countPositiveOddNumbers(10);
console.log('resultN   ',resultN);  // Выведет: 4 (1, 3, 5, 7)


// 6. Функция принимает 2 аргумента - 2 других функции, также есть счетчик количества вызовов функции, каждый
// четный вызов - вернуть результат работы первой функции(1 аргумент), нечетный - второй.

function alternateFunctions(func1, func2) {
    let callCount = 0;

    return function (arg) {
        callCount++;

        if (callCount % 2 === 0) {
            return func1(arg);
        } else {
            return func2(arg);
        }
    };
}


function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

const alternateFunc = alternateFunctions(square, double);

console.log(alternateFunc(5)); 

console.log(alternateFunc(3));  

console.log(alternateFunc(4));
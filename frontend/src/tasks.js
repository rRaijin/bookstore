// Написать и проверить функции
// 1. Принимает 2 аргумента, 3й аргумент не обязателен - если он есть, то функция возвращает сумму первых двух аргументов,
// иначе - разницу.

function calculate(a, b, operation = 'difference') {
    if (operation === 'sum') {
        return a + b;
    } else if (operation === 'difference') {
        return a - b;
    } 
}

let resultSum = calculate(5, 3, 'sum');
// console.log("Сумма:", resultSum);  

let resultDifference = calculate(5, 3);
// console.log("Разница:", resultDifference); 

// 2. Определить сколько раз каждый элемент встречается в массиве. Оформить ввиде функции, принимающей любой массив
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

function countOccurrences(arr) {
    const occurrences = {};

    arr.forEach(element =>{
        if (occurrences[element]) {
            occurrences[element]++
        } else {
            occurrences[element] = 1
        }
    })
    return occurrences
}
    const resFruit = countOccurrences(fruits)
    // console.log(resFruit)

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

const pizzas = friends.reduce(
    // 1 iteration => accum = [], current => { name: 'alex', pizzas: ['cheese', 'pepperoni'] }
    // 2 iteration => accum = ['cheese', 'pepperoni'], current => { name: 'mike', pizzas: ['salami', 'margarita'] },
    (accum, current) => {
        return [...accum, ...current.pizzas];
    },
    []
);
// console.log('pizzas with reduce: ', pizzas);
const mytest = friends.reduce((acc, item) => {
    // console.log('debug: ', acc, item)
    if (acc[item['name']]) {
        // acc[item.name].cnt = item.pizzas.length
        acc[item['name']].cnt = item.pizzas.length
    }
    return acc
}, {});
// console.log('mt: ', mytest)

const favoritePizzas = getAllFavoritePizzas(friends);
// console.log(favoritePizzas);

// 4. Записать строку (символы строки) в обратном порядке
const myStr = 'pizza';
// const myStr2 = 'My name is Roman.';
// console.log('str: ', myStr2)
// console.log('splitted: ', myStr2.split('a'))
const reversedStr = myStr.split('').reverse().join('');

// console.log(reversedStr);

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
// console.log('resultN   ',resultN);  // Выведет: 5 (1, 3, 5, 7, 9)


// 6. Функция принимает 2 аргумента - 2 других функции, также есть счетчик количества вызовов функции, каждый
// четный вызов - вернуть результат работы первой функции(1 аргумент), нечетный - второй.

function alternateFunctions(func1, func2) {
    let callCount = 0;
    
    return function (arg) {
        callCount++;

        if ((callCount - 1) % 2 === 0) {
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

// console.log(alternateFunc(5)); 

// console.log(alternateFunc(3));  

// console.log(alternateFunc(4));




/*******************18.02 Паттерны проектирования*******************/
// Constructor
const Person = function(name, age, favFood) {
    this.name = name;
    this.age = age;

    // выполняется тернарный оператор, проверяющий на существование(что параметр был передан)
    // undefined, null, false -> вернут false
    this.favFood = favFood ? favFood : 'cake'; 
};

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and my favorite food is ${this.favFood}`);
}

const bob = new Person('Bob', 22, 'Chicken');
const bob2 = new Person('Bob', 22);
// bob.greet();
// bob2.greet();
Person.prototype.someMethod = function() {
    console.log('OK2');
}
// bob.someMethod();


class Vehicle {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.x = 10;
    }

    getSpecs() {
        console.log(`Type: ${this.type}, Color: ${this.color}, ${this.x}`);
    }

    someMethod() {
        console.log('OK')
    }
};

const someTruck = new Vehicle('Truck', 'red'); // для создания экземпляра класса обязательно ключевое слово "new"
someTruck.getSpecs(); // someTrack - это экземпляр!!! класса!!!
const someTruck2 = new Vehicle('Truck2', 'black');
someTruck2.getSpecs();
console.log('some1: ', someTruck.color);
// someTruck.someMethod();

// HW. Task 1: Написать класс, создающий автомобили, принимает минимум 4 параметра: название, 
// цвет(если цвета нет - черный), год выпуска, тип(грузовая, легковая, пассажирское). У каждого авто должно быть 4 метода:
// метод, возвращаюший описание авто; метод, возвращающий значение грузоподъемности(только для грузовых);
// метод, возвращающий значение скорости(для всех); метод, возвращающий количество пассажирских мест(для пассажирских)


// Module
var myModule = function() {
    // Приватная переменная
    var memes = ['cats', 'doge', 'harambe'];
      
    var getMemes = function() {
           return memes;
    };

    // возвращает то, к чему вы хотите разрешить доступ в объекте
    // то, как он это возвращает действительно делает его показателем модульного шаблона проектирования
    return {
        getMemes: getMemes
    };
};

// показать еще самовызывающиеся функции***

// console.log(myModule().getMemes()); // массив мемов
// console.log(myModule().memes); // undefined

class Car {
    constructor(name, year, type, color = "черный") {
        this.name = name;
        this.color = color;
        this.year = year;
        this.type = type;
        this.carryingCapacityValue = null; 
    }

    description() {
        return `Автомобиль ${this.name}, цвет: ${this.color}, год выпуска: ${this.year}, тип: ${this.type}`;
    }

    setCarryingCapacity(carryingCapacity) {
        if (this.type === "грузовая") {
            this.carryingCapacityValue = carryingCapacity;
        } else {
            console.log("Грузовая машина не имеет грузоподъемности");
        }
    }

    carryingCapacity() {
        if (this.type === "грузовая") {
            return this.carryingCapacityValue ? this.carryingCapacityValue : "Грузоподъемность не установлена";
        } else {
            return "Грузовая машина не имеет грузоподъемности";
        }
    }

    speed() {
        return 180; 
    }

    passengerCapacity() {
        if (this.type === "пассажирское") {
            return 5; 
        } else {
            return "Пассажирское авто не имеет пассажирских мест";
        }
    }
}

let car1 = new Car("Toyota Camry", 2020, "легковая", "серебристый");
console.log(car1.description());
console.log("Скорость:", car1.speed());
car1.setCarryingCapacity(1000);
console.log("Грузоподъемность:", car1.carryingCapacity());

let car2 = new Car("Газель", 2015, "грузовая", "белый");
console.log(car2.description());
console.log("Скорость:", car2.speed());
car2.setCarryingCapacity(2000); 
console.log("Грузоподъемность:", car2.carryingCapacity());

let car3 = new Car("Ford Transit", 2018, "пассажирское", "синий");
console.log(car3.description());
console.log("Количество пассажирских мест:", car3.passengerCapacity());
console.log("Скорость:", car3.speed());
car3.setCarryingCapacity(1500); 
console.log("Грузоподъемность:", car3.carryingCapacity());


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

/*****************************************************
**********************CONSTRUCTOR*********************
*****************************************************/
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
// someTruck.getSpecs(); // someTrack - это экземпляр!!! класса!!!
const someTruck2 = new Vehicle('Truck2', 'black');
// someTruck2.getSpecs();
// console.log('some1: ', someTruck.color);
// someTruck.someMethod();

// HW. Task 1: Написать класс, создающий автомобили, принимает минимум 4 параметра: название, 
// цвет(если цвета нет - черный), год выпуска, тип(грузовая, легковая, пассажирское). У каждого авто должно быть 4 метода:
// метод, возвращаюший описание авто; метод, возвращающий значение грузоподъемности(только для грузовых);
// метод, возвращающий значение скорости(для всех); метод, возвращающий количество пассажирских мест(для пассажирских)

// Homework

// Метод, отвечающий за возвращение значения свойства или результата какой-то обработки данных
// называется геттером и принято такой метод описывать в кэмелкейс нотации начиная с "get"
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

// let car1 = new Car("Toyota Camry", 2020, "легковая", "серебристый");
// console.log(car1.description());
// console.log("Скорость:", car1.speed());
// car1.setCarryingCapacity(1000);
// console.log("Грузоподъемность:", car1.carryingCapacity());

// let car2 = new Car("Газель", 2015, "грузовая", "белый");
// console.log(car2.description());
// console.log("Скорость:", car2.speed());
// car2.setCarryingCapacity(2000); 
// console.log("Грузоподъемность:", car2.carryingCapacity());

// let car3 = new Car("Ford Transit", 2018, "пассажирское", "синий");
// console.log(car3.description());
// console.log("Количество пассажирских мест:", car3.passengerCapacity());
// console.log("Скорость:", car3.speed());
// car3.setCarryingCapacity(1500); 
// console.log("Грузоподъемность:", car3.carryingCapacity());



const x = 1;
/*****************************************************
************************MODULE************************
*****************************************************/
// основное назначение реализовать инкапсуляцию.

var myModule = function() {
    // Приватная переменная
    var memes = ['cats', 'doge', 'harambe', x];
      
    var getMemes = function() {
           return memes;
    };

    const setSome = function() {
        memes.push('test'); // если сделать return memes.push('test'); --> вернет результат работы метода пуш, т.е. длтну нового массива
        return memes // ['cats', 'doge', 'harambe', 1, 'test'];
    }

    // возвращает то, к чему вы хотите разрешить доступ в объекте
    // то, как он это возвращает действительно делает его показателем модульного шаблона проектирования
    console.log('mem: ', memes);
    return {
        getMemes111: getMemes,
        setSome: setSome
    };
};
// console.log('y: ', myModule().setSome())
// console.log(myModule().getMemes111()); // массив мемов
// console.log(myModule().memes); // undefined


// Создаем объект, хранящий настройки для модуля ниже, применяется паттерн Singleton через функцию
const module2settings = {
    accessPassword: 'qwerty',
    throttlingCnt: 5
};
Object.freeze(module2settings);

// const a1 = {a: 1};
// a1['a'] = 2;
// console.log('a1: ', a1)

// module2settings['accessPassword'] = '123'
// console.log('mod1: ', module2settings)

const MyModule2 = () => {
    let callCnt = 0;
    let stackOverflow = false;
    const blockMessage = 'Call blocked by system';

    const checkAndIncreaseCallCnt = () => {
        console.log('cc: ', callCnt)
        if (callCnt + 1 > 5) {
            stackOverflow = true;
            const timerID = setTimeout(() => {
                console.log('use');
                stackOverflow = false;
                callCnt = 0;
                clearTimeout(timerID);
            }, 2000);
        } else {
            callCnt++;
        }
    }

    const getCallCntvalue = (password) => {
        if (password && password === module2settings.accessPassword) {
            if (!stackOverflow) {
                return console.log('Общее количество вызовов методов модуля: ', callCnt);
            } else {
                return console.log('Вызов невозможен!!! ', blockMessage, stackOverflow);
            }
        } else {
            return 'Access not granted!';
        }
    }

    const someMethod1 = () => {
        if (!stackOverflow) {
            console.log('Вызван метод 1');
            checkAndIncreaseCallCnt();
        } else {
            console.log(blockMessage);
        }
    }

    const someMethod2 = () => {
        if (!stackOverflow) {
            console.log('Вызван метод 2');
            checkAndIncreaseCallCnt();
        } else {
            console.log(blockMessage);
        }
    }

    return {
        getCallCntvalue,
        someMethod1,
        someMethod2
    }
};

const moduleCalled = MyModule2();
// moduleCalled.someMethod1();
// moduleCalled.someMethod1();
// moduleCalled.someMethod2();
// moduleCalled.getCallCntvalue('qwerty');
// moduleCalled.someMethod2();
// moduleCalled.someMethod2();
// moduleCalled.someMethod2();
// moduleCalled.someMethod2();
// moduleCalled.getCallCntvalue('qwerty');

// Дополнительный пример
// setTimeout(() => {
//     console.log('OK!!!!!')
// }, 5000);
// console.log('11111');


// let timer2 = setTimeout(() => {
//     moduleCalled.someMethod1();
//     moduleCalled.getCallCntvalue('qwerty');
//     clearTimeout(timer2);
// }, 5000);
// moduleCalled.someMethod1();
// moduleCalled.someMethod2();
// moduleCalled.getCallCntvalue('qwerty');
// console.log('finish');

// let timer3 = setTimeout(() => {
//     moduleCalled.someMethod1();
//     moduleCalled.getCallCntvalue('qwerty');
//     console.log('t2: ', timer2);
//     clearTimeout(timer3);
// }, 10000);

// console.log('Наглядный пример почему нужно следовать правилам написания кода. Смотри ошибку в браузере')
/*
    ХОРОШАЯ И ПРОСТАЯ СТАТЬЯ ПРО ПАТТЕРН МОДУЛЬ - https://habr.com/ru/companies/ruvds/articles/419997/
*/

// самовызывающаяся функция
(function (m) {
    const n = 4;
     
    var res = 1;
    for(var i=1; i<=n; i++)
        res *=i;
    // console.log("Факториал числа " + m + " равен " + res);
}(x));

// функция-генератор
function* idMaker() {
    var index = 0;
    while (index < 3) yield index++;
};
  
var gen = idMaker();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // undefined
// console.log(gen.next().value); // undefined



/*****************************************************
***********************SINGLETON**********************
*****************************************************/

// Синглтон — это шаблон проектирования, который гарантирует, 
// что у класса будет только один неизменяемый экземпляр. 
// Проще говоря, шаблон Singleton состоит из объекта, который нельзя скопировать или изменить. 
// Это часто бывает полезно, когда мы хотим иметь какую-то неизменяемую единую точку истины для нашего приложения.

// Вариант через обычный объект
const Config = {
    start: () => console.log('App has started'),
    update: () => console.log('App has updated')
};
  
// We freeze the object to prevent new properties being added and existing properties being modified or removed
Object.freeze(Config);
// Config.start(); // "App has started"
// Config.update(); // "App has updated"
// Config.name = 'Robert'; // We try to add a new key
// console.log(Config); // And verify it doesn't work: { start: [Function: start], update: [Function: update] }

// Вариант через класс
// class Config {
//     constructor() {}
//     start(){ console.log('App has started') }  
//     update(){ console.log('App has updated') }
// }
  
// const instance = new Config();
// Object.freeze(instance);



/*****************************************************
************************FACTORY***********************
*****************************************************/

// We have a class or "concrete factory" for each vehicle type
class Car1 {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
}

// And and abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car1()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car") // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck") // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle") // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }


/*****************************************************
************************BUILDER***********************
*****************************************************/

// Шаблон Builder используется для создания объектов «по шагам». 
// Обычно у нас есть функции или методы, которые добавляют к нашему объекту определенные свойства или методы.

console.log('Наш автомобиль: ', car);
// console.dir(car); // тоже интересный метод консоли

// These functions take an object as parameter and add a method to them
const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`);
}

const addSpeechAbility = obj => {
    obj.saySmthg = () => console.log(`${obj.name} walks the walk and talks the talk!`);
}

addFlyingAbility(car);
car.fly();

// Такие функции целесообразно группировать как методы внутри класса
// Для прямого доступа(БЕЗ НЕ ОБХОДИМОСТИ СОЗДАНИЯ ЭКЗЕМПЛЯРА) к этому методу устанавливается static
class Extender {
    static addXValue = obj => {
        return obj.x = 45;
    }
};
Extender.addXValue(car);
// console.log('car with x: ', car.x);


/*****************************************************
************************DECORATOR*********************
*****************************************************/
// function decorator (value, context) {
//     console.log("decorated value is:", value);
//     console.log("context is: ", context);
// }
  
// @decorator
// class C {
//     @decorator // decorates a class field
//     p = 5;

//     @decorator // decorates a method
//     m() {}

//     @decorator // decorates a getter
//     get x() {}

//     @decorator // decorates a setter
//     set x(v) {}
// }
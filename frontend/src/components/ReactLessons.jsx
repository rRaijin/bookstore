export default (props) => {
    const { genres, authors } = props;

    // item.genre = [1, 2, 3]
    // g = {id: 4, title: 'Детектив'}
    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);

    // внутри filter, в скобочках справа от стрелки стоит условие, возвращает boolean, если true -- данный элемент добавляется в возвращаемые результаты
    const bookAuthorWithFilter = authors.filter(k => k.id === item.author)[0]; // filter возвращает отфильтрованный массив
    // console.log('bookAuthorWithFilter: ', bookAuthorWithFilter);
    const bookAuthorWithFind = authors.find(k => k.id === item.author); // find возвращает первое найденное вхождение в массив
    // console.log('bookAuthorWithFind: ', bookAuthorWithFind);

    // Полная запись фильтра:
    const bookAuthorFullFilter = authors.filter(k => {
        return k.id === item.author;
    })[0];


    // *****ДОМАШНЕЕ ЗАДАНИЕ***** ==> Решение писать под каждой задачей и выводить результат в консоль, как показано на 1м упражнении

    // ***PART 1***
    const task1 = [1, 'a', 5, null, false, 46, 1];
    // Задача 1 - Из массива - task1 - вернуть массив с числом 1
    // Решение:
    const solution_1 = task1.filter(x => x === 1);
    // console.log('solution_1: ', solution_1);

    // Задача 2 - Из массива - task1 - вернуть массив только чисел
    // Решение:
    const solution_2 = task1.filter(x => typeof x === "number");
    // console.log('solution_2: ', solution_2);

    // Задача 3 - Из массива - task1 - вернуть массив только чисел и строк
    // Решение:
    const solution_3 = task1.filter(x => typeof x === "number" || typeof x === "string");
    // console.log('solution_3: ', solution_3);


    // метод массива, который проверяет переданный аргумент, что он состоит в этом массиве
    const filteredNumbersAndString = task1.filter(x => ['number', 'string'].includes(typeof x));
    // console.log('filteredNumbersAndString: ', filteredNumbersAndString);

    // ***PART 2***
    const myObjects = [1, 'a', {a: 1, b: 'cat'}, {}, {}, {a: 2, b: 45, c: 11}, {a: 1}];
    // Задача 4 - Из массива - myObjects - вернуть массив объектов
    // Решение:
    const solution_4 = myObjects.filter(x => typeof x === 'object');
    // console.log('solution_4: ', solution_4);

    // Задача 5 - Из массива - myObjects - вернуть массив НЕ ПУСТЫХ объектов
    // Решение:
    /*
        Итерироваться могут только строки и массивы, следовательно только они имееют свойство length
    */
    const solution_5 = myObjects.filter(x => typeof x === 'object' && Object.keys(x).length != 0);
    // console.log('solution_5: ', solution_5);

    // Задача 6 - Из массива - myObjects - вернуть массив объектов, у которых больше 2х свойств
    // материал для задачи 6 -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // Решение:
    const solution_6 = myObjects.filter(p => typeof p === 'object' && Object.values(p).length > 2);
    // console.log('solution_6: ', solution_6);

    /*
        typeof вернет строковое представление типа переменной
        И ТОЛЬКО когда выполняется условие слева от оператора лог. "и" (&&) тогда идет проверка правой части
    */
    /*
        Пример передачи вызова функции в качестве значения свойства для объекта
        const valA = () => 4 - 3;
        const valB = () => 1 + 1;
        const y = () => ({a: 1, b: 2}); // возвращает объект
        const y = () => ({a: valA(), b: valB()}); // возвращает объект, значения вычислены, если вызова функции не будет - значением будет сама функция
        
        const propertyx2 = Object.keys(y()); // сначала выполняется внутренняя ф-я y(), потом родительская
        function myPPP() {return 'kolbasa'} // объявление
        console.log('my function call 1: ', myPPP()); // вызов, вернет результат
        console.log('my function call 2: ', myPPP); // распечатает саму функцию
        console.log('propertyX2 : ', propertyx2);
        const propertyY2 = Object.values(y());
        console.log('propertyY2 : ', propertyY2);
    */

    /*
        function propertyx1() {console.log('OK!!!')} // стандартная ф-я
        const propertyx1 = () => {console.log('OK!!!')} // чистая ф-я, без контекста
    */

    // ***PART 3***
    // Задача 7 - Из массива - myObjects - НАЙТИ объект, у которого для одного из свойств значение 'cat'
    // материал для задачи 7 -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    // Решение:
    const solution_7 = myObjects.find(x => {
        const isObject = typeof x === 'object'; // должен вернуть true
        const objValues = Object.values(x);
        const exists = objValues.indexOf('cat') !== -1; // проверяем при помощи метода indexOf что переданній аргумент является частью нашего массива [1, 'cat']
        if (isObject && exists) {
            return true
        }
    })    
    // console.log('solution_7: ', solution_7);

    const task3 = [
        {
            a: 12,
            b: 'dog'
        },
        {
            a: 'cat',
            b: 5,
            c: 'abc'
        },
        {
            d: 90,
            a: 'tea'
        },
        {
            name: 'cat'
        },
        45,
        {x: 1, y: 34}
    ];

    // Задача 8: Вывести список объектов, у которых одно из свойств равно 'cat
    // Решение:
    const solution_8 = task3.filter(x => {
        const isObject = typeof x === 'object'; 
        const objValues = Object.values(x);
        const exists = objValues.indexOf('cat') !== -1; 
        if (isObject && exists) {
            return true
        }
    })    
    // console.log('solution_8: ', solution_8);

    // Задача 9: Вывести список объектов, у которых все свойства равны числам
    // Решение:
    const solution_9 = task3.filter(x => {
        const isObject = typeof x === 'object';
        if (isObject) {
            const objValues = Object.values(x);
            // console.log('results: ', objValues);
            // const d = [1, 3, 23, 'a'];
            const allNUmbers = objValues.length === objValues.filter(k => typeof k === 'number').length;
            return allNUmbers;
        } else {
            return false
        }
    })    
    // console.log('solution_9: ', solution_9);

    // Задача 10: Получить объект, у которого свойство "a" равно 12
    // Решение:
    const solution_10 = task3.find(x => x.a === 12);
    // console.log('solution_10: ', solution_10);

    // Задача 11: Получить объект, у которого свойство "a" равно 15
    // Решение:
    const solution_11 = task3.find(x => x.a === 15);
    // console.log('solution_11: ', solution_11);

    // ***PART 4***
    // Задача 12: добавить еще одно поле для фильтра, и возвращать список книг только по его результатам, фильтр по цене -
    // показать результаты, которые дешевле, чем введенное число
    // Решение:
    const solution_12 = books.filter(x => {
        return x.price < myInputPrice;
    });
    // console.log('solution_12: ', solution_12);

    // Задача 13: добавить еще одно поле по цене (т.е. это уже 3 поля у нас будет - поиск по названию, по цене - дешевле, 
    // чем введенное значение, ОБРАТИТЬ ВНИМАНИЕ КАКОЙ МАССИВ МАПАЕТСЯ), фильтр должен учитывать 2(!) условия по цене, в
    // первом поле вводится нижняя цена, во втором - верхняя, выводим книги в этом диапазоне
    // Решение:
    const [myInputPriceMin, setMyInputPriceMin] = useState(0);
    const [myInputPriceMax, setMyInputPriceMax] = useState(10000);
    const solution_13 = books.filter(x => {
        return x.price > myInputPriceMin && x.price < myInputPriceMax;
    });
    // console.log('solution_13: ', solution_13);

    // ***Задача 14: условие объединяет все 3 поля, т.е. и по цене и по названию.
    // Решение:
    const [myInputName, setMyInputName] = useState('');
    const solution_14 = books.filter(x => {
        return (
            x.price > myInputPriceMin && // цена больше чем указанная
            x.price < myInputPriceMax && // цена меньше чем указанная
            (x.bookName.includes(myInputName) || myInputName === '') && // название включает в себя данные буквы
            (Number(selectedGenre) === 0 || x.genre.indexOf(Number(selectedGenre)) !== -1)
        )
    });
    // console.log('solution_14: ', solution_14);

    // Задача 15: Вывести все книги, у которых есть хотя бы один жанр из массива myStrArr
    const myStrArr = [1, 2, null, {}, 'abc', 'zxc', 'cat'];
    const solution_15 = books.filter(book => {
        return book.genre.some(g => myStrArr.includes(g))
    })
    // console.log('solution_15: ', solution_15);

    // Задача 16: Вывести одну книгу, у которой название начинается с "Приключения"
    // const solution_16 = books.filter(book => // данное решение вернет все книги у которых данное слово есть в названии(с учетом регистра)
    //     book.bookName.includes('Приключения')
    // );
    const solution_16 = books.filter(book => book.bookName.startsWith('Приключения'));
    // console.log('solution_16:  ', solution_16);

    // ***Задача 17: Вывести список книг, у которых в описании(поле "description") есть слово "супер" без учета регистра(загуглить что такое toLowerCase())
    const solution_17 = books.filter((x) =>  {
        // const toLowerCaseDes = x.description.toLowerCase()

        // old method
        // const toLowerCaseDes = x && x.hasOwnProperty('description') && typeof x.description === 'string' && x.description.toLowerCase();

        // мы уверены что описания либо нету либо оно строка
        const toLowerCaseDes = x?.description?.toLowerCase();
        return toLowerCaseDes && toLowerCaseDes.includes('супер');
    })
    console.log('solution_17: ', solution_17);

    // ***PART 5***
    const part5 = [
        {
            a: 1,
            b: {
                a: 1,
                b: 'dog'
            }
        }, {
            a: 'dog',
            b: 12
        }
    ];

    // Задача 18: Найти объект, у которого значением свойства является другой объект со значением 'dog'
    // Решение:
    const solution_18 = part5.find(obj => {
        return typeof obj.b === 'object' && obj.b.b === 'dog';
    })
    // console.log('solution_18  ', solution_18);

    const part5_1 = [
        {x: 1, y: 'abc', z: null},
        42,
        'house',
        {a: 'dog'}
    ];

    // Задача 19: У нас есть 2 массива part5 и part5_1. Нужно вернуть массив, состоящий из элементов, у которых значение a равно dog
    // Подсказка: массивы сперва нужно объединить, а затем применить фильтр
    // Материал для д/з: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    const solution_19 = part5.concat(part5_1);
    const filteredArrayDog = solution_19.filter(d => d.a === 'dog');
    // console.log('filteredArrayDog:  ', filteredArrayDog);

    const arr1 = [1, 2, 3];
    const arr2 = [2, 4, 5];

    // Задача 20: Учимся гуглить. Нужно из двух массивов(arr1, arr2) получить один массив, состоящий из уникальных элементов
    // Решение:
    const myConcatedArr = arr1.concat(arr2);
    const mySet = new Set(myConcatedArr);
    // const x = [1, 2, 3];
    // const y = [...x];
    // x.push(4);
    // y.pop();
    // console.log('x: ', x, 'y: ', y);
    const solution_20 = [...mySet]; // [...new Set(arr1.concat(arr2))]
    // console.log('solution_20  ',solution_20)

    // Задача 21: объединить массивы part5 и arr1, и сделать так чтобы первым элементом нового массива(т.е. индекс = 0) была число 3
    const solution_21 = arr1.concat(part5);
    solution_21.unshift(3);
    console.log('solution_21  ',solution_21)
    // const conct2 = arr1.reverse().concat(part5);

    return <div>Lessons</div>
}
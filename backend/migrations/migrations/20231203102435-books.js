import { ObjectId } from "mongodb";

export const up = async (db, client) => {
    const items = [
        {
            "bookName": "Приключения Тома Сойера",
            "description": "«Приключения Тома Сойера» — вышедшая в 1876 году повесть Марка Твена о приключениях мальчика, живущего в небольшом американском городке Сент-Питерсберг в штате Миссури.",
            "year": 1876,
            "price": 500,
            "author": new ObjectId('656c5721a638e3d6ea11708a'),
            "picture": "tom_soyer.jpg",
            "pages": 191,
            "genre": [
                new ObjectId('656c44b4506bd453ff5a07fc')
            ]
        },
        {
            "bookName": "Приключения Шерлока Холмса",
            "description": "Здесь будут жених, опасающийся мести бывшей возлюбленной, и невеста, брошенная в день венчания; загадочные апельсиновые зернышки и тайный код пляшущих человечков, смертоносный китобойный гарпун и рождественский гусь с сюрпризом…",
            "year": 1876,
            "price": 800,
            "author": new ObjectId('656c5721a638e3d6ea11708a'),
            "picture": "Adventures_of_sherlock_holmes.jpg",
            "pages": 160,
            "genre": [
                new ObjectId('656c44b4506bd453ff5a07fc')
            ]
        },
        {
            "bookName": "Поллианна",
            "description": "Обычное описание книги",
            "year": 1876,
            "price": 1800,
            "author": new ObjectId('656c5721a638e3d6ea11708a'),
            "picture": "poliana.jpg",
            "pages": 160,
            "genre": [
                new ObjectId('656c44b4506bd453ff5a07fc')
            ]
        },
        {
            "bookName": "Остров Сокровищ",
            "description": "«Остров Сокровищ» — роман шотландского писателя Роберта Стивенсона о приключениях, связанных с поиском сокровищ, спрятанных капитаном Флинтом на необитаемом острове.",
            "year": 1883,
            "price": 400,
            "author": new ObjectId('656c5721a638e3d6ea11708a'),
            "picture": "treasureIsland.jpg",
            "pages": 260,
            "genre": [
                new ObjectId('656c44b4506bd453ff5a07fc')
            ]
        },
        {
            "bookName": "Пять недель на воздушном шаре",
            "description": "Первый приключенческий роман Жюля Верна.",
            "year": 1863,
            "price": 1400,
            "author": new ObjectId('656c5721a638e3d6ea11708a'),
            "picture": "Five_weeks_in_a_hot_air_balloon.jpg",
            "pages": 360,
            "genre": [
                new ObjectId('656c44b4506bd453ff5a07fc')
            ]
        },
        {
            "bookName": "Двадцать тысяч льё под водой",
            "description": "Профессор Аронакс и его друзья волею судьбы оказываются на борту подводного судна «Наутилус», которым управляет загадочный капитан Немо.",
            "year": 1863,
            "price": 1200,
            "author": new ObjectId('656c5721a638e3d6ea11708a'),
            "picture": "twenty_thousand_leagues_under_the_sea.jpg",
            "pages": 360,
            "genre": [
                new ObjectId('656c44b4506bd453ff5a07fc')
            ]
        },
        {
            "bookName": "Маленький принц",
            "description": "Сказка рассказывает о Маленьком принце, который посещает различные планеты в космосе, включая Землю. Книга обращается к темам одиночества, дружбы, любви и утраты.",
            "year": 1943,
            "price": 200,
            "author": new ObjectId('656c5721a638e3d6ea11708a'),
            "picture": "a_little_prince.jpg",
            "pages": 60,
            "genre": [
                new ObjectId('656c44b4506bd453ff5a07fc')
            ]
        },
    ];

    return db.collection('books').insertMany(items);
}

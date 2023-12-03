export const up = async (db, client) => {
    const items = [
        {
          "firstName": "Марк",
          "lastName": "Твен",
          "userEmail": "marktwen@gmail.com",
          "isAuthor": true
        },
        {
            "firstName": "Джордж",
            "lastName": "Оруэлл",
            "userEmail": "djordjoruell@gmail.com",
            "isAuthor": true
        },
        {
            "firstName": "Артур",
            "lastName": "Конан Дойл",
            "userEmail": "konandoil@gmail.com",
            "isAuthor": true
        },
        {
            "firstName": "Элинор",
            "lastName": "Портер",
            "userEmail": "elionorporter@gmail.com",
            "isAuthor": true
        },
        {
            "firstName": "Роберт",
            "lastName": "Льюис Стивенсон",
            "userEmail": "luisstiwenson@gmail.com",
            "isAuthor": true
        },
        {
            "firstName": "Жуль",
            "lastName": "Верн",
            "userEmail": "juliewern@gmail.com",
            "isAuthor": true
        },
        {
            "firstName": "Антуан де",
            "lastName": "Сент-Экзюпери",
            "userEmail": "sentexuperi@gmail.com",
            "isAuthor": true
        }
    ];

    return db.collection('users').insertMany(items);
}

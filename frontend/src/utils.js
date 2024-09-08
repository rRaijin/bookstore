import { SERVER_URL } from './constants';

export function capitalizeFirstAndLast(str) {
    if (str.length === 0) {
      return str;
    }
    if (str.length === 1) {
      return str.toUpperCase();
    }
    const firstChar = str[0].toUpperCase();
    const lastChar = str[str.length - 1].toUpperCase();
    const middleChars = str.slice(1, str.length - 1);
    return firstChar + middleChars + lastChar;
}

export function checkNumber(param) {
    if (isNaN(param)) {
      console.log('Параметр не являеться числом')
    }
    else {
      if (param % 2 !== 0) {
        console.log('Параметр являеться не четным')
      } else {
          const myArray = [2, 8, 42]
          if (myArray.includes(param)) {
              console.log('Yes')
          } else {
              console.log('No')
          }
      }
    }
}

export const trimText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

export const fetchData = (url, callback) => {
    fetch(`${SERVER_URL}/api/${url}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {
        if (response.ok === true) {
            const results = await response.json();
            if (callback) {
                callback(results.items);
            }
        }
    }).catch((e) => {
        console.log('error: ', e);
    });
};

export const saveData = (url, data, callback) => {
    fetch(`${SERVER_URL}/api/${url}`, { // 'http://localhost:3001/api/books'
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (response) => {
        if (response.ok === true) {
            const results = await response.json();
            if (callback) {
                callback(results.items);
            }
        }
    }).catch((e) => {
        console.log('error: ', e);
    });
};

// Задача функции возвращать полный путь к изображению
// Изображение может отображаться из 2х разных мест:
// из временного места и из конкретной папки
export const getFilePath = (folder, fileName, isTemp = false) => {
    let result = SERVER_URL + '/uploads/' + folder + '/' + fileName;
    if (isTemp) {
        result = SERVER_URL + '/uploads/' + fileName;
    }
    return result;
};

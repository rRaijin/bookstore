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
        return text.slice(0, maxLength) + "...";
    }
    return text;
};

'use strict'

const checkLetterUppercase = (str) => {
    let word =  str;
    let res = '';

word = word.toLowerCase();
res = word[0].toUpperCase() + word.slice(1);

return res;
}

console.log(checkLetterUppercase('asTaNa'));
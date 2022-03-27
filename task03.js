'use strict'

const getBackString = (str) =>{
    return str.split("").reverse().join("");
}

console.log(getBackString('Привет мир!'))
'use strict'

const converterСurrenciesс = (a) => {
let eurCash = a;
let currencyUsd = 1.2;
let currencyRub = 73;
let cunrencyEur = 0;

eurCash = eurCash * currencyUsd;
cunrencyEur = eurCash * currencyRub;

return cunrencyEur;
}

console.log(converterСurrenciesс(1));
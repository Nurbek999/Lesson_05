'use strict'

const getCountDiscount = (countGoods , totalSumGoods) =>{
    if (countGoods > 10){
        totalSumGoods = totalSumGoods * 0.03;
    return totalSumGoods;
    }
}

const getTotalSumDiscount = (totalSumGoods) =>{
if (totalSumGoods > 30000){
    let totalSumBalance = totalSumGoods - 30000;
    let totalDiscountSum =  totalSumBalance * 0.15;
    return totalDiscountSum;
    }
}

const calculate = (totalSum, countGoods, wordDiscount) =>{

    const countDiscount = getCountDiscount(countGoods,totalSum);

    console.log('1 скидка, 3% на кол-во товаров больше 10:', countDiscount);

    const countDiscount15 = getTotalSumDiscount(totalSum);

    console.log('2 скидка, 15% на ост. сумму от 30000:', countDiscount15);

    let balanceSum = totalSum - countDiscount - countDiscount15;

    if(wordDiscount === 'METHOD'){
       let countDiscount10 =  totalSum * 0.1;
       let totalDiscountSum = totalSum - countDiscount - countDiscount15 - countDiscount10;
        console.log('3 скидка, 10% на Код Слово METHOD: ', countDiscount10);
        return totalDiscountSum;
    }if(wordDiscount === 'G3H2Z1' && balanceSum > 2000){
        let totalDiscountSum = balanceSum - 500;
        console.log('3 скидка, 10% на Код Слово G3H2Z1: 500');
        return totalDiscountSum;
    }
}

console.log('Ваша итоговая сумма с учетом скидок: ', calculate(35000, 11, 'G3H2Z1'));
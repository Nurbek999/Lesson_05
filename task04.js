'use strict'

const getCountDiscount = (a , b) =>{
    if (a > 10){
    b = b * 0.03;
    return b;
    }
}

const getTotalSimDiscount = (a) =>{
    let tSum = a;
if (tSum > 30000){
    let tSum2 = tSum - 30000;
    let totalDiscountSum =  tSum2 * 0.15;
    return totalDiscountSum;
}
}

const getCodeDiscount = (code, tSum) =>{
if(code === 'METHOD'){
 tSum = tSum * 0.1;
 return tSum
}if(code === 'G3H2Z1' && tSum > 2000){
 tSum = tSum - 500;
 return tSum;

}
}

const calculate = (totalSum, countGoods, wordDiscount) =>{

    const countDiscount = getCountDiscount(countGoods,totalSum);

    console.log('1 скидка, 3% на кол-во товаров больше 10:', countDiscount);

    const countDiscount15 = getTotalSimDiscount(totalSum);

    console.log('2 скидка, 15% на ост. сумму от 30000:', countDiscount15);

    const countDiscount10 = getCodeDiscount(wordDiscount,totalSum);

    

    let balanceSum = totalSum - countDiscount - countDiscount15;

    if(wordDiscount === 'METHOD'){
        totalSum =  totalSum - (totalSum * 0.1) - countDiscount - countDiscount15;
        console.log('3 скидка, 10% на Код Слово METHOD ', totalSum);
        return totalSum;
    }if(wordDiscount === 'G3H2Z1' && balanceSum > 2000){
        balanceSum = balanceSum - 500;
        console.log('3 скидка, 10% на Код Слово G3H2Z1 ', balanceSum);
        return balanceSum;
    }


}



console.log(calculate(35000, 11, 'METHOD'));
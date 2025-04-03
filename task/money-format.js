// 3 -> 3.00 Eur
// 3.99 -> 3.99 Eur

function moneyFormat(money) {
    return money.toFixed(2) + ' Eur';
}

function moneyFormat2(money) {
    const strMoney = '' + money;
    const dotPosition = strMoney.indexOf('.');

    if (dotPosition === -1) {
        return money + '.00 Eur';
    }

    const afterDot = strMoney.slice(dotPosition + 1);

    if (afterDot.length === 1) {
        return money + '0 Eur';
    }

    return money + ' Eur';
}

console.log(moneyFormat(3));
console.log(moneyFormat(3.1));
console.log(moneyFormat(3.5));
console.log(moneyFormat(3.99));

console.log(moneyFormat2(3));
console.log(moneyFormat2(3.1));
console.log(moneyFormat2(3.5));
console.log(moneyFormat2(3.99));

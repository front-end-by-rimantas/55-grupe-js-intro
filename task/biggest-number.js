function biggestNumber(list) {
    if (!Array.isArray(list)) {
        return 'Duomenys turi buti sarase.';
    }

    if (list.length === 0) {
        return 'Tusciame sarase didziausio skaiciaus rasti neimanoma.';
    }

    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }

        if (list[i] > biggest) {
            biggest = list[i];
        }
    }

    return biggest;
}

console.log(biggestNumber(11526215));
console.log(biggestNumber('labas'));
console.log(biggestNumber(true));

console.log(biggestNumber([]));

console.log(biggestNumber([1]), '-->', 1);
console.log(biggestNumber([4]), '-->', 4);
console.log(biggestNumber([1, 2]), '-->', 2);
console.log(biggestNumber([2, 1]), '-->', 2);
console.log(biggestNumber([1, 2, 3]), '-->', 3);
console.log(biggestNumber([3, 1, 2]), '-->', 3);
console.log(biggestNumber([2, 3, 1]), '-->', 3);
console.log(biggestNumber([2, 3, 3]), '-->', 3);
console.log(biggestNumber([3, 3, 3]), '-->', 3);

console.log(biggestNumber([-1, -2, -3]), '-->', -1);

console.log(biggestNumber([1, 2, 'asd']));
console.log(biggestNumber([1, 'asd', 2]));
console.log(biggestNumber(['asd', 1, 2]));

console.log(biggestNumber([-1, -2, true]));
console.log(biggestNumber([-1, true, -2]));
console.log(biggestNumber([true, -1, -2]));
console.log(biggestNumber([-1, -2, false]));
console.log(biggestNumber([-1, false, -2]));
console.log(biggestNumber([false, -1, -2]));

console.log(biggestNumber([-1, -2, -Infinity]));
console.log(biggestNumber([-1, -Infinity, -2]));
console.log(biggestNumber([-Infinity, -1, -2]));

console.log(biggestNumber([1, 2, Infinity]));
console.log(biggestNumber([1, Infinity, 2]));
console.log(biggestNumber([Infinity, 1, 2]));

console.log(biggestNumber([1, 2, NaN]));
console.log(biggestNumber([1, NaN, 2]));
console.log(biggestNumber([NaN, 1, 2]));

function digitCount(n) {
    if (typeof n !== 'number') {
        return 'Reikalingas skaicius.';
    }

    // if (n === Infinity || n === -Infinity || isNaN(n)) {
    //     return 'Reikalingas normalus skaicius.';
    // }

    if (!isFinite(n)) {
        return 'Reikalingas normalus skaicius.';
    }

    const numberAsString = '' + n;
    let count = numberAsString.length;

    if (n % 1 !== 0) {
        count--;
    }
    if (n < 0) {
        count--;
    }

    return count;
}

console.log(digitCount());
console.log(digitCount(undefined));
console.log(digitCount('asfdg'));
console.log(digitCount('215452515'));
console.log(digitCount(true));
console.log(digitCount([]));
console.log(digitCount({}));
console.log(digitCount(digitCount));
console.log(digitCount(null));

console.log(digitCount(Infinity));
console.log(digitCount(-Infinity));
console.log(digitCount(NaN));

console.log(digitCount(5), '-->', 1);
console.log(digitCount(159), '-->', 3);
console.log(digitCount(2562156), '-->', 7);

console.log(digitCount(5.5), '-->', 2);
console.log(digitCount(452.856251), '-->', 9);

console.log(digitCount(-5), '-->', 1);
console.log(digitCount(-159), '-->', 3);
console.log(digitCount(-2562156), '-->', 7);

console.log(digitCount(-5.5), '-->', 2);
console.log(digitCount(-452.856251), '-->', 9);

console.log(digitCount(1000000000000000), '-->', 16);
console.log(digitCount(10000000000000000000), '-->', 20);
console.log(digitCount(100000000000000000000), '-->', 21);
console.log(digitCount(1000000000000000000000), '-->', 22);

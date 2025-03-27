function intervalCount(start, end, divider) {
    let count = 0;

    // 1) naivi versija, kai einame per kiekviena skaiciu
    // for (let i = start; i <= end; i++) {
    //     if (i % divider === 0) {
    //         count++;
    //     }
    // }

    // 2) labiau optimizuotas naivus variantas
    const trueStart = start;
    for (let i = trueStart; i <= end; i += divider) {
        count++;
    }

    // 3) galutinis tikslas yra formule, kurios uzuomina yra zemiau pateika lygtis/logika
    // count = (end-start) / divider;

    return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
}

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));

console.log(intervalCount(1, 11, 3));
console.log(intervalCount(1, 11, 5));
console.log(intervalCount(1, 11, 7));

console.log(intervalCount('asd', 11, 7));
console.log(intervalCount(1, 'asd', 7));
console.log(intervalCount(1, 11, 'asd'));
console.log(intervalCount(true, 11, 7));
console.log(intervalCount(1, true, 7));
console.log(intervalCount(1, 11, true));
console.log(intervalCount(undefined, 11, 7));
console.log(intervalCount(1, undefined, 7));
console.log(intervalCount(1, 11, undefined));
console.log(intervalCount(null, 11, 7));
console.log(intervalCount(1, null, 7));
console.log(intervalCount(1, 11, null));
console.log(intervalCount([], 11, 7));
console.log(intervalCount(1, [], 7));
console.log(intervalCount(1, 11, []));
console.log(intervalCount({}, 11, 7));
console.log(intervalCount(1, {}, 7));
console.log(intervalCount(1, 11, {}));
console.log(intervalCount(intervalCount, 11, 7));
console.log(intervalCount(1, intervalCount, 7));
console.log(intervalCount(1, 11, intervalCount));

console.log(intervalCount(0.1, 11, 7));
console.log(intervalCount(0, 11.1, 7));
console.log(intervalCount(0, 11, 7.1));

console.log(intervalCount(NaN, 11, 7));
console.log(intervalCount(0, NaN, 7));
console.log(intervalCount(0, 11, NaN));

console.log(intervalCount(Infinity, 11, 7));
console.log(intervalCount(100, 11, 7));
console.log(intervalCount(0, Infinity, 7));
console.log(intervalCount(0, 11, Infinity));

console.log(intervalCount(-Infinity, 11, 7));
console.log(intervalCount(0, -Infinity, 7));
console.log(intervalCount(0, 11, -Infinity));
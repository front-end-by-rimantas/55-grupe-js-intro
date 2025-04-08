let zodis = '';

if (4 > 2) {
    zodis = 'daugiau';
} else {
    zodis = 'maziau';
}

console.log(zodis);

let skaicius = 0;

if (7 <= 5) {
    skaicius = 7;
} else {
    skaicius = 5;
}

console.log(skaicius);

// klausimas ? teigiama : neigiama
const word = 4 > 2 ? 'daugiau' : 'maziau';
console.log(word);

const number = 7 <= 5 ? 7 : 5;
console.log(number);

const years = 22;
const isAdult = years >= 18 ? 'suauges' : 'nesuauges';
console.log(isAdult);

const value = 5;
const type = typeof value === 'number' ? 'skaicius' : 'ne skaicius';
console.log(type);

// visi skaiciai yra pozityvus
// isskyrus - nulis
if (-5.5) {
    console.log('TAIP');
} else {
    console.log('NE');
}

// visi tekstai yra pozityvus
// isskyrus - tuscias
if ('') {
    console.log('TAIP');
} else {
    console.log('NE');
}

// visi array yra pozityvus
// visi object yra pozityvus
if ([]) {
    console.log('TAIP');
} else {
    console.log('NE');
}

// undefined yra negatyvus
// null yra negatyvus
if (null) {
    console.log('TAIP');
} else {
    console.log('NE');
}


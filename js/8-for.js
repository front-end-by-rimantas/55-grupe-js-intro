/*
FOR (loop) - ciklas
*/

for (let i = 0; i < 5; i++) {
    console.log('a) number:', i);
}

console.log('------------');

for (let i = 2; i <= 7; i++) {
    console.log('b) number:', i);
}

console.log('------------');

for (let i = 5; i >= 0; i--) {
    console.log('c) number:', i);
}

console.log('------------');

// 0, 1, 2, 3, 4, ....
// 0, 2, 4, 6, 8, ....

for (let i = 0; i < 11; i += 2) {
    console.log('kas du:', i);
}

console.log('------------');

for (let k = 0; k < 1; k += 0.1) {
    console.log(k);
}

console.log('------------');

for (let k = 0; k < 10; k++) {
    console.log(k / 10);
}

console.log('------------');

console.log(0.1 + 0.2);
console.log((10 + 20) / 100);
console.log((399 + 20) / 100);


console.log('------------');

console.log('Labas');
console.log('Labas');
console.log('Labas');
console.log('Labas');


console.log('------------');

for (let i = 1; i <= 4; i++) {
    console.log('Labas');
}


console.log('------------');

const n = 4;

console.log(`${n} * 1 = ${n * 1}`);
console.log(`${n} * 2 = ${n * 2}`);
console.log(`${n} * 3 = ${n * 3}`);
console.log(`${n} * 4 = ${n * 4}`);

console.log('------------');

for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];
console.log(sum);

let sum2 = 0;

for (let i = 0; i < marks.length; i++) {
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i];
}

console.log(sum2);

console.log('--------------');

// Studento vardas yra VARDAS.
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++) {
    const s = `Studento vardas yra ${names[i]}.`;
    console.log(s);
}

// Vardas "VARDAS" yra sudarytas is N raidziu.

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const s = `Vardas "${name}" yra sudarytas is ${name.length} raidziu.`;
    console.log(s);
}


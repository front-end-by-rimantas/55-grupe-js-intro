function empty() {
    // logika
}

const a = empty();
const b = empty();
console.log(a);
console.log(b);

console.log(empty());

function penki() {
    return 5;
}

const c = penki();
console.log(c);

function hi() {
    return 'Labas!';
}

const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petras -> Labas, Petras!
// Ona -> Labas, Ona!

function hiPerson(name) {
    // return 'Labas, ' + name + '!';
    return `Labas, ${name}!`;
}

console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));
console.log(hiPerson());


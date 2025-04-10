const a1 = [1, 11, 111];
const a2 = [2, 22, 222];
const a3 = [3, 33, 333];
const a4 = [4, 44, 444];

// [1, 11, 111, 2, 22, 222]
const a12 = a1.concat(a2);
console.log(a12);

const b12 = [...a1, ...a2];
console.log(b12);

const b423 = [...a4, ...a2, ...a3];
console.log(b423);

const b333 = [...a3, ...a3, ...a3];
console.log(b333);

// [7, 4, 44, 444, 88]
const c1 = [7, ...a4, 88];
console.log(c1);

console.clear();

const o1 = { name: 'Jonas' };
const o2 = { age: 99 };
const o3 = { isMarried: true };

const o12 = { ...o1, ...o2 };
console.log(o12);

const o123 = { ...o1, ...o2, ...o3 };
console.log(o123);

const p1 = { a: 1 };
const p2 = { b: 2 };
const p3 = { c: 3, a: 7 };

const p12 = { ...p1, ...p2 };
console.log(p12);

const p123 = { ...p1, ...p2, ...p3 };
console.log(p123);

const p312 = { ...p3, ...p1, ...p2 };
console.log(p312);

const p4 = { d: 4, ...p3, c: 99 };
console.log(p4);


console.clear();

const marks = [10, 2, 8, 4, 6];
const [first, second, ...rest] = marks;

console.log(first);
console.log(second);
console.log(rest);

const marks2 = [first, second, ...rest];
console.log(marks2);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const n1 = names[0];
const n2 = names[1];
const n34 = names.slice(2);

console.log(n1);
console.log(n2);
console.log(n34);

const [x, y, ...z] = names;
console.log(x);
console.log(y);
console.log(z);

const mix = [1, 'asd', true, [], {}, undefined];
const [m1, m2, m3, ...mRest] = mix;

console.log(m1);
console.log(m2);
console.log(m3);
console.log(mRest);

console.clear();

const person = {
    address: 'Miestas g. 7',
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const { name, age, ...p } = person;

console.log(name);
console.log(age);
console.log(p);

const { address, ...pp } = p;
console.log(address);
console.log(pp);
console.clear();

const students = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

for (let i = 0; i < students.length; i++) {
    const { name, age } = students[i];
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}

console.log('------------------');

for (const student of students) {
    const { name, age } = student;
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}

console.log('------------------');

for (const { name, age } of students) {
    const result = `Studentui, vardu ${name}, yra ${age} metai.`;
    console.log(result);
}

console.clear();

const numbers = [
    [0],
    [1, 11],
    [2, 22, 222],
    [3, 33, 333, 3333],
    [4],
    [5],
    [6],
];

// Pirmas skaicius yra X ir dar yra Y papildomu skaiciu.

for (const [first, ...rest] of numbers) {
    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaiciu.`;
    console.log(result);
}

console.clear();

function min(...list) {
    let minimum = Infinity;

    for (const number of list) {
        if (number < minimum) {
            minimum = number;
        }
    }

    return minimum;
}

console.log(min(1));
console.log(min(1, 2, 3));
console.log(min(-1, -2, -3));
console.log(min(-1, -2, -3, -2, -3, -2, -3, -2, -3, -2));

console.log(Math.min(1));
console.log(Math.min(1, 2, 3));
console.log(Math.min(-1, -2, -3));
console.log(Math.min(-1, -2, -3, -2, -3, -2, -3, -2, -3, -2));

const ddd = [1, 2, 3];
console.log(Math.min(...ddd));
console.log(Math.min(1, 2, 3));
console.log(Math.max(...ddd));

// ...ddd = 1, 2, 3
const f = [...ddd];
console.log(f);

console.log(ddd);
console.log(...ddd);
console.log(1, 2, 3);


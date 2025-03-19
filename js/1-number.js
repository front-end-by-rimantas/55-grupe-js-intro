/*
Kintamuju iniciavimas:
- const (default)
- let (kai reiksme turi galeti kisti)
- var (nenaudoti, nebent zinai ka darai)

NUMBER - skaiciai

- sveikieji, desimtainiai
- teigiami, neigiami
- Infinity, -Infinity
- NaN (skaiciaus tipo klaida)

Aritmetiniai operatoriai:
+, -, *, /, ** (kelimas laipsniu), % (dalybos liekana)

Aritmetiniai priskyrimo operatoriai:
+=, -=, *=, /=, **= (kelimas laipsniu), %= (dalybos liekana)

*/

const a = 1;
console.log(a);

const b = 2;
console.log(b);

const c = a + b;
console.log(c);

const luckyNumber = 7.77;
console.log(luckyNumber);

const n1 = 7 + 5;
console.log(n1);

const n2 = 7 - 5;
console.log(n2);

const n3 = 7 * 5;
console.log(n3);

const n4 = 7 / 5;
console.log(n4);

const n5 = 7 ** 5;
console.log(n5);

const n6 = 7 % 5;
console.log(n6);

console.log('----------------');

let age = 99;
console.log(age);

age = 100;
console.log(age);

age = 101;
console.log(age);

const pi = 3.141592654;
console.log(pi);

console.clear();

let sum = 10;
console.log(sum);

sum = sum + 1;
console.log(sum);

sum = sum - 2;
console.log(sum);

sum = sum * 3;
console.log(sum);

sum = sum / 4;
console.log(sum);

let sum2 = 10;
console.log(sum2);

sum2 += 1;
console.log(sum2);

sum2 -= 2;
console.log(sum2);

sum2 *= 3;
console.log(sum2);

sum2 /= 4;
console.log(sum2);

console.clear();

console.log(Infinity);
console.log(-Infinity);

console.log(Infinity + 1);
console.log(Infinity / 2);

console.log(2 ** 0);
console.log(2 ** 1);
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);

console.log('kelimas nuliniu laipsniu:');

console.log(1 ** 0);
console.log(2 ** 0);
console.log(3 ** 0);
console.log(214562 ** 0);

console.log('kelimas pirmuoju laipsniu:');

console.log(1 ** 1);
console.log(2 ** 1);
console.log(3 ** 1);
console.log(214562 ** 1);

console.log('dalyba is nulio:');

console.log(5 / 0);
console.log(54562515 / 0);
console.log(0 / 0);

console.clear();

// N ** 1/2
// N ** 1/3
// 81 -> 9

console.log('kvadartine saknis');

console.log(81 ** (1 / 2));
console.log(9 ** (1 / 2));
console.log(16 ** (1 / 2));

console.log('kubine saknis');
console.log(27 ** (1 / 3));
console.log(64 ** (1 / 3));

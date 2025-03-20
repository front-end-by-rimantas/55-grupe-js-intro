/*
BOOLEAN - logine reiksme
- true
- false

Loginiai operatoriai:
&& - and (ir) (prioritetas, kaip daugybos)
|| - or (arba)
*/

const isEven = true;
const isOdd = false;

console.log('&& ---------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('|| ---------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('Ar mergina eis i pasimatyma?');
const arGrazus = true;
const arTurtingas = true;

console.log(arGrazus && arTurtingas);

console.log('Ar vaikinas eis i pasimatyma?');
const arGrazi = true;
const arTurtinga = false;

console.log(arGrazi || arTurtinga);

console.clear();

// skaiciuoja is eiles????
console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);
console.log(5, false && true || true);
console.log(6, false && true || false);
console.log(7, false && false || true);
console.log(8, false && false || false);

console.clear();
console.log(1, true || true && true);
console.log(2, true || true && false);
console.log(3, true || false && true);
console.log(4, true || false && false);
console.log(5, false || true && true);
console.log(6, false || true && false);
console.log(7, false || false && true);
console.log(8, false || false && false);

// ND: Surasyti visas imanomas kombinacijas, su && ir ||, kai yra naudojamos 4 boolean reiksmes.
// ND: Kiek gavosi kombinaciju?

console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && true || true);
console.log(true && true && true || false);

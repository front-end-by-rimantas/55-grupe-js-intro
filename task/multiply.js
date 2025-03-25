function multiply(a, b) {
    // if (jeigu a nera skaicius) {
    //     return 'Pirmasis parametras turi buti skaicius.';
    // }

    // if (jeigu b nera skaicius) {
    //     return 'Antrasis parametras turi buti skaicius.';
    // }

    return a * b;
}

console.log(multiply(2, 2));
console.log(multiply(7, 5));
console.log(multiply(7, -5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, 0));
console.log(multiply(-7, 0));
console.log(multiply(0, 5));
console.log(multiply(0, -5));

console.log(multiply(2, 'labas'));
console.log(multiply(-2, 'labas'));
console.log(multiply('labas', 3));
console.log(multiply('labas', -3));

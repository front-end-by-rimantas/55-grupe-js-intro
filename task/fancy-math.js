// fancyMath(7, '+', 5) -> 12
// fancyMath(7, '-', 5) -> 2
// fancyMath(7, '*', 5) -> 35
// fancyMath(7, '/', 5) -> 1.4

function fancyMath(n1, sign, n2) {
    const func = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '**': (a, b) => a ** b,
        '%': (a, b) => a % b,
    };

    const funcToUse = func[sign];
    if (funcToUse === undefined) {
        return ':(';
    }

    return funcToUse(n1, n2);
}

console.log(fancyMath(7, '+', 5));
console.log(fancyMath(7, '-', 5));
console.log(fancyMath(7, '*', 5));
console.log(fancyMath(7, '/', 5));
console.log(fancyMath(7, '**', 5));
console.log(fancyMath(7, '%', 5));


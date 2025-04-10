const day = 8;
let dayName = '---';

if (day === 1) {
    dayName = 'pirmadienis';
} else if (day === 2) {
    dayName = 'antradienis';
} else if (day === 3) {
    dayName = 'treciadienis';
} else if (day === 4) {
    dayName = 'ketvirtadienis';
} else if (day === 5) {
    dayName = 'penktadienis';
} else if (day === 6) {
    dayName = 'sestadienis';
} else if (day === 7) {
    dayName = 'sekmadienis';
} else {
    dayName = 'tokios dienos savaiteje nera';
}

console.log(dayName);

const d = 8;
let weekdayName = '***';

switch (d) {
    case 1:
        weekdayName = 'pirmadienis';
        break;

    case 2:
        weekdayName = 'antradienis';
        break;

    case 3:
        weekdayName = 'treciadienis';
        break;

    case 4:
        weekdayName = 'ketvirtadienis';
        break;

    case 5:
        weekdayName = 'penktadienis';
        break;

    case 6:
        weekdayName = 'sestadienis';
        break;

    case 7:
        weekdayName = 'sekmadienis';
        break;

    default:
        weekdayName = 'tokios dienos savaiteje nera';
        break;
}

console.log(weekdayName);

const day2 = 1;
let day2Name = '';

if (day2 === 1 || day2 === 2 || day2 === 3 || day2 === 4 || day2 === 5) {
    day2Name = 'darbo diena';
} else if (day2 === 6 || day2 === 7) {
    day2Name = 'savaitgalis';
} else {
    day2Name = 'tokios dienos savaiteje nera';
}

const day3 = 6;
let day3Name = '';

switch (day3) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day3Name = 'darbo diena';
        break;
    case 6:
    case 7:
        day3Name = 'savaitgalis';
        break;
    default:
        day3Name = 'tokios dienos savaiteje nera';
        break;
}

console.log(day3Name);

// 1) uzvirinti vandeni
// 2) i puodeli isideti arbatos
// 3) isideti cukraus/saldikliu
// 4) ipilame vandeni
// 5) issimaisyti
// 6) gerti
console.clear();
const teaStep = 4;

switch (teaStep) {
    case 1:
        console.log('uzvirinti vandeni');
    case 2:
        console.log('i puodeli isideti arbatos');
    case 3:
        console.log('isideti cukraus/saldikliu');
    case 4:
        console.log('ipilame vandeni');
    case 5:
        console.log('issimaisyti');
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('toks veiksmas nenumatytas');
        break;
}

console.clear();

const stop = 'Rudens 2';

switch (stop) {
    case 'Parko': console.log('Parko');
    case 'Geniu': console.log('Geniu');
    case 'Tremtiniu': console.log('Tremtiniu');
    case 'Rudens': console.log('Rudens');
    case 'Mindaugo tiltas': console.log('Mindaugo tiltas');
    case 'Zaliasis tiltas': console.log('Zaliasis tiltas');
        break;
    case 'Lvovo': console.log('Lvovo');
    case 'Vasaros': console.log('Vasaros');
    case 'Rudens 2': console.log('Rudens 2');
    case 'Tremtiniu 2': console.log('Tremtiniu 2');
    case 'Geniu 2': console.log('Geniu 2');
    case 'Parko 2': console.log('Parko 2');
        break;
}

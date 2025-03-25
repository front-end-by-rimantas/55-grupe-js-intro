/*
Reikalinga funkcija, kuri gauna teksta, kuri grazina rezultata, priklausomai nuo teksto ilgio.
- jei tuscias: "Tuscias tekstas."
- jei maziau 10 simbliu: "Trumpas tekstas is N simboliu."
- jei maziau 20 simbliu: "Tekstas is N simboliu."
- jei ilgesnis: "Ilgas tekstas is N simboliu."
*/

function textSize(text) {
    if (text.length === 0) {
        return 'Tuscias tekstas.';
    }

    if (text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    }

    if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    return `Ilgas tekstas is ${text.length} simboliu.`;
}

console.log(textSize(''));
console.log(textSize('Labas'));
console.log(textSize('Labanakt!'));
console.log(textSize('Virs desimt'));
console.log(textSize('Labas rytas, Lietuva! Ka tu?'));

function textSize2(text) {
    if (text.length === 0) {
        return 'Tuscias tekstas.';
    } else if (text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    } else if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    } else {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }
}

function textSize3(text) {
    if (text.length === 0) {
        return 'Tuscias tekstas.';
    } else if (text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    } else if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    return `Ilgas tekstas is ${text.length} simboliu.`;
}

function textSize4(text) {
    if (text.length >= 20) {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }

    if (text.length >= 10) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    if (text.length > 0) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    }

    return 'Tuscias tekstas.';
}

function textSize5(text) {
    if (text.length >= 20) {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }

    if (text.length > 0 && text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    }

    if (text.length >= 10 && text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    if (text.length === 0) {
        return 'Tuscias tekstas.';
    }
}

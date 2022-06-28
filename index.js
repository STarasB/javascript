const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));
x1 = 'x1';
x2 = 'x2';

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
    const d = calcDisc(a, b, c);

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return `Коефіціїнти: a=${a}, b=${b}, c=${c},
        Корінь: x1=${x1}, x2=${x2},
        Дискримінант (D) =${d}`;
    } else if (d === 0) {
        x1 = -b / (2 * a);
        return `Коефіціїнти: a=${a}, b=${b}, c=${c},
        Корінь: x1=${x1},
        Дискримінант (D) =${d}`;
    } else if (d < 0) {
        return `Коефіціїнти: a=${a}, b=${b}, c=${c},
        Корені відсутні,
        Дискримінант (D) =${d}`;
    }
    
}

function calcDisc(a, b, c) {
    return b ** 2 - 4 * a * c;
}



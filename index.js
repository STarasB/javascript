const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
    let x1;
    let x2;
    const discriminant = calcDisc(a, b, c);

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else if (discriminant === 0) {
        x1 = -b / (2 * a);
    }

    return `Коефіціїнти: a=${a}, b=${b}, c=${c}, ${getX1X2(x1, x2, discriminant)},
    Дискримінант (D) =${discriminant}`;
    
}

function getX1X2(x1, x2, discriminant) {
    
    return (discriminant > 0) ? `Корінь: x1=${x1}, x2=${x2}` : (discriminant === 0) ? ` Корінь: x1=${x1}` : `Корені відсутні`;
}

function calcDisc(a, b, c) {
    return b ** 2 - 4 * a * c;
}



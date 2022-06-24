const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
    const D = calcDisc(a, b, c);

    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return 'Коефіціїнти: a=' + a + ', b=' + b + ', c=' + c + ', \n Корінь: x1=' + x1 + ', x2=' + x2 + ', \n Дискримінант (D) = ' + D;
    } else if (D === 0) {
        x1 = -b / (2 * a);
        return 'Коефіціїнти: a=' + a + ', b=' + b + ', c=' + c + ', \n Корінь: x1=' + x1 + ', \n Дискримінант (D) = ' + D;;
    } else if (D < 0) return 'Коефіціїнти: a=' + a + ', b=' + b + ', c=' + c + ', \n Корені відсутні, \n Дискримінант (D) = ' + D;;
    
}

function calcDisc(a, b, c) {
    return b ** 2 - 4 * a * c;
}



const fnA = (a, b, pow) => `Sum of pow of ${a} + ${b} = ${pow(a, b)}`;

function customPow (a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}

document.querySelector('body').textContent= `${fnA(3, 5, customPow)}, ${fnA(5, 6, customPow)}, ${fnA(5, 3, customPow)}`;
const fnA = (a, b = 10) => `Sum of a + b = ${a + b}`;

document.querySelector('body').textContent= `${fnA(3)}, ${fnA(6)}, ${fnA(5, 3)}`;
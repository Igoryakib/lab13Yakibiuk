const collectNumArray = (...a) => {
    let sumElements = 0;
    for (let i=0; i < a.length; i++) {
        sumElements += a[i];
    }
    return sumElements;
};

document.querySelector('body').textContent = `Sum of the elements 5, 6, 8, 9, 99, 10: ${collectNumArray(5, 6, 8, 9, 99, 10)}`;
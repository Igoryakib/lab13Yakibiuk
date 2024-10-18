const greet = function(name) {
    return `Hello, ${name}!`;
};


function showMessage() {
    const message = greet("Student");
    document.getElementById("output").textContent = message;
}

document.getElementById("btn").addEventListener('click', showMessage)
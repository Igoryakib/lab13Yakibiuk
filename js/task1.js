function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');   // Отримуємо години
    const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Отримуємо хвилини
    const seconds = currentTime.getSeconds().toString().padStart(2, '0'); // Отримуємо секунди

    document.querySelector('#time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Оновлюємо час щосекунди
setInterval(updateTime, 1000);

// Відображаємо час одразу при завантаженні сторінки
updateTime();
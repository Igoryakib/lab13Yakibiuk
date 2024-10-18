// Створюємо об'єкт дати з поточною датою і часом
const now = new Date();

// Виводимо інформацію на сторінку
document.getElementById("full-date").textContent = `Full Date: ${now}`;
document.getElementById("year").textContent = `Year: ${now.getFullYear()}`;
document.getElementById("month").textContent = `Month: ${now.getMonth() + 1}`;
document.getElementById("day-of-month").textContent = `Date (day of the month): ${now.getDate()}`;
document.getElementById("day-of-week").textContent = `Day (of the week): ${now.getDay()}`;
document.getElementById("hours").textContent = `Hours: ${now.getHours()}`;
document.getElementById("minutes").textContent = `Minutes: ${now.getMinutes()}`;
document.getElementById("seconds").textContent = `Seconds: ${now.getSeconds()}`;
document.getElementById("milliseconds").textContent = `Milliseconds: ${now.getMilliseconds()}`;
document.getElementById("unix-time").textContent = `Time since 1970 (milliseconds): ${now.getTime()}`;
document.getElementById("locale-date").textContent = `Locale Date String: ${now.toLocaleDateString()}`;
document.getElementById("locale-time").textContent = `Locale Time String: ${now.toLocaleTimeString()}`;

// Створюємо кастомну дату
const someDate = new Date(2025, 11, 25, 10, 30, 0); // 25 грудня 2025 року о 10:30:00
document.getElementById("custom-date").textContent = `Custom Date: ${someDate}`;

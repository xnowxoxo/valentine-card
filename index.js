// Функция перехода на открытку
function redirectToValentine() {
    window.location.href = "valentine.html";
}

// Бегающая кнопка "No"
const noButton = document.getElementById("no-btn");

noButton.addEventListener("mouseover", () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

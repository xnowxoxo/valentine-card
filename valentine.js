// Переворачивание карточек
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Музыка (авто-воспроизведение)
const music = document.getElementById('bg-music');

function playMusic() {
    music.volume = 0.5; // Устанавливаем комфортную громкость
    music.play().catch(error => {
        console.log("Автовоспроизведение заблокировано браузером. Нужно взаимодействие пользователя.");
    });
}

// Запускаем музыку сразу после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    playMusic();
});

// Падающие сердечки (Красивые, а не текстовые!)
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

let hearts = [];

function createHeart() {
    const heart = {
        x: Math.random() * window.innerWidth,
        y: -50,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360
    };
    hearts.push(heart);
}

function drawHeart(x, y, size, alpha, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#ff4081";

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
    ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
    ctx.fill();

    ctx.restore();
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, i) => {
        drawHeart(heart.x, heart.y, heart.size, heart.alpha, heart.rotation);
        heart.y += heart.speed;
        heart.rotation += heart.speed;
        if (heart.y > window.innerHeight) hearts.splice(i, 1);
    });
}

function updateHearts() {
    drawHearts();
    if (Math.random() < 0.1) createHeart();
    requestAnimationFrame(updateHearts);
}

// Запуск анимации сердечек
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
updateHearts();

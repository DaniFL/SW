// script.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas según el tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables del personaje
const playerImage = new Image();
playerImage.src = "./img/pika.png"; // Cambia a una imagen válida
const player = {
    x: 50,
    y: 50,
    width: 250,
    height: 250,
    speed: 5,
    dx: 0,
    dy: 0
};

// Manejar el input del usuario
function movePlayer(e) {
    switch(e.key) {
        case 'ArrowUp':
            player.dy = -player.speed;
            break;
        case 'ArrowDown':
            player.dy = player.speed;
            break;
        case 'ArrowLeft':
            player.dx = -player.speed;
            break;
        case 'ArrowRight':
            player.dx = player.speed;
            break;
    }
}

function stopPlayer(e) {
    switch(e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            player.dy = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            player.dx = 0;
            break;
    }
}

// Dibujar personaje en el canvas
function drawPlayer() {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

// Limpiar canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Actualizar posición del personaje
function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;

    // Limitar el movimiento del jugador dentro del canvas
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

// Bucle de animación
function gameLoop() {
    clearCanvas();
    drawPlayer();
    updatePlayer();
    requestAnimationFrame(gameLoop); // Mantener tasa de refresco independiente del hardware
}

// Escuchar eventos de teclado
window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', stopPlayer);

// Comenzar el juego cuando la imagen esté cargada
playerImage.onload = () => {
    gameLoop();
};

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas según el tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tileSize = 50; 
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const playerImage = new Image();
playerImage.src = './img/pika.png'; 
const player = {
    x: 1,
    y: 1,
    width: tileSize * 0.8,
    height: tileSize * 0.8,
    speed: 2,
    dx: 0,
    dy: 0  
};

const goal = {
    x: 8, 
    y: 8  
};

let song; // Declarar la variable global para la canción
let gameWon = false; // Variable para comprobar si el juego ha sido ganado

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

function canMove(newX, newY) {
    return maze[Math.floor(newY)][Math.floor(newX)] === 0;
}

function updatePlayer() {
    let newX = player.x + player.dx / tileSize;
    let newY = player.y + player.dy / tileSize;

    if (canMove(newX, player.y)) player.x = newX;
    if (canMove(player.x, newY)) player.y = newY; 

    // Si llega a la meta
    if (Math.floor(player.x) === goal.x && Math.floor(player.y) === goal.y && !gameWon) {
        gameWon = true; // Marcar el juego como ganado
        if (!song) {
            song = new Audio('./img/victory-sonic.mp3');
            song.play().catch((error) => {
                console.error('Error al intentar reproducir la canción:', error);
            });
        }
        setTimeout(() => {
            alert("¡Ganaste!");
            resetGame();
        }, 1000);
    }
}

// Limpiar canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Dibujar el laberinto y el jugador
function draw() {
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            if (maze[row][col] === 1) {
                ctx.fillStyle = 'black';
                ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
            }
        }
    }

    ctx.drawImage(playerImage, player.x * tileSize, player.y * tileSize, player.width, player.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(goal.x * tileSize, goal.y * tileSize, tileSize, tileSize);
}

// Reiniciar el juego
function resetGame() {
    player.x = 1;
    player.y = 1;
    song = null; 
    gameWon = false; 
}

// Animación
function gameLoop() {
    clearCanvas();
    updatePlayer();
    draw();
    requestAnimationFrame(gameLoop); // tasa de refresco
}

// eventos de teclado
window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', stopPlayer);

// Comenzar el juego cuando la imagen esté cargada
playerImage.onload = () => {
    gameLoop();
};

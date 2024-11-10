import http from 'http';
import url from 'url';

const dictionary = [
  "casa",
  "árbol",
  "sol",
  "montaña",
  "mar",
  "río",
  "flor",
  "cielo",
  "perro",
  "gato",
  "camino",
  "libro",
  "sueño",
  "luz",
  "sombra",
  "lluvia",
  "viento",
  "fuego",
  "tierra",
  "arena",
  "bosque",
  "luna",
  "estrella",
  "nube",
  "nieve",
  "volcán",
  "océano",
  "glaciar",
  "desierto",
  "cueva",
  "cañón",
  "isla",
  "bahía",
  "lago",
  "colina",
  "valle",
  "pradera",
  "selva",
  "arrecife",
  "delta",
  "cordillera",
  "tundra",
  "pantano",
  "sabana",
  "satélite",
  "circuito",
  "algoritmo",
  "androide",
  "microchip",
  "sensor",
  "dron",
  "servidor",
  "base de datos",
  "inteligencia artificial",
  "energía",
  "átomo",
  "molécula",
  "célula",
  "genoma",
  "telescopio",
  "microscopio",
  "robot",
  "impresora",
  "programación",
  "paella",
  "tortilla",
  "pizza",
  "ensalada",
  "hamburguesa",
  "arroz",
  "pasta",
  "sopa",
  "guiso",
  "empanada",
  "sushi",
  "ceviche",
  "helado",
  "chocolate",
  "café",
  "té",
  "jugo",
  "leche",
  "pan",
  "queso",
];

// Generamos contraseña de manera aleatoria
function generatePassword(wordCount) {
    let password = [];
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * dictionary.length);
        password.push(dictionary[randomIndex]);
    }
    return password.join('-');
}

// Creamos el servidor
const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const wordCount = parseInt(queryObject.words) || 3; 

    const password = generatePassword(wordCount);

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Generated Password: ${password}`);
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
const http = require('http');
const os = require('os');
const fs = require('fs');
const process = require('process');

// Cargamos configuración del archivo json
let config;
try {
  config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
} catch (error) {
  console.error("Error al leer el archivo de configuración:", error);
  process.exit(1);
}

const intervalSeconds = config.intervalSeconds * 1000 || 5000;

// Mostramos por pantalla la información
console.log("Información del sistema al iniciar:");
console.log(`Sistema operativo: ${os.platform()} ${os.release()}`);
console.log(`Versión de Node.js: ${process.version}`);
console.log(`Memoria total del sistema: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Número de CPUs: ${os.cpus().length}`);

// CPU, memoria, tiempo de uso, tiempo de recarga
function logSystemInfo() {
  console.log(`\n--- Información periódica ---`);
  
  if (config.showCpuUsage) {
    const cpuLoad = os.loadavg()[0];
    console.log(`Uso de CPU (promedio 1 min): ${cpuLoad.toFixed(2)}`);
  }
  
  if (config.showMemoryUsage) {
    const memoryUsage = process.memoryUsage().rss / (1024 ** 2);
    console.log(`Uso de memoria (RSS): ${memoryUsage.toFixed(2)} MB`);
  }
  
  if (config.showSystemUptime) {
    const uptimeSystem = os.uptime();
    console.log(`Tiempo activo del sistema: ${Math.floor(uptimeSystem / 60)} minutos`);
  }
  
  if (config.showNodeUptime) {
    const uptimeNode = process.uptime();
    console.log(`Tiempo de ejecución de Node.js: ${Math.floor(uptimeNode / 60)} minutos`);
  }
}

// Config server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor funcionando. Revisa la consola para ver la información periódica.\n');
});

// Servidor iniciado en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
  
  // Intevalo de recarga de info
  setInterval(logSystemInfo, intervalSeconds);
});

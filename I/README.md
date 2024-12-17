# Sistemas Web 

## CREDENCIALES
- daniel.fernandezlopez
- daniel.fernandezlopez@usp.ceu.es
- 116230


## 📡 **HTTP (Hypertext Transfer Protocol)**

### 🔍 **Conceptos clave**
- **¿Qué es HTTP?**: Protocolo de comunicación que permite la transferencia de información en la web.
- **Métodos HTTP**:
  - **GET**: Solicitar datos de un servidor.
  - **POST**: Enviar datos al servidor.
  - **PUT**: Actualizar datos existentes.
  - **DELETE**: Eliminar datos en el servidor.
- **Códigos de estado (Status Codes)**:
  - **2xx**: Éxito (ej: 200 OK, 201 Created).
  - **3xx**: Redirección (ej: 301 Moved Permanently, 302 Found).
  - **4xx**: Errores del cliente (ej: 404 Not Found, 401 Unauthorized).
  - **5xx**: Errores del servidor (ej: 500 Internal Server Error).
- **Headers HTTP**: Información adicional enviada con cada solicitud o respuesta (Content-Type, Authorization, etc.).

### 📋 **Comandos útiles**
```bash
# Simular una solicitud GET con cURL
curl -X GET https://api.ejemplo.com/datos

# Simular una solicitud POST con cURL enviando un body en formato JSON
curl -X POST https://api.ejemplo.com/datos -H "Content-Type: application/json" -d '{"nombre":"Daniel"}'
```

## 🌐 **HTML (HyperText Markup Language)**

### 🔍 **Conceptos clave**
- **¿Qué es HTML?**: Lenguaje de marcado para estructurar contenido web.
- **Estructura de una página HTML**:
  ```html
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Título de la Página</title>
  </head>
  <body>
    <h1>Encabezado Principal</h1>
    <p>Este es un párrafo de ejemplo.</p>
  </body>
  </html>
  ```
- **Etiquetas esenciales**:
  - **Encabezados**: `<h1>`, `<h2>`, `<h3>`, etc.
  - **Párrafos**: `<p>`
  - **Enlaces**: `<a href="url">Texto del enlace</a>`
  - **Imágenes**: `<img src="url" alt="descripción">`
  - **Listas**: `<ul>`, `<ol>`, `<li>`
  - **Formularios**: `<form>`, `<input>`, `<button>`


## 🎨 **CSS (Cascading Style Sheets)**

### 🔍 **Conceptos clave**
- **¿Qué es CSS?**: Lenguaje de estilos que define la apariencia de las páginas web.
- **Sintaxis**:
  ```css
  selector {
    propiedad: valor;
  }
  ```
- **Selectores**:
  - **Etiqueta**: `h1 { color: red; }`
  - **Clase**: `.clase { color: blue; }`
  - **ID**: `#id { color: green; }`

### 📋 **Ejemplos de código**
```css
/* Selecciona todos los párrafos */
p {
  color: red;
}

/* Selecciona elementos con clase 'boton' */
.boton {
  background-color: blue;
  color: white;
}
```

## 💻 **JavaScript (JS)**

### 🔍 **Conceptos clave**
- **¿Qué es JavaScript?**: Lenguaje de programación que permite la interactividad en las páginas web.
- **Variables y Tipos de Datos**:
  ```javascript
  let nombre = 'Daniel';
  const PI = 3.14159;
  ```
- **Estructuras de control**: `if`, `else`, `for`, `while`.
- **Funciones**: 
  ```javascript
  function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  ```
- **Manipulación del DOM**: 
  ```javascript
  document.getElementById('miElemento').innerText = 'Texto cambiado';
  ```

### 📋 **Ejemplos de código**
```javascript
const boton = document.getElementById('boton');

boton.addEventListener('click', function() {
  alert('¡Hiciste clic en el botón!');
});
```

## 🚀 **Node.js**

### 🔍 **Conceptos clave**
- **¿Qué es Node.js?**: Entorno de ejecución para JavaScript en el servidor.
- **¿Para qué se usa?**: Para crear aplicaciones de backend.
- **Módulos importantes**:
  - `http`: Para crear servidores web.
  - `fs`: Para trabajar con archivos.
  - `path`: Para manejar rutas de archivos.

### 📋 **Comandos útiles**
```bash
# Inicializar un proyecto Node.js
npm init -y

# Instalar dependencias
npm install express
```

### 📋 **Ejemplos de código**
```javascript
// Importar módulos
const http = require('http');

// Crear servidor
const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola, mundo!');
});

// Escuchar en el puerto 3000
servidor.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```
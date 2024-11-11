const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const schedule = require('node-schedule');

const app = express();
const port = 3000;

// URL de la página de la Wikipedia: Portada
const url = 'https://es.wikipedia.org/wiki/Wikipedia:Portada';

let featuredArticleData = {
    title: '',
    text: '',
    link: ''
};

async function getFeaturedArticle() {
    try {
        // Hacemos la solicitud GET a la URL
        const { data } = await axios.get(url);

        // Usamos cheerio para cargar el HTML y buscar el artículo destacado
        const $ = cheerio.load(data);

        // Seleccionamos el contenido del artículo destacado, que está en la sección 'Artículo destacado'
        const title = $('#main-tfa a title').text().trim();
        
        // Seleccionamos todos los párrafos dentro de la sección del artículo destacado
        let featuredArticle = '';
        $('#main-tfa p').each((i, elem) => {
            featuredArticle += $(elem).text().trim() + '\n';
        });

        const articleLink = 'https://es.wikipedia.org/wiki/Wikipedia:Portada';

        // Actualizamos los datos del artículo destacado
        featuredArticleData = {
            title,
            text: featuredArticle,
            link: articleLink
        };

        // Mostramos el artículo destacado y el enlace en la consola
        console.log(`Artículo destacado del día: ${title}`);
        console.log(`Texto del artículo:\n${featuredArticle}`);
        console.log(`Enlace: ${articleLink}`);

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Programamos la tarea para que se ejecute cada día a las 00:00
schedule.scheduleJob('0 0 * * *', () => {
    getFeaturedArticle();
});

// Ruta para obtener el artículo destacado
app.get('/featured-article', (req, res) => {
    res.json(featuredArticleData);
});

// Ruta principal para mostrar el artículo destacado en el navegador
app.get('/', (req, res) => {
    res.send(`
        <h1>Artículo destacado del día</h1>
        <h2>${featuredArticleData.title}</h2>
        <p>${featuredArticleData.text.replace(/\n/g, '<br>')}</p>
        <a href="${featuredArticleData.link}">Leer más</a>
    `);
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    // Obtenemos el artículo destacado al iniciar el servidor
    getFeaturedArticle();
});
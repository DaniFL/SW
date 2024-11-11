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
        // Solicitud GET a la URL
        const { data } = await axios.get(url);

        // Cheerio --> cargar el HTML y buscar el artículo destacado
        const $ = cheerio.load(data);

        // Capturamos el título del artículo destacado (etiqueta <a> no tenia clase ni id, capturamos la primera que encontramos - eq(0))
        const title = $('.main-header.main-box-header').children().filter('a').eq(0).text().trim();
        
        // Seleccionamos todos los párrafos dentro de la sección del artículo destacado - capturar texto completo
        let featuredArticle = '';
        $('#main-tfa p').each((i, elem) => {
            featuredArticle += $(elem).text().trim() + '\n';
        });

        const articleLink = $('.main-header.main-box-header a').attr('href');

        // Actualizamos los datos del artículo destacado
        featuredArticleData = {
            title,
            text: featuredArticle,
            link: url,
            link2: `https://es.wikipedia.org${articleLink}`
        };
        // Mostramos los datos por pantalla
        console.log(`Artículo destacado del día: ${title}`);
        console.log(`Texto del artículo:\n${featuredArticle}`);
        console.log(`Enlace Portada: ${url}`);
        console.log('Enlace Artículo:', `https://es.wikipedia.org${articleLink}`);

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Programamos la tarea para que se ejecute cada hora
schedule.scheduleJob('0 * * * *', () => {
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
        <p><a href="${featuredArticleData.link}">Portada</a></p>
        <p><a href="${featuredArticleData.link2}">Artículo completo</a></p>
    `);
});

// Confiuguración sesión servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    getFeaturedArticle();
});
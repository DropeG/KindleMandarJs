import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors'
import {scrapeWebsite}  from "./scraper.js"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Para servir archivos estáticos

// Ruta para manejar el scraping
app.post('/scrape', async (req, res) => {
    const { url } = req.body;
    try {
        const results = await scrapeWebsite(url);
        res.json(results);
    } catch (error) {
        console.error('Error scraping website:', error);
        res.status(500).json({ error: 'Error al scrapear la página' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
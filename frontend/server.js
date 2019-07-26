const express = require('express');
const next = require('next');
const compression = require('compression');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Wordpress API Configuration
const wp = require('./next.config').publicRuntimeConfig.wp;

app.prepare().then(() => {
    const server = express();

    server.use(express.json());
    server.use(compression());

    server.use(express.static(__dirname + '/static'));

    server.get('/artist/:slug', (req, res) => {
        const actualPage = '/post';
        const queryParams = { slug: req.params.slug };
        app.render(req, res, actualPage, queryParams);
    });

    // Create a new post using the /post endpoint
    // https://github.com/WP-API/node-wpapi#creating-posts

    server.post('/api/artist', async (req, res) => {
        const { body = {} } = req;
        try {
            const response = await wp.artista().create(body);
            res.send(response);
        } catch (error) {
            res.send(error);
        }

    });
    server.put('/api/artist', async (req, res) => {
        const { artistId, data } = req.body;
        try {
            const response = await wp.artista().id(artistId).update(data);
            res.send(response);
        } catch (error) {
            res.send(error);
        }

    });

    server.get('/api/artist/genre/:genre_id', async (req, res) => {
        const { genre_id = '' } = req.params;
        if (genre_id) {
            const artists = await wp.artista().param('genero_musical', [genre_id]);
            return res.json({ data: artists });
        }
        return res.json({ data: [] });
    });


    server.get('*', (req, res) => {
        return handle(req, res);
    });


    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`NextJS is ready on port ${PORT}!`);
    });

}).catch((error) => {
    console.error(error.stack);
});
const express = require('express');
const server = express();


const PORT = process.env.PORT || 80;
const dev = process.env.NODE_ENV == 'dev' || process.env.NODE_ENV == 'development';



// Wordpress API Configuration
const wp = require('./src/wordpressConfig');

// IMPORTANT
// WP REST Filter plugin allow us to filter by meta value, so if you want to filter by email, you will need to do this after
// activate the plugin
// http://admin.example.com:5000/wp-json/wp/v2/usuario?filter[meta_key]=email&filter[meta_value]=wernerlucas12@gmail.com

// Middlewares
server.use(express.json());
// Add headers
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Routes
server.get('/artista/:slug', async (req, res) => {
    try {
        const artista = await wp.artista().slug(req.params.slug);
        return res.json({ data: artista });
    } catch (error) {
        return res.send(error);
    }
});
server.get('/artistas', async (req, res) => {
    try {
        const artistas = await wp.artista();
        return res.json({ data: artistas });
    } catch (error) {
        return res.send(error);
    }
});
server.get('/', async (req, res) => {
    try {
        const posts = await wp.posts();
        return res.json({ posts });
    } catch (error) {
        return res.send(error);
    }
});
server.get('/post/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const data = await wp.posts().slug(slug);
        return res.json({ ...data[0] });
    } catch (error) {
        return res.send(error);
    }
});
server.get('/media/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await wp.media().id(id);
        return res.send(data);
    } catch (error) {
        return res.send(error);
    }
});


// Create a new post using the /post endpoint
// https://github.com/WP-API/node-wpapi#creating-posts

server.post('artist', async (req, res) => {
    const { body = {} } = req;
    try {
        const response = await wp.artista().create(body);
        res.send(response);
    } catch (error) {
        res.send(error);
    }

});
server.put('artist', async (req, res) => {
    const { artistId, data } = req.body;
    try {
        const response = await wp.artista().id(artistId).update(data);
        res.send(response);
    } catch (error) {
        res.send(error);
    }

});

server.get('artist/genre/:genre_id', async (req, res) => {
    const { genre_id = '' } = req.params;
    if (genre_id) {
        const artists = await wp.artista().param('genero_musical', [genre_id]);
        return res.json({ data: artists });
    }
    return res.json({ data: [] });
});


// Execute
server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`API is working on PORT: ${PORT} in: ${dev ? 'DEV' : 'PRODUCTION'} mode ... `);
});

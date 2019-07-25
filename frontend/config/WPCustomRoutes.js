/**
 *
 *
 *
 * Query Parameters & Filtering Custom Routes
 *
 * http://wp-api.org/node-wpapi/custom-routes/
 *
 *
 *
 *
Many of the filtering methods available on the built-in collections are built in to custom-registered handlers, including .page(), .perPage(), .search(), .include()/.exclude() and .slug(); these parameters are supported across nearly all API endpoints, so they are made available automatically to custom endpoints as well.

However not every filtering method is available by default, so for convenience a configuration object may be passed to the registerRoute method with a params property specifying additional query parameters to support. This makes it very easy to add existing methods like .before() or .after() to your own endpoints:

site.handler = site.registerRoute( 'myplugin/v1', 'collection/(?P<id>)', {
    // Listing any of these parameters will assign the built-in
    // chaining method that handles the parameter:
    params: [ 'before', 'after', 'author', 'parent', 'post' ]
});
// yields
site.handler().post( 8 ).author( 92 ).before( dateObj )...
If you wish to set custom parameters, for example to query by the custom taxonomy genre, you can use the .param() method as usual:

site.handler().param( 'genre', genreTermId );
but you can also specify additional query parameter names and a .param() wrapper function will be added automatically. e.g. here .genre( x ) will be created as a shortcut for .param( 'genre', x ):

site.books = site.registerRoute( 'myplugin/v1', 'books/(?P<id>)', {
    params: [ 'genre' ]
});
// yields
site.books().genre([ genreId1, genreId2 ])...
 *
*/

module.exports = {
    // Custom Taxonomies
    "generos_musicales": {
        "path": "/generos_musicales/",
        "params": []
    },
    // Custom Post Types
    "artists": {
        "path": "/artist/",
        "params": [
            "generos_musicales"
        ]
    },
    "events": {
        "path": "/event/",
        "params": []
    }
}
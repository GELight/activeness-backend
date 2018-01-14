var restify = require('restify');
var config = require('./config');

const server = restify.createServer({
  name: config.server.name,
  version: config.server.version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Setup cors
// restify.CORS.ALLOW_HEADERS.push('accept');
// restify.CORS.ALLOW_HEADERS.push('sid');
// restify.CORS.ALLOW_HEADERS.push('lang');
// restify.CORS.ALLOW_HEADERS.push('origin');
// restify.CORS.ALLOW_HEADERS.push('withcredentials');
// restify.CORS.ALLOW_HEADERS.push('x-requested-with');
// server.use(restify.CORS());
// server.use(restify.CORS({
//     'origins': ['http://localhost:4200']
// }));

// var config = require('./resources/index');

const categories = [
    'music',
    'excursion',
    'event',
    'opening',
    'food',
    'relaxation',
    'dance',
    'family',
    'guides',
    'culture',
    'exhibition',
    'market',
    'meetup',
    'others'
];

// 
// Activities

server.get('/api/activities', function (req, res, next) {
    res.send({
        activities: [
            {
                id: 1,
                version: 1,
                active: true,
                categories: [1, 3, 8],
                date: 'Sun Jan 14 2018 22:09:36 GMT+0100 (Mitteleuropäische Zeit)',
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Quod ea non occurrentia fingunt, vincunt Aristonem; Non enim solum Torquatus dixit quid sentiret, sed etiam cur. Sed ad bona praeterita redeamus.",
                img: "http://www.hltretz.ac.at/eventplanet/wp-content/uploads/2015/12/Event-management-post-1.png",
                action: true,
                sport: true,
                rating: 3,
                reservation: true
            }
        ]
    });
    return next();
});

// 
// Categories

server.get('/api/categories', function (req, res, next) {
    let categoriesList = { categories: [] };
    for (let i=0; i < categories.length; i++) {
        categoriesList.categories.push({
           id: i,
           name: categories[i] 
        });
    }
    res.send(categoriesList);
    return next();
});


// 
// Category

server.get('/api/categories/:cid', function (req, res, next) {
    res.send({
        categories: {
            id: req.params.cid,
            name: categories[req.params.cid]
        }
    });
    return next();
});


//
// Start Server Listener

server.listen(config.server.port, function () {
  console.log('%s listening at %s', server.name, server.url);
});
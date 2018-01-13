var restify = require('restify');
var config = require('./config');

const server = restify.createServer({
  name: config.server.name,
  version: config.server.version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// var config = require('./resources/index');

// 
// Activities

server.get('/api/activities', function (req, res, next) {
    res.send({
        activities: [
            {
                id: 1,
                version: 1,
                active: true,
                date: null,
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
    res.send({
        categories: [
            {
                id: 1,
                name: "music"
            }
        ]
    });
    return next();
});


//
// Start Server Listener

server.listen(config.server.port, function () {
  console.log('%s listening at %s', server.name, server.url);
});
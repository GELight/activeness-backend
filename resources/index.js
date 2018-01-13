
// 
// Test

server.get('/activities', function (req, res, next) {
    res.send({
        activities: [
            {
                id: 1,
                version: 1,
                active: true,
                date: DS.attr('date'),
                title: DS.attr('string'),
                description: DS.attr('string'),
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

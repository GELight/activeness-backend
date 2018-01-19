const Sequelize = require('sequelize');
const config = require('../resources/config');

//
// DB - Connection


const sequelize = new Sequelize(config.db.connection.database, config.db.connection.user, config.db.connection.password, {
    host: config.db.connection.host,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
});

// 
// Definition - Categories

const Categories = sequelize.define('categories', {
    name: Sequelize.STRING
});
sequelize.sync().then(() => Categories.create({ 
    name: 'music' 
}));
  
// 
// Definition - Activities

// const Activities = sequelize.define('activities', {
//     version: Sequelize.NUMBER,
//     active: Sequelize.BOOLEAN,
//     categories: Sequelize.ARRAY,
//     // organizer: DS.belongsTo('organizer', { async: true }),
//     date: Sequelize.date,
//     title: Sequelize.STRING,
//     description: Sequelize.STRING,
//     img: Sequelize.STRING,
//     // address: DS.hasMany('address', { async: true }),
//     action: Sequelize.BOOLEAN,
//     sport: Sequelize.BOOLEAN,
//     // suitabilities: DS.hasMany('suitability', { async: true }),       // geeignet für Kinder, Erwachsene, Senioren ... ???
//     // costs: DS.hasMany('cost', { async: true }),                      // String ???
//     // langs: DS.hasMany('language', { async: true }),                  // Relation needed ???
//     rating: Sequelize.NUMBER,
//     // comments: DS.hasMany('comment', { async: true }),
//     reservation: Sequelize.BOOLEAN
// });
// sequelize.sync().then(() => Activities.create({ 
    
// }));

    


module.exports = sequelize;
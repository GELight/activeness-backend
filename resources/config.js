const config = {
    server: {
        name: "activeness-backend",
        version: "1.0.0",
        port: 4201,
        pathPrefix: "api"
    },
    db: {
        connection: {
            user: 'postgres',
            host: '172.17.0.1',
            database: 'postgres',
            password: 'example',
            port: 5432
        }
    }
};

module.exports = config;
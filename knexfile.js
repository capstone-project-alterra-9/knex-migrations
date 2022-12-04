require('dotenv').config();

const connectionUrl = process.env.POSTGRES_URL || 'postgresql://postgres:password@localhost:5432/capstone-project';

module.exports = {

    development: {
        client: 'pg',
        connection: connectionUrl,
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },
    production: {
        client: 'pg',
        connection: 'postgresql://postgres:qfW8Lk0MsdTzVJF5F1lX@containers-us-west-37.railway.app:7302/railway',
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './migrations',
        },
    },

};

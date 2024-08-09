const swaggerAutogen = require('swagger-autogen')()
require('dotenv').config()

const doc = {
    info: {
        version: '1.0.0',
        title: 'API - NodeJS',
        description: 'API de teste para estudo de NodeJS',
    },
    host: `${process.env.DB_HOST}:${process.env.APP_PORT}`,
    security: [
        {
            "apiKeyAuth": []
        }
    ],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'Bearer <token'
        }
    },

}

const arquivoSaida = './src/routes/doc.swagger.json'
const arquivoRotas = ['./src/routes/routes.js']

swaggerAutogen(arquivoSaida, arquivoRotas, doc)
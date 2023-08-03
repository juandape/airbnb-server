const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//Metadata info about the API
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Airbnb Clone API',
      version: '1.0.0',
    },
  },
  apis: ['./routes.js'],
};

//Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup the documentation
const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`V1 Docs are available at port: http://localhost:${port}/api/v1/docs`);
};

module.exports = { swaggerDocs };

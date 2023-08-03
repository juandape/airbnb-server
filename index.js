const app = require('./app');
const { swaggerDocs: V1SwaggerDocs } = require('./src/v1/swagger');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}!`);
  V1SwaggerDocs(app, port);
});

module.exports = app;
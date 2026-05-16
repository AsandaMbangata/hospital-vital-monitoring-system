const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const patientRoutes = require('./api/patientRoutes');

const app = express();

const swaggerDocument = YAML.load('./docs/openapi.yaml');

app.use('/api/patients', patientRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

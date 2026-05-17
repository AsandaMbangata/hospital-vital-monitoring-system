const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const patientRoutes = require('./api/patientRoutes');

const app = express();

app.use(express.json());

// Basic test route (to confirm server is running)
app.get('/', (req, res) => {
    res.send('Hospital API is running');
});

// API routes
app.use('/api/patients', patientRoutes);

// Load Swagger YAML safely
let swaggerDocument;

try {
    swaggerDocument = YAML.load(
        path.join(__dirname, 'docs', 'openapi.yaml')
    );
    console.log('Swagger YAML loaded successfully');
} catch (error) {
    console.error('Error loading Swagger file:', error.message);
}

// Swagger UI
if (swaggerDocument) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} else {
    console.log('Swagger not loaded - /docs disabled');
}

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});

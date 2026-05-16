const express = require('express');

const patientRoutes = require('./api/patientRoutes');
const doctorRoutes = require('./api/doctorRoutes');
const vitalSignRoutes = require('./api/vitalSignRoutes');

const app = express();

app.use(express.json());

app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/vitals', vitalSignRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
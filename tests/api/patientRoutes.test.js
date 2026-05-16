const request = require('supertest');
const app = require('../../server');

describe("Patient API", () => {

    test("GET /api/patients", async () => {

        const response = await request(app)
            .get('/api/patients');

        expect(response.statusCode).toBe(200);
    });

});

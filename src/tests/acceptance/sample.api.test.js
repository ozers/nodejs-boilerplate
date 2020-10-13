const request = require('supertest');
const {describe, it} = require('mocha');
const {expect} = require('chai');
const app = require('../../../app');

describe('Tests For GET Sample route', () => {
    it('should return 200 for sample route', (done) => {
        request(app)
            .get('/app/sample/route')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    if (err) throw err;
                }
                expect(res.status).to.equal(200)
                done()
            });
    });
});

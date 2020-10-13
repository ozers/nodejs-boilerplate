const sample = require('../controllers/sample.controller');

module.exports = (app) => {
    app.get('/app/sample/route', sample.sampleController);

    app.get('/app/subscriber', sample.sampleController);
}

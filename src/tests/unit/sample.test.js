const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Index Test', () => {
    it('should be equal', () => {
        expect(2 + 3).to.equal(5);
    });
});

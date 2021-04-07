const chai = require('chai')
const expect = chai.expect
const calc = require('./Calculator')


describe(' Calculator test suite - 1', () => {

    
    it('Add test', () => {
        let actuals = calc.add(10,20)
        expect(actuals).to.eql(30)
    });

    it('Mul test', () => {

        expect(calc.mul(10,40)).to.eql(400);
    });

});

const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should


describe(' Demo test suite - 1', () => {

    let cities = ['Dubai','Abu Dhabi', 'Sharjah','Riyadh', 'Doha', 'Muscat']
    it('Demo test1', () => {
        expect(cities.length).to.equal(6)
        expect(cities[0]).to.equal('Dubai')
        expect(cities[2].length).to.equal(7)
        expect(cities[5].length).to.be.gt(3)
        
        
        assert.lengthOf(cities,6,'No of cities incorrect')


        
    })



});

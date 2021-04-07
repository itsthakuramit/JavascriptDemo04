

describe(' Demo test suite - 1', () => {
    let counter = 1;
    let aftercounter = 1;
    before( () =>{
        console.log('Inside before method .....')
    })

    after( ()=>{
        console.log('Inside after method......')
    })

    beforeEach( ()=>{
        console.log('this runs everytime before the it spec : '+counter++)
    })

    afterEach(()=>{
        console.log('this runs everytime after the it spec'+aftercounter++)
    })

    it('Demo test1', () => {
        console.log('Demo test1')
    })

    it('Demo test2', () => {
        console.log('Demo test2')
    })

    it('Demo test3', () => {
        console.log('Demo test4')
    })


});

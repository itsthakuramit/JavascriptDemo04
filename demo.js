// import {add} from './Calculator';

const calc = require('./Calculator')

console.log(calc.add(10,40))

if(calc.add(10,90) === 100){
    console.log('Add method passed')
}


if(calc.sub(90,10) === 80){
    console.log('Sub method passed')
}


if(calc.mul(10,90) === 900){
    console.log('Mul method passed')
}


if(calc.div(90,10) === 9){
    console.log('Div method passed')
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// console.log(result);


let studentArray = [
    {id:'s001',name:'Sam',dept:'CSE',email:'',fees:1000},
    {id:'s002',name:'Samuel',dept:'CSE',email:'',fees:1000},
    {id:'s003',name:'SamDaniel',dept:'EEE',email:'',fees:980},
    {id:'s004',name:'Samsun',dept:'EEE',email:'',fees:1020},
    {id:'s005',name:'Simpson',dept:'CSE',email:'',fees:1000},
]

let cseStudents = studentArray.filter(student => student.dept==='CSE')
// console.log(cseStudents)


const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

// console.log(array1);
// console.log(map1);

// console.log(studentArray)
// const studentemaillist = studentArray.map( (student) => student.email = student.name+'@gmail.com')
// console.log(studentemaillist)


const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
// console.log(array2.reduce(reducer));


const totalfeescollected =  studentArray.reduce( (accumulator,student) => {
    accumulator += student.fees;
    return accumulator;
    }, 0);

console.log(`Total fees collected : ${totalfeescollected}`)

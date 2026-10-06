let decimal: number= 6;
let float: number = 3.1411;

let color: string = "Blue";


const uniqueKey: symbol = Symbol('description');
const ob = {
    [uniqueKey]: 'This is unique'
};

console.log(ob);
console.log(uniqueKey);
console.log(ob[uniqueKey]);
"use strict";
let decimal = 6;
let float = 3.1411;
let color = "Blue";
const uniqueKey = Symbol('description');
const ob = {
    [uniqueKey]: 'This is unique'
};
console.log(ob);
console.log(uniqueKey);
console.log(ob[uniqueKey]);

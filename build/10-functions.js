"use strict";
function getTime() {
    return new Date().getTime();
}
function add1(a, b, c) {
    return a + b + (c || 0);
}
function add2(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log("Add", add2(1, 2, 3, 4, 5));

"use strict";
// Type alias
// literal variables
let myName;
const add = (a, b) => {
    return a + b;
};
const logMess = (a) => {
    console.log(a);
};
// option params
const sumAll = (a, b, c) => {
    if (typeof c === 'undefined') {
        return a + b;
    }
    return a + b;
};
// default params value
const addAll = (a = 2, b, c) => {
    if (typeof c === 'undefined') {
        return a + b;
    }
    return a + b;
};
// Rest param
const totalRest = (...num) => {
    return num.reduce((prev, cur) => prev + cur);
};
console.log(totalRest(1, 2, 3, 4, 5, 6, 7, 8, 9));

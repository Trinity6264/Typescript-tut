// Type alias

type stringOrNumber = string | number
type stringOrNumberArr = (string | number)[]

interface UserSchema {
    name: string,
    age: number,
    isAdult: boolean,
    hobbies: stringOrNumberArr,
}


// literal variables

let myName: 'Dave'

// Creating an interface for common params and return type

type mathFunc = (a: number, b: number) => number;


const add: mathFunc = (a, b): number => {
    return a + b;
}
const logMess = (a: string) => {
    console.log(a);
}

// option params
const sumAll = (a: number, b: number, c?: number): number => {
    if (typeof c === 'undefined') {
        return a + b;
    }
    return a + b;
}
// default params value
const addAll = (a: number = 2, b: number, c?: number): number => {
    if (typeof c === 'undefined') {
        return a + b;
    }
    return a + b;
}

// Rest param
const totalRest = (...num: number[]) => {
    return num.reduce((prev, cur) => prev + cur);
}

console.log(totalRest(1,2,3,4,5,6,7,8,9));



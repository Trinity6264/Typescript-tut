let myName: string;
let myNumber: number;
let isLoading: boolean;
let album: any;

myName = 'Alex';
myNumber = 4;
isLoading = false


// define the sum of number
const sum = (a: number, b: number) => {
    return a + b;
}

// declaring a variable with union data type
let postId: string | number
let isActive:  number | boolean

let re : RegExp = /\w+/g

// Array of string
let stringArr: string[] = ['Hello', 'Mouse', 'DC']


// union array
let musicians = ['Sarkodie', 'Sheriff', 419]

// Mixed array 
let year = ['covid', 2020, true]


//interface for an object
interface UserSchema {
    username: string,
    // optional field 
    age?: number,
    isMale: boolean,
    gpa?: (number | string)[]
}

let user1: UserSchema = {
    username: 'alex',
    age: 5,
    isMale: true,
    gpa: []
}

//Enums

enum Grade { A, B, C, D, E, F }

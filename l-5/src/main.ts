type one = string
type two = string | number
type three = 'Alex'

// convert to more or less specific

let a: one = 'Alex'

let b = a as two; //less specific

let d = <two> 5 ;

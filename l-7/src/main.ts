// Index signature

interface Transaction {
    readonly [index: string] :  number | boolean

}

const todayTransactions: Transaction = {
    Books: -10,
    Job: true,
    Pizza: 300
}

console.log(todayTransactions.Books);


let prop: string = 'Pizza';
console.log( todayTransactions );


///////////////////////////////////

type LivingThing = {
   
    type: 'human' | 'Animal'
}


class Human implements LivingThing{

    constructor(
        public type: 'human',
        public age: number
        
    ){
        this.type = type;
    }
    

}
// classes 



class Coder {
    // default const
    constructor(
        public readonly name: string, // once the name is assign u can't change it
        public lang: string,
        protected age: number = 50,
        private genre?: string, // can't be access outside the class
    ) {
        this.name = name
        this.genre = genre
        this.lang = lang
        this.age = age
    }

    public getAge = () => {
        console.log(this.genre);

    }

}
// creating an object of coder class
const user = new Coder('play', 'sd', 0)

user.getAge()

class WebDev extends Coder {
    constructor(
        public readonly computer: string,
        name: string,
        genre: string,
        lang: string,
        age: number,
    ) {
        super(name, lang, age, genre)
        this.computer = computer
    }


}

let p = new WebDev('Play', 'Alex', 'Hiplife', 'Akan', 30)



// ==============================>>>>>>>>>>>



type Musician = {
    name: string,
    instrument: string,
    play(action: string): string
}


class Drummer implements Musician {

    constructor(public name: string, public instrument: string) {
        this.instrument = instrument;
        this.name = name;
    }

    play(action: string): string {
        return `${this.name} is ${action} the ${this.instrument}`
    }
}

const userDrummer = new Drummer('Alex', 'Drums')


console.log(userDrummer.play('playing'));

// ============== Static keyword >>>>>>>>>>?

class Peep {
    static count: number = 0;

    static getCount = (): number => {
        return Peep.count;
    }
    public id: number
    constructor() {
        this.id = ++Peep.count;
    }
}
const pla = new Peep()
const pla2 = new Peep()
const pla4 = new Peep()

console.log(pla.id);
console.log(Peep.count);




class Person {
   private setData: string[];

    constructor() {
        this.setData = [];
    }


    public set data(value: string[]) {
        if (Array.isArray(value) && value.every((val) => typeof val === 'string')) {
            this.setData = value;
            return;
        }
        else {
            throw new Error('params takes only string of list but type')
        }
    }
    public get data() {
        return this.setData;
    }
}

let person1 = new Person();

person1.data = ['Sarkodie', 'Guru', "Sheriff"]
console.log(person1.data);

person1.data = [...person1.data,'Meek mill']
console.log(person1.data);

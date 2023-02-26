"use strict";
// classes 
class Coder {
    // default const
    constructor(name, // once the name is assign u can't change it
    lang, age = 50, genre) {
        this.name = name;
        this.lang = lang;
        this.age = age;
        this.genre = genre;
        this.getAge = () => {
            console.log(this.genre);
        };
        this.name = name;
        this.genre = genre;
        this.lang = lang;
        this.age = age;
    }
}
// creating an object of coder class
const user = new Coder('play', 'sd', 0);
user.getAge();
class WebDev extends Coder {
    constructor(computer, name, genre, lang, age) {
        super(name, lang, age, genre);
        this.computer = computer;
        this.computer = computer;
    }
}
let p = new WebDev('Play', 'Alex', 'Hiplife', 'Akan', 30);
class Drummer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.instrument = instrument;
        this.name = name;
    }
    play(action) {
        return `${this.name} is ${action} the ${this.instrument}`;
    }
}
const userDrummer = new Drummer('Alex', 'Drums');
console.log(userDrummer.play('playing'));
// ============== Static keyword >>>>>>>>>>?
class Peep {
    constructor() {
        this.id = ++Peep.count;
    }
}
Peep.count = 0;
Peep.getCount = () => {
    return Peep.count;
};
const pla = new Peep();
const pla2 = new Peep();
const pla4 = new Peep();
console.log(pla.id);
console.log(Peep.count);
class Person {
    constructor() {
        this.setData = [];
    }
    set data(value) {
        if (Array.isArray(value) && value.every((val) => typeof val === 'string')) {
            this.setData = value;
            return;
        }
        else {
            throw new Error('params takes only string of list but type');
        }
    }
    get data() {
        return this.setData;
    }
}
let person1 = new Person();
person1.data = ['Sarkodie', 'Guru', "Sheriff"];
console.log(person1.data);
person1.data = [...person1.data, 'Meek mill'];
console.log(person1.data);

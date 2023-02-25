type one = string
type two = string | number
type three = 'Alex'

// convert to more or less specific

let a: one = 'Alex'

let b = a as two; //less specific

let d = <two> 5 ;

// The dom
const img = document.querySelector('img')!
const myImg =<HTMLImageElement> document.getElementById('#img')

img.src

myImg.src 

// testing my knowledge


const year = <HTMLElement> document.getElementById('year')
const thisYear = new Date().getFullYear().toString();
year.setAttribute('dateTime',thisYear)
year.textContent = thisYear;
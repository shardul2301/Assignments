// decoretors in typescript
function Logger(constructor: Function) {
  console.log("A new instance of this class was created!");
}
@Logger
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("dd");
console.log(p)

function Component(constructor: Function) {
  constructor.prototype.uniqueId = Date.now();
}

@Component
class ProfileComponent {}

const comp = new ProfileComponent() as any;
console.log(comp.uniqueId); // Shows a timestamp



function demo1(constructor : Function){
    console.log('this is demo1 function ')
}
function demo2(constructor:Function){
    console.log("this is demo2 ")
}
@demo1
@demo2
class theprofile{}



// modules export things in typescript 

// shapes .ts
export class Circle {
    constructor(public redius : number){}
}
let circle1 = new Circle(2);
console.log(circle1);

// class suqare {
//     constructor(public width : number){}
// }
// index.ts
import {Circle, Circle as mycircle} from './shapes';
let circle = new Circle(1);
console.log(circle.redius)

interface product{
    name :String;
}


// default export
export default class home {}


import home from './homefiles';


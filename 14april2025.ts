console.log('fkhsk');
function typeis<T>(val : T){
  console.log(val)
}

typeis( typeof 7);
typeis(typeof "hafksw");


function calculaterent(deposite: number): number {
return deposite * .2;
}
console.log(calculaterent(10));

let user: [number, string,number] = [1, 'Mosh',23];

console.log(user)
let sales: number = 123_456_789;
let numbers: number[] = [1, 2, 3];
console.log(sales,numbers)
enum Size { Small = 1, Medium, Large };
console.log(Size.Large)

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction.Right);
console.log(Direction.Left);
console.log(Direction.Up);

let employee: {
id: number;
name: string;
retire: (date: Date) => void
} = {
id: 1,
name: 'Mosh',
retire: (date: Date) => {},
};
console.log(employee);



type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

const employee1: Employee = {
  id: 1,
  name: "Alice",
  retire: (date: Date) => {
    console.log(`[Employee] ${employee1.name} retired on ${date.toDateString()}`);
  },
};

employee.retire(new Date());


let weight: number | string = 1;
console.log(" Initial weight:", weight);
weight = '1kg';
console.log(" Updated weight:", weight);


type Draggable = {
  drag: () => void;
};
type Droppable = {
  drop: () => void;
};
type UIWidget = Draggable & Droppable;

const widget: UIWidget = {
  drag: () => console.log(" Dragging..."),
  drop: () => console.log("Dropping..."),
};

widget.drag();
widget.drop();


type Quantity = 50 | 100;
let orderQuantity: Quantity = 100;
console.log(" Order Quantity:", orderQuantity);


let customerName: string | null = null;
console.log("[Nullable Type] Customer Name:", customerName);
customerName = "iron man";
console.log("[Nullable Type] Updated Name:", customerName);


type Customer = {
  birthdate?: Date;
};
let customer: Customer | null = null;

console.log("[Optional Chaining] Birth year:", customer?.birthdate?.getFullYear());


const customers: Customer[] | null = null;
console.log("[Optional Chaining] First customer:", customers?.[0]);

const log: ((message: string) => void) | null = null;
console.log("[Optional Chaining] This will only log if 'log' is defined");


let someValue: number | null = null;
let finalValue = someValue ?? 30;
console.log("[Nullish Coalescing] Value is:", finalValue);


type Person = {
  name: string;
  age: number;
};
let obj: any = { name: "John", age: 30 };
let person1 = obj as Person;
console.log("[Type Assertion] Person Name:", person1.name, person1.age);


function render(doc: unknown) {
  if (typeof document === "string") {
    console.log("[Unknown Type] Rendering string:", doc.toUpperCase());
  } else {
    console.log("[Unknown Type] Unknown document type:", doc);
  }
}
render("sahil");
render(123);


function processEvents(): never {
  console.log(" Entering infinite loop...");
  while (true) {
    console.log("shardul here ")
  }
}

/*
* ***********

! VARIABLES
* ***********
*/

console.log('hello');
// The console log is a debugging tool

let a = 2;

/*
    - let : is our KEYWORD
    - a : is our NAME of our variable
    - - : is our ASSGNMENT operator 
    - 2 : is our variable VALUE
*/

let b = 1;

console.log(a + b);

//! RESRICTIONS
/*
    - a variable name must begin with a letter, underscore or dollar sign.
    - numbers may follow the above characters, BUT cannot come first.
    - javascript IS case sensitive - 'hello' and 'Hello', these would be different variables.
    - no spaces are allowed in variable names.
    - camelCase is the best practice for naming.
    - ex:
        let myName = 'Eric';
        is easier to read than
        let myname = 'Eric';
*/

let startingWithLetter = "Works";
let _startWithUnderscore = "Works";
let $startWithDollarSign = "Works";
// let 4startWithNumber = "Breaks";

console.log(startingWithLetter,_startWithUnderscore, $startWithDollarSign);

let PascalCase;
let camelCase;
let snake_case;

/* 
* KEYWORDS

var, let, and const

    - var: 'old' keyword for variable. **we won't be using it as often but it is still viable to use one.

    - let: "new" keyword for variable. (introduced with ES6 *newest versions on ECMAScript, which is a standardization of JS.)

    - const: also "new" keyword that dedclares UNCHANGEABLE, or constant, variable.
*/

var variable = 'var variable';
let letVariable = 'let variable';

// let function = 1; Cannot use reserved words within a variable name - *function is a reserved word.

/*
* ***********

! DECLARATIONS & INITIALIZATIONS
* ***********
*/
// Declarations are the LEFT SIDE of the assignment operation
// let x;

// Initializations are the RIGHT SIDE of the assignment operator
// let x = 10

// 10 is our initialization.

let y;
// console.log(y);
console.log('declaration:', y);

y = 10;
console.log('initialization:', y);

y = 33;
console.log('initialization 2:', y);

let z = "light";
console.log(z); 

// We've set our variables with out let keyword, with each iteration, we have declared what it is.

//? const

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa);

today = 'Awesome!';
console.log(today, efa);

// efa = 'Super!';
console.log(today, efa);
// const allows us to make a variable that we don't want to change.





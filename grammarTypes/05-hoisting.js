/* 
* ***********
! HOISTING
* **********

    What is Hoisting?
        - JS pulls all variables and functions calls to the top of their respective scope, prior to being executed
        - Only the declaration is pulled, Not the assignment.
*/
//console.log(hoistedVar);

//console.log(`How JS see hoistedVar:`, typeof hoisetedVar);
//var hoistedVar = `using var`;
//let hoistedVar = `using let`;

//console.log(noVariable);

//var declaration; // without assignment
//console.log(usage);

//declaration = 10; // assigning our variable
//console.log(usage);

//var usage = declaration + 10;

//console.log(usage);

//? Hoisting in a Function
// this process is considered the same within a function. On the first pass, it reads it, pushes the declarations to the top and tehn executes them in the order that they are written.

function testHoist() {
    becomesGlobal = "not declared, it becomes part of the global scope";
    console.log('Prior to declaring', insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS delcare variables regardless of wheather they are in a function or global scope. This makes it clear how it shouldbe handled.

//? Using LET
// The keyword 'let' is block scopes and not function scoped

console.log(letVariable);
let letVariable = 'Using let';
//This throws a ReferenceError due to ES6 not acceptong undeclared variables. This is to ensure we ALWAYS declare our variables FIRST

//? Hoisting Function
// Function Declaration:

hoistedFunc();

function hoistedFunc() {
    console.log('This is a hoisted function')
}

// Function Expressions:
// These are NOT hoisted

expressionFunc();
let expressionFunc = function (){
    console.log('Works?');
}
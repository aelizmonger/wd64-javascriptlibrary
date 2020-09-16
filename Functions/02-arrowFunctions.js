/* 
* ***********
! ARROW FUNCTIONS
* ***********

Arrow functions are expressional functions that can be simplified into one of two forms, CONCISE amd BLOCK BODY. The main goal is to generate shorter syntax for writing a function.

* Arrow functions also do NOT get hoisted
*/

function regFunc() {
    console.log(`Refular`);
}
regFunc();

//    (1)       (2)(3)       (4)
let arrowFunc = () => console.log(`Arrow Func`);
arrowFunc(); //still need to invoke our function

/* 
    1. Arrow functions are ALWAYS annonymous.
    2. Parameters are still capable of being injected.
        - if we only have one parameter, we technically don't need the parans ()
        - BUT if we are not passing any parameters, it is REQUIRED to denote ()
    3. This sytax tells JS that we are about to process function
    4. Within this format, JS assumes the return statement. 
    
*/
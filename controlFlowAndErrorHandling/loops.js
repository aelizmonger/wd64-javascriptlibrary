/* 
* ***********
! FOR LOOPS
* ***********
    - Loops help us repeat a process without writing a lot of code.

    we need to:
        1) crreate an index
        2) run a condition
        3) change the indexing variable (execution of condition)
*/

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

/* 
    We state our loop with a "for".
    Within this function, we are injecting some parameters that JS will run against (index; condition; change -> result)

    for(<create index variable>; <run condition>; <change index>) {
        <return results>
        *will cont.until run condition is met
    }
*/

for(let i = 2; i > -10; i -= 4) {
    console.log(i);
}

let word = 'supercalifragilisticexpialidocious';
for(let i = 0; i < word.length; i++) {
    console.log(i, word[i]); 
}

/*
* ***********
! FORIN LOOP
* ***********
*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
};

for(info in city) {
    console.log(info)
    console.log(city[info]);
}

/* 
    for(variable IN object){
        <statement>
    }

*/

let list = ['milk', 'eggs', "beans", 'bread', 'bananas'];
for(item in list){
    console.log(item);
    console.log(list[item]);
}

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let fullName;

for(char in name) {
    //let lowChar = name[char].toLowerCase();
    //console.log(lowChar);
    //console.log(char);
    char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
}

console.log(fullName);


/*
* ************
! FOROF LOOP
* ************
    - In order to run a FOR OF loop, the "thing" must be numbered like an array.

    let object = {
        key: value,
        key: value,
        key: value
    };

    for(o of objects) {
        <break>
    }
*/

let indexArr = ['spot 1', 2, true, 'four'];

for(pos of indexArr) {
    console.log(pos);
}

/*
? Quick Recap:
    for loop: loops through a block of code until the counter reaches a specified number.
    for in loops: loops through properties of an object.
    for of loops: loops over iterable objects as an arrays and strings *strings can be accessed much in the same way as arrays
*/

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 92;
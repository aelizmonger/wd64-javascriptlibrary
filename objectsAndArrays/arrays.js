/* 
* ***********
! ARRAYS
* **********
*/

//? POPULATING & REFERING

//let list = ['orange', 'banana', 'oreos'];
//console.log(list[1]);

// JS counts stating at 0. So in this array, it would be 0-2
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NOTATION.

//let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];

//console.log(students instanceof Array); // the instanceof operator is used to check the type of an object at run time. Remember that arrays are technically objects. 

//console.log(students[2]);

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
//Index Position: (0)      (1)        (2)    (3)   (4)  (5)             (6)
//let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];

//console.log(students[1]);
//console.log(students[6][2]);
//console.log(`Hello ${students[6][2]}`);
//console.log(`Hello ${students[1]}`);

//? ARRAY METHODS

// we have multiple methods to allow us to manipulate arrays as we may need. 

let food = ['Pecan Pie', 'Shrimp', 'Quesidilla', 'Cheese cake', 'Hotdog'];

for (foodItem of food) {
    console.log(foodItem)
}

//Add to our array
food.push('Pizza');
console.log('push: ', food);

//Remove and insert
food.splice(1, 1, 'Bananas'); //Removes Shrimp and add Banana => (position,how many to remove, what to add)
console.log('splice: ', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('Splice 2: ', food);

//Removes from end
food.pop(); // pop removes the last item of an array
console.log('pop', food);

//Adds to the start
food.unshift('Popcorn', 'Steak'); //unshift adds one or more elements to the beginning to the array.
console.log('unshift: ', food);

//Remove from start
food.shift(); //shift removes the first element in the array
console.log('shift: ', food);

//? LENGTH

// We can use a method called length() that can tell us how many values are within our array

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString());

let bool = [true, true, false];
console.log(bool.toString());

//? ITERATING
/* 
    forEach - 
        - the forEach() method executes a provided function once for each element in an array - much like a for loop or a for of loop

        - runs three arguements:
            1. The vlaue
            2. The index
            3. the array object itself
*/

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

//for(let i = 0; i < foodList.length; i++){
//    console.log(foodList[i]);
//}

// We invoke callback function for each element within our array.
foodList.forEach(foodItem => console.log(foodItem));
// A call back function is another function we invoke within our main function

//function print(callback){
 //   callback();
//}

foodList.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index);
});
// - The second position of the paramenter is ALWAYS the index

/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movie = ['Hunger Games', 'Harry Potter', 'The Lorax', 'Mary Poppins'];
movie.forEach(movies => console.log(movies));

movie.push('The Last Song');
console.log(movie);

movie.splice(2, 1, 'Moana');
console.log(movie);

function callbackFunction(){
        for(let i = 0; i < 100; i++){
            console.log(i)
        }
    
    const data = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return data;
}

function showGreeting(dataFromFunction){
    return "hello " + dataFromFunction.name + ", I hear you're the greatest?!"
}

console.log(
    showGreeting(callbackFunction())
)

/*
We see that in the showGreeting(callbackFunction()) line of code, we are invoking the function that we created above called callbackFunction().
The purpose of our showGreeting() function is to return a string that is built with data that will be coming from our argument.
But what if that data needs to be built first?
That's where we create a function that can run a series of operations to take in values and give us something new. In this case, the callbackFunction is returning us a object with 3 properties:
    - name
    - age
    - occupation
We can then access them in our original showGreeting() function.
By us passing the callbackFunction() as an argument in the showGreeting(), we have this dialogue with our code

Developer: "Hey, I see that the function showGreeting() returns some fun text."

Computer: "Yup, it sure does! Try it out! Just give me a value and I'll put in inside of the sentence."

Developer: "Okay, but first I need to do a couple of steps to assemble the data for you."

Computer: "Oh sure! Take your time. Just remember to make it an object, that has the property of name. But do what you must."

*/


/*
* ***********
! PROMISES
* ***********
*/

// Boolean declaration 
var amIGood = false;

// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

/* 
    - amIGood: A Boolean variable to define whether you are naughty or nice
    - iCanHasGift: the promise itself
    - resolve(gift): You made the nice list and recieved a Turbo-Man figure. The promise is resolved!
    - reject(naughty): You poor behavior has landed you on the naughty list. the promise is rejected.
*/

// Promise call 
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();


/* 
    - checkTwice: function that consumes the promise iCanHasGift
    - .then: used with function(fulfilled) {...} if promise is resolved
    - .catch: used with function(error){...} if promise is rejected.
    - fulfilled: the value passed in resolve(). In our case gift is the fulfilled value.

*/

// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message); 
        }
    );
};

// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // log before
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts'); // log after
}

checkTwice()
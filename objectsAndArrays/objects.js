/* 
* ***********
! OBJECTS
* **********
*/
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

// While we use bracket notation with arrays, we use something called DOT NOTATION for objects

//console.log('All Data', netflix);
//console.log('Just Season Info:', netflix.season1.seasonInfo);
// We are capable of utilizing bracket notation as well.
console.log('Episode:', netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//? JSON Objects
/* 
    - JSON: JavaScript Object Notation
    - The JSON syntax is derived from JavaScript object notation syntax, but the JSOW format is text only.
    - JSON exists as a string - useful when you want to fetch data from a server.
    - needs to be converted to a native JS object if you want to access it. 

*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit: 'Bugs',
        rabbit2: 'Lola',
        duck: 'Daffy',
        tDevil: 'Tamanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky',
    }
};

//object.keys() will return an array of strings that represents the properties of that object
//console.log(Object.keys(spaceJam.toonSquad)); // String of Keys

//console.log(Object.keys(spaceJam.toonSquad.tDevil)); // String of the Index numbers of that string value

console.log(Object.values(spaceJam.toonSquad));

//? Object Bracket Notation
/* 
    - object bracket notation can also allow us to find a value in an object.
    - using object bracket notation can be handy if we want to store a key in a variable and then use thet variable to parse through an object.
    - this works because ALL keys in an object are STRINGS. 
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

//let test = Object.keys(garden);
//console.log(test);
//console.log(typeof test[0]);

//Dot Notation:
console.log()

//Square Bracket
let flowerType = garden['flower']
console.log(flowerType);
// WE are accessing the keys within our object by a specific name within our quare bracket. The key name that is passed needs to be wrapped in quotes as all keys in an object are strings. 

let baking ={};
baking['zucchini'] = 'better make some bread';
//console.log(baking)
// We ave the ability to set NEW key/value paris using square brackets

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

console.log(baking[garden['vegetable']]); // here we are saying the same thing as we did above, except we are passing information from our object. garden ['vegetable'] is the same as 'zuchini' up above

let testObj = {
    'Spaces Here': true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"])

//var movie = {
  //  nameOfMovie: 'Moana',
   // runTime: 113, 
   // characters: [
     //  { charOne: {
      //      name: 'Moana',
      //      age: 16,
            //items: [(propOne: 'Heart of Te Fiti'), (propTwo: "Heihei the chicken")]
      // } }, 
         // charTwo: {
       //     name: 'Maui',
       //     age: 1000,
       //     items: ["Manaiakalani", "Tattoos"]
        //  }

   // ]
   
  //};
  
  console.log(movie.nameOfMovie);
  console.log(movie.runTime);
  console.log(movie.charOne);
  console.log(movie.charTwo);

  let movie = {
      nameOfMovie: 'Moana',
      runTime: 113,
      characters: [
         {charOne: {
             name: 'Moana',
             age: 16,
             items: [
                 {itemOne: 'Hear of Te Fiti'},
                  {itemTwo: 'Heihei the Chicken'},
                ],
         },
        },
         {charTwo: {
             name: 'Maui',
             age: 1000,
             items: [
                 {itemOne: 'Manaiakalani'}, 
                 {itemTwo: 'tattoos'},
                ],
         },
        },
        ],
        genre: "Animation",
  }

  console.log(movie.nameOfMovie);
  console.log(movie.runTime);
  console.log(movie.characters)
  console.log(movie.characters[0].name)
  console.log(movie.characters[0].items[0].itemOne)
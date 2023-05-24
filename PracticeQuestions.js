
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function sumNumbers(a, b) {
  return {
    sum: a + b,
    x: x
  };
}

const example = sumNumbers(2, 4);
console.log(example);

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const sumNumbers = (a, b) => ({
  sum: a + b,
  x: x
});

const example2 = sumNumbers(2, 4);
console.log(example2);

// 3. Write a function that returns another function. (use arrow functions please)

const createCounter = () => {
  let count = 0;

  const increment = () => {
    count++;
    console.log(`Count: ${count}`);
  };

  const decrement = () => {
    count--;
    console.log(`Count: ${count}`);
  };

  return {
    increment,
    decrement
  };
};

const counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

//The function getFunction creates a variable called y and sets it to the value 5. Then, it defines another function called insideFunc which takes an argument a and adds it to the variable y. Finally, it returns this inner function.

/*Even though the getFunction has finished running and the y variable is not accessible anymore, the inner function still remembers the value of y. So when we call getFunction()(2), it adds the argument 2 to the remembered value of y, which is 5. This gives us the result 7, and we see it printed to the console.

In simpler terms, the inner function "remembers" the value of y even after the outer function has finished, so we can still use it later. It's like having a secret memory of the variable!
*/

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}

const handleCallback = (callback) => {
  let result;
  try {
    result = callback();
  } catch (error) {
    console.log('Sorry, there was an error');
    return;
  }
  console.log(result);
};

handleCallback(couldThrowError);


////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const favoriteFoodsCount = userData.map((user) => ({
  id: user.id,
  favoriteFoods: user.favorites.food.length,
}));

console.log(favoriteFoodsCount);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const namesWithPizza = userData.reduce((accumulator, user) => {
  if (user.favorites.food.includes('pizza')) {
    accumulator.push(user.name);
  }
  return accumulator;
}, []);

console.log(namesWithPizza);

// 7. Show an an example of a switch statement being used


const userId = '111';

let userName;
let userFavoriteFood;

switch (userId) {
  case '111':
    userName = 'Peter';
    userFavoriteFood = userData[0].favorites.food.join(', ');
    break;
  case '222':
    userName = 'John';
    userFavoriteFood = userData[1].favorites.food.join(', ');
    break;
  case '333':
    userName = 'Mary';
    userFavoriteFood = userData[2].favorites.food.join(', ');
    break;
  default:
    userName = 'Unknown user';
    userFavoriteFood = 'Unknown favorite food';
}

console.log(`${userName}'s favorite food is ${userFavoriteFood}.`);

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }


const user1 = {
  ...userPersonalData,
  ...userGameData,
};

console.log(user1);




// 9. Make a copy of your new user object but override the birthday to december 31st
 
const newUser = {
  ...user,
  birthday: 'December 31st',
};

console.log(newUser);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const copiedAccomplishments = [...user.accomplishments];

console.log(copiedAccomplishments);


//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };


const { favoriteThings: { food } } = user;

console.log(food);

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const { favoriteThings: { food: [firstFood, secondFood] } } = user;

console.log(firstFood);  // 'pizza'
console.log(secondFood); // 'tacos'



// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const [name, age, ...foods] = data;

console.log(name); // 'peter'
console.log(age);  // '34'
console.log(foods); // ['apple', 'oranges', 'pizza', 'tacos']


// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;

const { name: usersName, favorites: { needs: { food: favoriteFood }, wants: { things: [favoriteThing, secondFavoriteThing] } } } = userInfo;

console.log(usersName);             // 'Peter'
console.log(favoriteFood);         // ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi']
console.log(favoriteThing);        // 'cars'
console.log(secondFavoriteThing);  // 'jewelry'

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fetchDataAsync = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchDataAsync();

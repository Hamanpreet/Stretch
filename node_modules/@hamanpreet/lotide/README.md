# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hamanpreet/lotide`

**Require it:**

`const _ = require('@hamanpreet/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
1. head: Takes an array as its argument and returns the first element of the array.

head([1, 2, 3]);    //returns 1 for [1, 2, 3]


assertArraysEqual: Takes two arrays as arguments and checks whether they are equal or not. If the two arrays are equal, the function returns true, otherwise it returns false.

assertArraysEqual([0, 1, 3], [0, 1, 3]);  // returns true

2. assertEqual: Takes two values as arguments and checks whether they are equal or not. If the two values are equal, the function returns true, otherwise it returns false.

 assertEqual("Lighthouse","Lighthouse");   //returns true


3. assertObjectsEqual: Takes two objects as arguments and checks whether they are equal or not. If the two objects are equal, the function returns true, otherwise it returns false.

const multiColorShirtObject = { colors: ["red", "blue","green"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue","green"] };
assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject);    // returns true

4. countLetters:  Takes a string as its argument and returns an object with a count of each letter in the string.

countLetters("lighthouse in the house");
results["o"] === 2        // returns true

5. countOnly: Takes an array of strings and an object of items to count as its arguments, and returns an object with a count of each item in the array that is specified in the object.

const names = ["John", "Jane", "John", "Mary", "John"];
const counts = countOnly(names, { John: true, Jane: false, Mary: true });
console.log(counts);             //returns { John: 3, Mary: 1 }

6. eqArrays: Takes two arrays as its arguments and returns a boolean value indicating whether the two arrays are equal or not.

eqArrays([1, 3, 4], [4, 3, 1])       // returns false

7. eqObjects: Takes two objects as its arguments and returns a boolean value indicating whether the two objects are equal or not.

const shirtObject = { size: "medium", color: "red" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject);      //returns true

8. findKeyByValue: Takes an object and a value as its arguments, and returns the first key in the object that has the specified value. If no key is found with the specified value, the function returns undefined.

const bestTVShowsByGenre = { sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
findKeyByValue(bestTVShowsByGenre, "The Wire");      //returns drama

9. flatten: Takes an array as its argument and returns a new array with all nested arrays flattened into a single level array.

const arr = [1,2,[3, 4],5,[6]];
flatten(arr);        //returns [1,2,3,4,5,6]

10. letterPositions: Takes a string as its argument and returns an object with the indices of each letter in the string. 

const results = letterPositions("hello world");
assertArraysEqual(results.h === [0])               //returns true

11. map: Higher-order function in JavaScript that creates a new array by applying a given function to each element of an existing array.

const words = ["ground", "control", "to", "major", "tom"];
const results2 = map(words, word => word[0]);   // returns ['g', 'c', 't', 'm', 't']

12. middle: Takes an array as its argument and returns the middle element(s) of the array. If the array has an even number of elements, the function returns an array with the two middle elements. If the array has an odd number of elements, the function returns an array with the single middle element.

middle([1, 2, 3]);            //returns [2]

13. tail: Takes an array as its argument and returns a new array containing all elements of the original array except for the first element. If the original array has only one element or is empty, the function returns an empty array.

tail([1, 2, 3])      //returns [2,3]

14. takeUntil: Takes two arguments: an array and a callback function. The function returns a new array that contains all the elements from the original array up to (but not including) the first element that causes the callback function to return a truthy value.

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);

15. without: Takes two arrays as its arguments: an array to modify and an array of elements to remove from the first array. The function returns a new array with all the elements of the first array except for the elements specified in the second array.

const myInput = [1,2,3,4,5];
const itemsToRemove = [3,5];
without(myInput,itemsToRemove)            // returns [1,2,4]
  
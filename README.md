# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @abubakar_shehu/lotide`

**Require it:**

`const _ = require('@abubakar_shehu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head` - Returns the first item in the array.
- `tail` - Returns the "tail" of an array: everything except for the first item (head) of the provided array.
- `middle` - Returns the middle-most element(s) of the given array.
- `assertArraysEqual` - Will take in two arrays and console.log an appropriate message to the console.
- `assertEqual` - Compare the two values it takes in and print out a message telling us if they match or not.
- `assertObjectsEqual` - Will take in two objects and console.log an appropriate message to the console. 
- `countLetters` - Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `countOnly` - Takes in a collection of items and return counts for a specific subset of those items.  
- `eqArrays` - Takes in two arrays and returns true or false, based on a perfect match. 
- `eqObjects` - Takes in two objects and returns true or false, based on a perfect match.
- `findKey` - Takes in an object and a callback. It then scans the object and return the first key for which the callback returns a truthy value. 
- `findKeyByValue` - Takes in an object and a value. It then scans the object and return the first key which contains the given value.
- `flatten` - Takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- `letterPositions` - Returns all the indices (zero-based positions) in the string where each character is found.
- `map` - Takes in two arguments; An array and a callback function; and returns a new array based on the results of the callback function.
- `takeUntil` - Takes in two parameters; An array and a callback function; and return a "slice of the array with elements taken from the beginning."
- `without` - Return a subset of a given array, removing unwanted elements.

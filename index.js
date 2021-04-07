'use strict';

// YOU KNOW WHAT TO DO //

/**
* identity: simply returns the input
* 
* @param {value} value: any value
* 
* @returns {value}: the exact same input value
* 
*/ 

function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: determines the dataytype of the input value
 * 
 * @param {any value} value: any value
 * 
 * @returns {String}: the datatype of the input value
 * 
 */
 
 function typeOf(value){
     if (Array.isArray(value)){
        return "array";
    } else if (value === undefined){
        return "undefined";
    } else if (value === null){
        return "null";
    } else if (value instanceof Date){
        return "date";
    } else {
        return typeof value;
    }
    
}
module.exports.typeOf = typeOf;


/**
 * first: returns the first x amount of values from an array 
 * 
 * @param {Array} array: an array
 * @param {Number} number: number representing the first <number> of elements to return from the array
 * 
 * @returns {Array or String}: array of the first <number> of elements from <array> or a string of the first 
 *  element in <array> if number is not given/not a number
 * 
 */
 
 function first(array, number){
    if (!Array.isArray(array) || number <= 0){
        return []; 
    }
    if (!number){
        return array[0];
    }
    return array.slice(0, number);
}
module.exports.first = first;


/**
 * last: returns the last x number of elements from an array
 * 
 * @param {Array} array: an array
 * @param {Number} number: last <number> of items to be returned from <array>
 * 
 * @returns {Array or String}: array of the last <number> of elements from <array> or a string of the last 
 *  element in <array> if number is not given/not a number
 * 
 */

function last(array, number){
    if(!Array.isArray(array) || number <= 0){
        return [];
    }
    if (!number){
        return array[array.length-1];
    }
    if (number > array.length){
        return array;
    }
   return array.slice(number-1); 
}
module.exports.last = last;


/**
 * indexOf: finds the index of a given value in an array
 * 
 * @param {Array} array: an array to be searched through
 * @param {any value} value: value to be searched for in <array>
 * 
 * @returns {Number}: the index of <array> at which <value> is found
 * 
 */
 
 function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }    
    if (!array.includes(value)){
        return -1;
    }
}
module.exports.indexOf = indexOf;


/**
 * contains: determines if an array contains a given value
 * 
 * @param {Array} array: an array to be searched through
 * @param {any value} value: a value to be searched for
 * 
 * @returns {Boolean}: true if the <array> contains <value>. false if not
 * 
 */ 

function contains(array, value){
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;


/**
 * each: loops over a collection (Array or Object) and applies a 
 *  function to each value in the collection
 * 
 * @param {Array or Object} collection: the collection over which to iterate
 * @param {Function} action: the function to be applied to each value in the 
 *  collection
 * 
 * doesn't return anything
 * 
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: removes any duplicates from an array
 * 
 * @param {Array} array: array that the duplicates will be removed from
 * 
 * @returns {Array}: new array. same as input array but without any duplicates
 * 
 */

function unique(array){
    var newArray = []; 
    for (var i = 0; i < array.length; i++){
        if (indexOf(newArray, array[i]) === -1){
            newArray.push(array[i]);
        }
    }
        return newArray;
}
module.exports.unique = unique;


/**
 * filter: filters out values in an array that meet certain criteria (values that pass a test/return true 
 *  in a function)
 * 
 * @param: {Array} array: array to be filtered 
 * @param: {Function} func: function to be called on each element in <array>. returns boolean. 
 * 
 * @returns {Array}: new array of all the values in <array> that returned true when passed to <func>
 * 
 */ 
 
function filter(array, func){
    var filteredArray = []; 
    for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
module.exports.filter = filter;


/**
 * reject: filters out values in an array that don't meet certain criteria (values that don't pass a 
 *  test/return true in a function)
 * 
 * @param {Array} array: array to be filtered
 * @param {Function} func: function to be called on each element in <array>. returns boolean
 * 
 * @returns {Array}: new array of all the values in <array> that returned false when passed to <func>
 * 
 */ 
 
function reject (array, func){
    var rejects = []; //for return 
    for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array)===false){
            rejects.push(array[i]);
        }
    }
    return rejects;
}
module.exports.reject = reject;


/**
 * partition: separates an array into 2 subarrays: one of values that meet certain criteria and 
 *  another of values that don't meet that criteria
 * 
 * @param {Array} array: array to be tested and split into passing/failing values
 * @param {Function} func: function to be called on every element in <array>. returns boolean
 * 
 * @returns {Array}: new array containing 2 arrays: 1 array of the <array> values that returned true when
 *  passed to <func> and 1 array of the values that returned false when passed to <func>
 * 
 */ 
 
 function partition(array, func){
    var result = []; //for return
    var passing = []; //for passing values
    var failing = []; //for failing values
        for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            passing.push(array[i]);
        } else {
            failing.push(array[i]);
        }
    }
    result.push(passing, failing);
    return result;
}
module.exports.partition = partition;
 
 
 /**
  * map: gets the output of calling a function to each element in a collection (array or object)
  * 
  * @param {Array or Object} collection: collection
  * @param {Function} func: function to be called on every element in <collection>
  * 
  * @returns {Array}: returns new array of the output of calling <func> on each element in <collection>.
  * 
  */ 
  
function map(collection, func){
    var result = []; 
    each(collection, function(val, ik, col){
        result.push(func(val, ik, col));
    })
    return result;
}
module.exports.map = map;


/**
 * pluck: 
 * 
 * @param {Array} array: an array of objects
 * @param {property} prop: a property of the object(s) in <array>. prop is a key name
 * 
 * @returns {Array}: array containing the corresponding values of <prop>. 
 * 
 */ 
 
 function pluck(array, prop){
    var result = []; 
    map(array, function(e, i, a){
            result.push(e[prop]);
    })
    return result;
}
module.export.pluck = pluck;


/**
 * every: tests whether all elements in a collection meet certain criteria
 * 
 * @param {Array or Object} collection: a collection
 * @param {Function} func: a function to test every element in <collection>. returns boolean
 * 
 * @returns {Boolean}: if all elements in <collection> return true when passed to <func> true is returned.
 *  if even 1 element returns false, then false is returned
 * 
 */ 
 
 function every(collection, func){
 if (func === undefined){
     func = identity;
 } 
 if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            if (func(collection[i], i, collection) === false){
                return false;
            } 
        }
    } else {
        for (var key in collection){
            if (func(collection[key], key, collection) === false){
                return false;
            } 
        }
 
    } 
    return true;
}
module.exports.every = every;


/**
 * some: tests whether any elements in a collection meet certain criteria
 * 
 * @param {Array or Object} collection: a collection
 * @param {Function} funk: function to be called on each element in <collecion>. returns boolean
 * 
 * @returns {Boolean}: true if even 1 element returns true when passed to <func>. false if no elements 
 *  return true when passed to <func>
 * 
 */ 
 
 function some(collection, funk){
    if (funk === undefined){
     funk = identity;
    } 
 if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            if (funk(collection[i], i, collection) === true){
                return true;
            } 
        }
    } else {
        for (var key in collection){
            if (funk(collection[key], key, collection) === true){
                return true;
            } 
        }
    } 
    return false;
}
module.exports.some = some;


/**
 * reduce: reduces an array down to a single value by passing each element into a function
 * 
 * @param {Array} array: array to be reduced
 * @param {Function} funky: function to be called on every element in <array> 
 * @param {Number or String or Array or Object} seed: optional. seed is where <funky> will start. same datatype
 *  as return value. if no seed is given, then seed is automatically first value in <array>
 * 
 * @returns: a single value of all the elements in <array> combined in some way (depending on what <funky> does)
 * 
 */
 
 function reduce(array, funky, seed){
   each(array, function (e, i, a){
       if (seed === undefined){
           seed = array[0];
       } else {
           seed = funky(seed, e, i, a);   
       }
   })
  return seed;
}
module.exports.reduce = reduce;
 
 
 /**
  * extend: adds objects together as one object
  * 
  * @param {Object} obja: an object
  * @param {Object(s)} ...objz: infinite possible number of objects. any number of objects 
  * 
  * @returns {Object}: all of the input objects added together in the order they are inputted
  * 
  */ 
 
 function extend(obja, ...objz){
    return Object.assign(obja, ...objz);
}
module.exports.extend = extend;
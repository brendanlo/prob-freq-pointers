"use strict"
// add whatever parameters you deem necessary

/*Write a function called twoArrayObject which accepts two arrays of varying lengths. The first array consists of keys and the second one consists of values. 
Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. 
If there not enough keys, just ignore the rest of values. */

/** Function takes array of keys and array of values and then return object of key and value pairs. */
function twoArrayObject(keys, values) {
    let obj = {};
    // Iterate through array of key so that it can ignore excess amount of values if there are.
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = values[i];
        // If there are excess amount of keys, assign them with value of null.
        if (value == undefined) {
            value = null;
        }
        obj[key] = value;
    }
    return obj;
}

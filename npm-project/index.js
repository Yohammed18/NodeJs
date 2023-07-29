//install npm i sillyname in order to execute this file.

//this is how we will be able to get a hold of the module. this is similar to react with the key word Import.
// var generateName = require('sillyname');
import generateName from 'sillyName'
var sillyName = generateName();
console.log(`My name is ${sillyName}`)


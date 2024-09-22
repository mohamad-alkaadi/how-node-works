// to proof that the module code execute in a function we log the arguments
// arguments is an array in javascript that contains all the values that were passed into a function
// console.log(arguments)
// first item is the exports
// second the require function
// third it the module
// forth is the --filename
// fifth is the --dirname
// ----------------------------------------
// to show the wrapper function itself
// console.log(require("module").wrapper)
// ---------------------------------------

// module.exports
// we import our class
// const Calc = require("./test-module-1")
// we make an instance  of our class
// const calc1 = new Calc()
// console.log(calc1.add(2, 5))

// -------------------------------------------
// export

// the result that we get is an object containing all defined properties
// const calc2 = require("./test-module-2")
// console.log(calc2.multiply(2, 5))

// we can use object destructuring using es6 for easier solution
// const { add, multiply, divide, sub } = require("./test-module-2")
// console.log(multiply(2, 5))

// caching
// this is how you call the function right away if it has no name without saving it to a variable
require("./test-module-3")()
require("./test-module-3")()
require("./test-module-3")()
// the module will be loaded once // and it will be run once because it loads one time
// the result of the function will be stored in cache and will be used again form the cache
// output:
// hello from module
// log from function :)
// log from function :)
// log from function :)

// class declaration
// first method to export a class
// class Calculator {
//   add(a, b) {
//     return a + b
//   }
//   sub(a, b) {
//     return a - b
//   }
//   multiply(a, b) {
//     return a * b
//   }
//   divide(a, b) {
//     return a / b
//   }
// }

// we use module.exports when we want to export one single value
// module.exports = Calculator
// ----------------------------------------
// second method to export a class

module.exports = class {
  add(a, b) {
    return a + b
  }
  sub(a, b) {
    return a - b
  }
  multiply(a, b) {
    return a * b
  }
  divide(a, b) {
    return a / b
  }
}

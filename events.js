// const EventEmitter = require("events")

// -----------------------------------------
// all the famous events use this method to extend the event  emitter
// so we can use it

// best practice
// create a new class that will inherit from the node EventEmitter
// EventEmitter is a super class
// Sales is a parent class
// class Sales extends EventEmitter {
//   // a function that will run as soon as we create a new object from a class
//   constructor() {
//     // we use it to access all the methods of the parent class
//     super()
//   }
// }

// const myEmitter = new Sales()

// ----------------------------
// observer that observe the emitter (listen to the emitter) and wait until it emits the newSale event
// myEmitter.on("newSale", () => {
//   console.log("There was a new sale!")
// })

// myEmitter.on("newSale", () => {
//   console.log("Customer name: Jonas")
// })

// object that emits an event
// myEmitter.emit("newSale")

// output There was a new sale!
//        Customer name: Jonas
// --------------------------------------
// we can pass an additional  argument to the event listener from the emitter lik this

// myEmitter.on("newSale", (stock) => {
//   console.log(`there are now ${stock} items left in stock`)
// })
// myEmitter.emit("newSale", 9)

// output: there are now 9 items left in stock

// --------------------------------------------------
// create a small web server and listen to the event that it emits

// all the famous events use this method to extend the event  emitter
// so we can use the methods of it on every famous module

const http = require("http")

const server = http.createServer()

// you cant make 2 res.end only one
server.on("request", (req, res) => {
  console.log("Request received!")
  res.end("Request received")
})
server.on("request", (req, res) => {
  console.log("another Request :)")
})

server.on("close", () => {
  console.log("Server closed")
})

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...")
})
// it runs twice because the browser asks for the favicon in another request
// output
// Request received!
// another Request :)
// Request received!
// another Request :)

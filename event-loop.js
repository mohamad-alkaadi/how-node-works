const fs = require("fs")
const crypto = require("crypto")

const start = Date.now()
// to set the thread pool size we use
// process.env.UV_THREADPOOL_SIZE = 1

fs.readFile("test-file.txt", () => {
  console.log("I/O finished")
  //   the timeout will not be executed because in the case of timers inside I/O: the I/O polling and callbacks waits to execute timers to check if the I/O is finished

  setTimeout(() => {
    console.log("timer 1 finished")
  }, 0)
  setTimeout(() => {
    console.log("timer 2 finished")
  }, 3000)

  // executed once per tick (means one time per loop)
  setImmediate(() => {
    console.log("Immediate 1 finished")
  })

  // executed after each phase
  process.nextTick(() => console.log("Process.nextTick"))

  //   functions will be offloaded automatically by the event loop to the thread pool
  //   the size of thread pool is 4 so each one of the instances of crypto  will be executed in a different thread
  //   so they will be finished around the same time

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted")
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted")
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted")
  })
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted")
  })
})

console.log("hello from top level code")

const fs = require("fs")
const server = require("http").createServer()
// // method 1 normal method (without a stream)
// server.on("request", (req, res) => {
//   // read a file into a variable then send it to client
//   fs.readFile("./test-file.txt", (err, data) => {
//     if (err) console.log(err)
//     res.end(data)
//   })
// })
// // node has to load the entire file into memory then send the data
// // this solution only works for small files

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Server is running on port 8000")
// })
// -----------------------------------------------------------------------------------
// method 2

// instead of reading the data into a variable, and having to store that variable into memory, we will just create a readable stream
// then as we receive each chunk of data we send it to the client as a response which is a writable stream
// server.on("request", (req, res) => {
//   // this creates a stream from the data that is in this file which can then consume piece by piece (chunk by chunk)
//   // each time there is a new pice of data that we can consume, a readable stream emits the the data event so we need to listen to that 'data' event
//   const readable = fs.createReadStream("./test-file.txt")
//   // listen to the data event
//   readable.on("data", (chunk) => {
//     // we read one piece of the file and as soon as we get it we send it to the client
//     // and we do it again and again until the entire file is read and streamed to the client
//     // we need to write the chunks of data that we receive into writable streams (which means response)
//     // we can use the write method to send every single piece of data into that stream
//     res.write(chunk)
//   })
//   // we need to handle the event when the stream is basically finished reading the data from the file (which is called 'end')
//   readable.on("end", () => {
//     // we don't pass anything to the end method because we have already sent it using the write method
//     res.end()
//   })
//   // we can listen to the error event
//   readable.on("error", (err) => {
//     console.log(err)
//     res.statusCode = 500
//     res.end("File not found!")
//   })
// })
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Server is running on port 8000")
// })
// // this  method have the problem of backpressure
// // backpressure: is a problem that happens when the response cannot send the data nearly as fast as it is receiving it from the file

// -----------------------------------------------------------
// method 3 without backpressure

server.on("request", (req, res) => {
  const readable = fs.createReadStream("./test-file.txt")
  readable.pipe(res)
  // readableSource.pipe(writeableDest)
  // readableSource: this is were the data comes form and it has to be a readable stream
  // and that data we can pipe into a writable destination
  // writable destination: could be a duplex or a transform stream
  // we should have a readable stream then wr pipe it into a writable destination
})
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on port 8000")
})

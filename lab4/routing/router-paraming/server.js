const app = require("express");
const route = app.Router();


const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// app.get('/users/:userId/books/:bookId', (req, res) => {
//   res.send(req.params)
// })



app.get('/user/:userId(\d+)', (req, res) => {
  res.send(req.params)
})
process.on("SIGINT", () => {
  console.log("\nServer is shutting down...");
  server.close(() => {
    console.log("Server is shut down.");
  });
});

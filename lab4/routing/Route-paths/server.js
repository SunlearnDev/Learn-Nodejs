const app = require("express")();

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})



process.on("SIGINT", () => {
  console.log("\nServer is shutting down...");
  server.close(() => {
    console.log("Server is shut down.");
  });
});

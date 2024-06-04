const app = require("express")();

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

process.on("SIGINT", () => {
  console.log("\nServer is shutting down...");
  server.close(() => {
    console.log("Server is shut down.");
  });
});

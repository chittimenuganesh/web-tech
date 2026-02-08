const express = require('express');

const app = express();

app.listen(3000, ()=> {
    console.log('Server running on port 3000');
})

app.get("/", (req,res)=> {
    res.send("hello backend");
})

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

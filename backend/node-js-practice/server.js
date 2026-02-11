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

app.get('/great', (req,res) => {
  const name = req.query.name;
  res.send(`hello ${name}`);
});

app.get('/about', (req,res)=>{
  res.send('this is about page');
});

app.get('/sum', (req, res) => {
  let a = Number(req.query.a);
  let b = Number(req.query.b);


  console.log(req.query);

  res.send(`Sum is ${a + b}`);
});

// First POST route
app.post('/sum', (req, res) => {
  console.log(req.body);

  let a = Number(req.body.a);
  let b = Number(req.body.b);

  res.send(`Sum is ${a + b}`);
});

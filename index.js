const express = require('express');

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
})

// get books route
app.get("/books", async (req,res) => {
  try {
    res.status(200).json({message: `books route`})
  } catch (error) {
    res.json({error: error.message})
  }
})

// get secific book
app.get("/books/:id", async (req,res) => {
  try {
    const {id} = req.params;

    res.status(200).json({message: `specific books id return id: ${id} `})
  } catch (error) {
    res.json({error: error.message})
  }
})

// post book data
app.post("/books", async (req,res) => {
  try {
    const {name, description} = req.body;
    res.status(201).json({message: `books was created ${name}, ${description}`})
  } catch (error) {
    res.json({error: error.message})
  }
})

// update route and function

app.get("/books/:id", async (req,res) => {
  try {
    const {id} = req.params;

    res.status(200).json({message: `specific books id return id: ${id} `})
  } catch (error) {
    res.json({error: error.message})
  }
})

const express = require('express');
const { v4 : uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;
const pool = require('./db');

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
    const id = uuidv4();
    // insert database
    const newBook = await pool.query("INSERT INTO book(id, name, description) VALUES ($1, $2, $3) RETURNING *",[id, name, description]);

    res.status(201).json({message: `books id: ${id} created `, data: newBook});
  } catch (error) {
    res.json({error: error.message})
  }
})

// delete route and function
app.delete("/books/:id", async (req,res) => {
  try {
    const {id} = req.params;
    res.status(200).json({message: `delete id : ${id} `})
  } catch (error) {
    res.json({error: error.message})
  }
})

// route update

app.put("/books/:id", async (req,res) => {
  try {
    const {id} = req.params;
    const {name, description} = req.body;
    res.status(200).json({message: `books was ${id} udapte ${name}, ${description}`})
  } catch (error) {
    res.json({error: error.message})
  }
})

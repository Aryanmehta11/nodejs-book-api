const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send("Error fetching books");
  }
});

// GET a specific book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.json(book);
  } catch (err) {
    res.status(500).send('Error fetching the book');
  }
});

// POST a new book
router.post('/', async (req, res) => {
  const { title, author } = req.body;
  try {
    const newBook = new Book({ title, author });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).send('Error saving the book');
  }
});

// PUT to update a book by ID
router.put('/:id', async (req, res) => {
  const { title, author } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { title, author }, { new: true, runValidators: true });
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.json(book);
  } catch (err) {
    res.status(500).send('Error updating the book');
  }
});

// DELETE a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.status(204).send();  // No content
  } catch (err) {
    res.status(500).send('Error deleting the book');
  }
});

module.exports = router;

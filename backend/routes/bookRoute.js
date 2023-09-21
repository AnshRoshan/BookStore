import express from "express"
import { Book } from "../models/bookModel.js"

const router = express.Router()

// Route for getting all books
router.get("/", async (request, response) => {
  try {
    const books = await Book.find()
    return response.status(200).json(books)
    // return response.status(200).json({ count: books.length, data: books })
  } catch (error) {
    return response.status(500).json({ error: error })
  }
})

// Route for creating a new book
router.post("/", async (request, response) => {
  try {
    const book = new Book(request.body)
    await book.save()
    return response.status(201).json(book)
  } catch (error) {
    return response.status(500).json({ error: error })
  }
})

// Route for getting a single book
router.get("/:id", async (request, response) => {
  try {
    const book = await Book.findById(request.params.id)
    return response.status(200).json(book)
  } catch (error) {
    return response.status(500).json({ error: error })
  }
})

// Route for update a book
router.put("/:id", async (request, response) => {
  try {
    if (!request.body) {
      return response.status(400).json({ message: "Data to update can not be empty" })
    }
    const result = await Book.findByIdAndUpdate(request.params.id, request.body, {
      useFindAndModify: false,
    })
    if (!result) {
      return response.status(404).json({
        message: `Cannot update book with id=${request.params.id}. Maybe book was not found!`,
      })
    }
    return response.status(200).json({ message: "Book was updated successfully." })
  } catch (error) {
    return response.status(500).json({ error: error })
  }
})

// deleting a book
router.delete("/:id", async (request, response) => {
  try {
    const result = await Book.findByIdAndDelete(request.params.id)
    if (!result) {
      return response.status(404).json({
        message: `Cannot delete book with id=${request.params.id}. Maybe book was not found!`,
      })
    }
    return response.status(200).json({ message: "Book was deleted successfully." })
  } catch (error) {
    return response.status(500).json({ error: error })
  }
})

export default router

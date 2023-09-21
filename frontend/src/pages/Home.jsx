import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { AiOutlineEdit } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import Spinner from "../components/Spinner"
import { BooksTable } from "../components/BooksTable"
import { BooksCard } from "../components/BooksCard"

export const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState("table")
  useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl my-8 text-center '>Books List</h1>
        <Link to='/books/create'>
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>
            <MdOutlineAddBox className='inline-block mr-2' />
            Add Book
          </button>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  )
}

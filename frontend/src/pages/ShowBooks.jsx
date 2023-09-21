import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Spinner from "../components/Spinner"
import HomeButton from "../components/HomeButton"

export const ShowBooks = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setBook(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <HomeButton></HomeButton>
      <h1 className='text-3xl my-8 text-center'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col mx-auto border-2 border-[#4831ba] rounded-xl w-fit p-8'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Title </span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Publish Year</span>
            <span>{book.year}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Creation Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-700'>Last Updated</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

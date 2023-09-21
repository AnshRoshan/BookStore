import HomeButton from "../components/HomeButton"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .delete(`http://bookstore-mern.vercel.app/books/${id}`)
      .then((res) => {
        setLoading(false)
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }
  return (
    <div>
      <HomeButton></HomeButton>
      <h1 className="text-3xl my-8 text-center">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mx-auto border-2 border-[#4831ba] rounded-xl w-fit p-8">
            <div className="my-2">
              <label className="text-xl mr-4 text-gray-700">Are you sure you want to delete this book?</label>
            </div>
            <div className="my-2 mx-auto">
              <button
                type="submit"
                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}
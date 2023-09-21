import HomeButton from "../components/HomeButton"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreateBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [year, setYear] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post("https://bookstore-mern.vercel.app/books", {
        title,
        author,
        year,
      })
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
    <div className="p-8">
      <HomeButton></HomeButton>
      <h1 className="text-3xl my-8 text-center">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mx-auto border-2 border-[#4831ba] rounded-xl w-fit p-8">
            <div className="my-2">
              <label className="text-xl mr-4 text-gray-700">Title </label>
              <input
                type="text"
                className="border-2 border-gray-500 rounded-md "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="my-2">
              <label className="text-xl mr-4 text-gray-700">Author</label>
              <input
                type="text"
                className="border-2 border-gray-500 rounded-md"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="my-2">
              <label className="text-xl mr-4 text-gray-700">Publish Year</label>
              <input
                type="number"
                className="border-2 border-gray-500 rounded-md"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold my-2  py-2 px-4 rounded-full"
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold my-2 py-2 px-4 rounded-full"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
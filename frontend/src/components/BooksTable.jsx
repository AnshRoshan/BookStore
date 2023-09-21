import { Link } from "react-router-dom"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import { AiOutlineEdit } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"

export const BooksTable = ({ books }) => {
  return (
    <table className='table-auto border-spacing-2 border-separate w-full'>
      <thead>
        <tr>
          <th className='border border-slate-500 rounded-md'>S.no</th>
          <th className='border border-slate-500 rounded-md '>Title</th>
          <th className='border border-slate-500 rounded-md max-md:hidden'>Author</th>
          <th className='border border-slate-500 rounded-md max-md:hidden'>Publish Year</th>
          <th className='border border-slate-500 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-6 even:bg-amber-100 odd:bg-blue-100'>
            <td className='border border-slate-500 rounded-md text-center'>{index + 1}</td>
            <td className='border border-slate-500 text-center rounded-md '>{book.title}</td>
            <td className='border border-slate-500 rounded-md text-center '>{book.author}</td>
            <td className='border border-slate-500 rounded-md  text-center max-md:hidden '>
              {book.year}
            </td>
            <td className='border border-slate-500 rounded-md text-center '>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/${book._id}`}>
                  <BsInfoCircle className='text-green-900' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-amber-800' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <AiOutlineDelete className='text-red-400 rounded-md' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

import { Link } from "react-router-dom"
import { BsRocket } from "react-icons/bs"

export default function HomeButton() {
  return (
      <div className="flex">
        <Link to="/">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                  <BsRocket className="inline-block mr-2" />
            Home
          </button>
        </Link>
    </div>
  )
}
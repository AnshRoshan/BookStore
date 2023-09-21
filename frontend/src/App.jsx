import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { EditBook } from "./pages/EditBook"
import { CreateBook } from "./pages/CreateBook"
import { DeleteBook } from "./pages/DeleteBook"
import { ShowBooks } from "./pages/ShowBooks"

const App = () => {
  return (  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books/create" element={<CreateBook />} />
    <Route path="/books/edit/:id" element={<EditBook />} />
    <Route path="/books/delete/:id" element={<DeleteBook />} />
    <Route path="/books/:id" element={<ShowBooks />} />
  </Routes>)

}

export default App

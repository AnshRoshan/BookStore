import Express from "express"
import { port, mongoDBurl } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./models/bookModel.js"
import bookRouter from "./routes/bookRoute.js"
import cors from "cors"
import { config } from 'dotenv';
config();
const app = new Express()

// Middleware for parsing JSON body
app.use(Express.json())
app.use(cors())
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
// }))

app.get("/", (request, response) => {
    console.log(request)
    return response.status(200).send("Hello and Welcome!")
})

app.use("/books", bookRouter)

mongoose
  .connect(mongoDBurl)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

import express from "express"
import Chat from "./api/routes/chat.js"
import cors from "cors"
const app = express()
const PORT = 8000
const corsConfig = {
    origin :["https://linkedin.com"]
}
app.use(cors(corsConfig))
app.use(express.json());
app.use("/chat", Chat );

app.listen(PORT ,() => {
    console.log(`server running on ${PORT} `)
})
import express from "express"
import Chat from "./api/routes/chat.js"
const app = express()
const PORT = 8000
app.use(express.json());
app.use("/chat", Chat );

app.listen(PORT ,() => {
    console.log(`server running on ${PORT} `)
})
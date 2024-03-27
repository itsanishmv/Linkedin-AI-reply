import express from "express"

const app = express()
const PORT = 8000


app.get("/", (req, res) => {
    res.json({ message: "kya be gandu ?" })
});



app.listen(PORT ,() => {
    console.log(`server running on ${PORT} `)
})
import express from "express"
import getReponseFromGemini from "../helpers/getGeminiResponse.js"
const router = express.Router()


router.post("/", async (req, res) => {
    try {
        const { prompt } = req?.body
        const Completion = await getReponseFromGemini(prompt)
        res.json({message : Completion})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message : error.message})
    }
 
 })


export default router
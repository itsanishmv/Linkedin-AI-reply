import express from "express"
import getReponseFromGemini from "../helpers/getGeminiResponse.js"
const router = express.Router()


router.post("/", async (req, res) => {
    const { prompt } = req?.body
    
    const Completion = await getReponseFromGemini(prompt)
    
    res.json({message : Completion})
 })


export default router
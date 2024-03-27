import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from "dotenv"
dotenv.config()
export default async function getReponseFromGemini(prompt) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({model : "gemini-pro"})
    const result = await model.generateContent(prompt)
    const response = await result.response;
    const text = response.text();
    return  text
    
}
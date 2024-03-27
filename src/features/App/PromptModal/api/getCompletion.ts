
import axios from "axios"
export async function getCompletionApi(prompt : any) {
    // setTimeout(() => {
    //   const dummy =
    //     "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
   
    //   setNewGeneratedResponse(newResponse)
  // }, 2000)

    const response = await axios.post("https://linkedin-ai-reply.onrender.com/chat", {
      prompt : prompt
  })
  console.log(response.data)
  }
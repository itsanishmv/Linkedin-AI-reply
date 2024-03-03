
export   function postPromptApi(setNewGeneratedResponse) {
    setTimeout(() => {
      const dummy =
        "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
      const newResponse = {
        sender: "llm",
        content: dummy
      }
      setNewGeneratedResponse(newResponse)
    }, 2000)
  }
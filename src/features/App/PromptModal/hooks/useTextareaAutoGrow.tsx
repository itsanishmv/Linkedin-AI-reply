import React, { useEffect } from "react"

function useTextareaAutoGrow(textareaRef, promptTextInput) {
  useEffect(() => {
    textareaRef.current.style.height = "auto"
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
  }, [promptTextInput])
  return
}

export default useTextareaAutoGrow

import ArrowIcon from "data-base64:~assets/arrow.svg"
import InsertIcon from "data-base64:~assets/insert.svg"
import RegenIcon from "data-base64:~assets/regenerate.svg"
import React, { useEffect, useRef, useState } from "react"

import useTextareaAutoGrow from "./hooks/useTextareaAutoGrow"

export function PromptModal({ setShowModal }) {
  const [newGeneratedResponse, setNewGeneratedResponse] = useState()
  const [messages, setMessages] = useState([])
  const [promptTextInput, setPromptTextInput] = useState()
  const textareaRef = useRef(null)
  useTextareaAutoGrow(textareaRef, promptTextInput)
  const inputElement = document.querySelector(".msg-form__contenteditable")
  const toInsertTag = inputElement.querySelector("p")

  useEffect(() => {
    setMessages([...messages, newGeneratedResponse])
  }, [newGeneratedResponse])
  function response() {
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
  function handleGenerateResponse(e) {
    const newPrompt = {
      sender: "client",
      content: promptTextInput
    }
    setMessages([...messages, newPrompt])
    setPromptTextInput("")
    response()
  }
  function handleinsertText() {
    toInsertTag.innerText = newGeneratedResponse?.content
  }
  return (
    <div className="">
      <div
        onClick={() => setShowModal(false)}
        className="fixed top-0 bottom-0 right-0 left-0  bg-black/50"></div>
      <div className="flex flex-col gap-4 -translate-y-[200px]   w-[409px]  bg-[#F9FAFB]  rounded-2xl p-[10px]">
        <div className="chat_box flex flex-col gap-2 w-full ">
          {messages?.map((msg) => (
            <div
              className={`flex flex-wrap w-full ${msg?.sender === "client" ? " justify-end" : "justify-start"}`}>
              <p
                className={`${msg?.sender === "client" ? "text-left bg-[#DFE1E7] p-2 break-words" : "text-left bg-[#DBEAFE] p-2 "} text-wrap text-xl max-w-[30rem] font-semibold rounded-xl`}>
                {msg?.content}
              </p>
            </div>
          ))}
        </div>

        <textarea
          onChange={(e) => setPromptTextInput(e.target.value)}
          rows={1}
          value={promptTextInput}
          ref={textareaRef}
          className="bg-white border-[0.5px] text-2xl font-semibold text-[#666D80] p-2 border-[#666D80] overflow-hidden outline-none w-full  resize-none   rounded-[6px]"
          placeholder="Your prompt"
        />
        <div className="flex justify-end">
          <div className="flex justify-center  gap-2 ">
            {newGeneratedResponse && (
              <button
                onClick={handleinsertText}
                className="flex  items-center border-[#666D80] border-2 rounded-lg py-2 px-4 gap-2">
                <img src={InsertIcon} alt="insert icon" />
                <span className="text-[#666D80] text-2xl font-semibold">
                  Insert
                </span>
              </button>
            )}

            <button
              onClick={handleGenerateResponse}
              className="flex  items-center bg-[#3B82F6] w-[100px] rounded-lg text-lg py-2 px-4 gap-2">
              <img className="" src={ArrowIcon} alt="arrow" />
              <span className="text-white text-2xl font-semibold">
                Generate
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

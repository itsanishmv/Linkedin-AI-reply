import ArrowIcon from "data-base64:~assets/arrow.svg"
import InsertIcon from "data-base64:~assets/insert.svg"
import RegenIcon from "data-base64:~assets/regenerate.svg"
import React, { useEffect, useRef, useState } from "react"

import { postPromptApi } from "./api/postPrompt"
import Button from "./components/Button"
import ChatBox from "./components/ChatBox"
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
    if (messages.length > 0) {
      setMessages([...messages, newGeneratedResponse])
    }
  }, [newGeneratedResponse])

  function handleGenerateResponse(e) {
    const newPrompt = {
      sender: "client",
      content: promptTextInput.trim()
    }
    if (promptTextInput) {
      setMessages([...messages, newPrompt])
      setPromptTextInput("")
      postPromptApi(setNewGeneratedResponse)
    }
  }
  function handleinsertText() {
    toInsertTag.innerText = newGeneratedResponse?.content
    setShowModal(false)
  }
  return (
    <div className="">
      <div
        onClick={() => setShowModal(false)}
        className="fixed top-0 bottom-0 right-0 left-0  bg-black/50"></div>
      <div className=" fixed  bottom-[300px] flex flex-col gap-4 w-[409px] bg-offWhite  rounded-2xl p-[10px]">
        <ChatBox messages={messages} />
        <textarea
          onChange={(e) => setPromptTextInput(e.target.value)}
          rows={1}
          value={promptTextInput}
          ref={textareaRef}
          className="bg-white border-[0.5px] text-xl font-normal text-ash-grey p-2 border-ash-grey overflow-hidden outline-none w-full  resize-none   rounded-[6px]"
          placeholder="Your prompt"
        />
        <div className=" flex justify-end">
          <div className="flex justify-center  gap-4 ">
            {newGeneratedResponse && (
              <Button handler={handleinsertText} type="outlined">
                <img src={InsertIcon} alt="insert icon" />
                <span className="text-ash-grey text-2xl font-semibold">
                  Insert
                </span>
              </Button>
            )}

            <Button handler={handleGenerateResponse} type="solid">
              <img
                className=""
                src={newGeneratedResponse ? RegenIcon : ArrowIcon}
                alt="arrow"
              />
              <span className="text-white text-2xl font-semibold">
                {newGeneratedResponse ? "Regenerate" : "Generate"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

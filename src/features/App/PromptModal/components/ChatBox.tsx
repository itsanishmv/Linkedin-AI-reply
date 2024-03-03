import React from "react"

function ChatBox({ messages }) {
  return (
    <div className="chat_box flex grow flex-col gap-2 w-full ">
      {messages?.map((msg) => (
        <div
          className={`flex flex-wrap w-full text-[#666D80] ${msg?.sender === "client" ? " justify-end" : "justify-start"}`}>
          <p
            className={`${msg?.sender === "client" ? "text-left bg-[#DFE1E7] p-2 break-words" : "text-left bg-[#DBEAFE] p-2 "} text-wrap text-xl max-w-[30rem] font-semibold rounded-xl`}>
            {msg?.content}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ChatBox

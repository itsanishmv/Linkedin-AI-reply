import React, { useEffect, useRef } from "react"

function ChatBox({ messages }) {
  const scrollableContainerRef = useRef(null)
  useEffect(() => {
    if (messages.length) {
      scrollableContainerRef.current.scrollIntoView({
        behaviour: "smooth",
        block: "end"
      })
    }
  }, [messages?.length])
  return (
    messages?.length > 0 && (
      <div className="chat_box flex grow flex-col gap-2 w-full max-h-80 overflow-y-auto ">
        {messages?.map((msg) => (
          <div
            className={`flex flex-wrap w-full text-ash-grey ${msg?.sender === "client" ? " justify-end" : "justify-start"}`}>
            <p
              className={`${msg?.sender === "client" ? "text-left bg-secondarygrey p-2 break-words" : "text-left bg-light-blue p-2 "} text-wrap text-xl max-w-[30rem] font-normal rounded-xl`}>
              {msg?.content}
            </p>
          </div>
        ))}
        <div ref={scrollableContainerRef}></div>
      </div>
    )
  )
}

export default ChatBox

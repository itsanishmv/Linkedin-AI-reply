import ArrowIcon from "data-base64:~assets/arrow.svg"
import InsertIcon from "data-base64:~assets/insert.svg"
import RegenIcon from "data-base64:~assets/regenerate.svg"
import React, { useState } from "react"

export function PromptModal({ setShowModal }) {
  return (
    <div className="">
      <div
        onClick={() => setShowModal(false)}
        className="fixed top-0 bottom-0 right-0 left-0  bg-black/50"></div>
      <div className="flex flex-col gap-4 -translate-y-[200px]  h-[100px] w-[409px]  bg-[#F9FAFB]  rounded-2xl p-[10px]">
        <input
          type="text"
          className="bg-white border-[0.5px] text-2xl font-semibold text-[#666D80] p-2 border-[#666D80] outline-none w-full h-[32px] rounded-[6px]"
          placeholder="Your prompt"
        />
        <div className="flex justify-end">
          <div className="flex justify-center  gap-2 ">
            <button className="flex  items-center border-[#666D80] border-2 rounded-lg py-2 px-4 gap-2">
              <img src={InsertIcon} alt="insert icon" />
              <span className="text-[#666D80] text-2xl font-bold">Insert</span>
            </button>
            <button className="flex  items-center bg-[#3B82F6] w-[100px] rounded-lg text-lg py-2 px-4 gap-2">
              <img className="" src={ArrowIcon} alt="arrow" />
              <span className="text-white text-2xl font-bold">Generate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

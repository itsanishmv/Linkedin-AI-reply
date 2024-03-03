import React from "react"

function Button({ handler, type, children }) {
  function customBtn() {
    if (type === "solid") {
      return "flex  items-center bg-blue rounded-lg text-lg py-2 px-4 gap-2"
    } else {
      return "flex  items-center border-primarygrey border-2 rounded-lg py-2 px-4 gap-2"
    }
  }

  return (
    <button onClick={handler} className={customBtn()}>
      {children}
    </button>
  )
}

export default Button

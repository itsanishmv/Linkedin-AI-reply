import React, { useState } from "react"

import { MagicButton } from "./MagicButon/MagicButton"
import { PromptModal } from "./PromptModal/PromptModal"

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className=" boder-2 border-black">
      <MagicButton setShowModal={setShowModal} />
      {showModal && <PromptModal setShowModal={setShowModal} />}
    </div>
  )
}

export default App

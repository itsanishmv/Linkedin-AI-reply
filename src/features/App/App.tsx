import React ,{useState} from 'react'
import {PromptModal} from './PromptModal/PromptModal'
import { MagicButton } from './MagicButon/MagicButton'
function App() {
    const [showModal, setShowModal] = useState(false)
    
  return (
      <div className=''>
          <MagicButton setShowModal={setShowModal} />
          {showModal && <PromptModal setShowModal={setShowModal} />}
      </div>
  )
}

export default App
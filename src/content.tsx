import cssText from "data-text:~style.css"
import type { PlasmoCSConfig ,  PlasmoGetOverlayAnchor , PlasmoGetInlineAnchor, PlasmoCSUIAnchor } from "plasmo"
import { MagicButton } from "~features/MagicButton"

export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () => {
  return document.querySelector(".msg-form__contenteditable")
}
  
const PlasmoOverlay = () => {

  return (
    <div className={`z-50`}>
      <MagicButton />
    </div>
  )
}

if (document.URL.startsWith('https://www.linkedin.com/')) {
  PlasmoOverlay();
}
export default PlasmoOverlay

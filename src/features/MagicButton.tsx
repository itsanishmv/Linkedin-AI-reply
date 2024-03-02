import {  useEffect, useState} from "react"
import Icon from "data-base64:~/assets/magicicon.svg"
export const MagicButton = () => {
  const inputElement = document.querySelector('.msg-form__contenteditable');
  const [isShowIcon, setIsShowIcon] = useState<boolean>(false)
  const [InputDimension, setInputDimension] = useState(inputElement.getBoundingClientRect())
 
  useEffect(() => {
    
    setInputDimension(inputElement.getBoundingClientRect())
    
  }, [inputElement.getBoundingClientRect().width])

  function toggleIcon() {
    setIsShowIcon(true)
  }

  inputElement.addEventListener("mouseenter", toggleIcon)
  inputElement.addEventListener("mouseleave", (e) => {
    setIsShowIcon(false)
  })
  
  return isShowIcon && (
    <button
      onClick={}
      onMouseEnter={() => setIsShowIcon(true)}
      type="button"
      style={{ translate: `${InputDimension.width - 30}px ${InputDimension.height - 30}px` }}
      className={` h-8 w-8 flex flex-row items-center p-2 text-sm rounded-full transition-all 
      shadow-lg hover:shadow-md
      active:scale-105 bg-slate-50 hover:bg-slate-100 `}>
      <img src={Icon} alt="magic icon" />

    </button>
  )
}

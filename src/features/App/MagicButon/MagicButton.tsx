import {  useEffect, useState} from "react"
import Icon from "data-base64:~/assets/magicicon.svg"
import useGetAnchorDimension from "./hooks/useGetAnchorDimension";

export const MagicButton = ({setShowModal}) => {
  const inputElement = document.querySelector('.msg-form__contenteditable');
  const { InputDimension, isShowIcon, setIsShowIcon } = useGetAnchorDimension(inputElement)
  

  return isShowIcon && (
    <button
      onClick={()=> setShowModal(true)}
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

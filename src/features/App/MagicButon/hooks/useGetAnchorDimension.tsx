import React , {useState , useEffect} from 'react'

function useGetAnchorDimension(target) {
    const [InputDimension, setInputDimension] = useState(target.getBoundingClientRect())
    const [isShowIcon, setIsShowIcon] = useState<boolean>(false)

    useEffect(() => {
        setInputDimension(target.getBoundingClientRect())
      }, [target.getBoundingClientRect().width])
    
      function toggleIcon() {
        setIsShowIcon(true)
      }
    
      target.addEventListener("mouseenter", toggleIcon)
      target.addEventListener("mouseleave", (e) => {
        setIsShowIcon(false)
      })
    
  return {InputDimension , isShowIcon , setIsShowIcon}
}

export default useGetAnchorDimension
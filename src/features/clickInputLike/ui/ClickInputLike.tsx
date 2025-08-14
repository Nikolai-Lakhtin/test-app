import { useState } from "react"
import InputLike from "../../../entites/inputLike/ui/InputLike"

const ClickInputLike: React.FC = () => {
  const [isLike, setIsLike] = useState(false)

  const clickButtonHandle = () => {
    setIsLike(prev => !prev)
  }

  return (
  <>
    <InputLike clickButtonHandle={clickButtonHandle} isLike={isLike}/>
  </>
  )
}

export default ClickInputLike
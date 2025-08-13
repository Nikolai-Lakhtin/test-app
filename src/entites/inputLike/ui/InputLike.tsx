import Button from "../../../shared/button/Button"
import Like from "../../../shared/like/Like"

type InputLikeType = {
  isLike: boolean,
  clickButtonHandle?: () => void,
}

const InputLike: React.FC<InputLikeType> = ({isLike, clickButtonHandle}) => {
  return (
    <div>
      <Button text="Лайк" onClick={clickButtonHandle}/>
      <Like isLike={isLike}/>
    </div>
  )
}

export default InputLike
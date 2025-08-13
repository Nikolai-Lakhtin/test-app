import './Like.css'
type LikeProps = {
  isLike?: boolean
}

const Like: React.FC<LikeProps> = ({isLike}) => {
  console.log('isLike: ', isLike)
  return (
    <div className={`like ${isLike ? 'like-isActive' : ''}`}></div>
  )
}

export default Like
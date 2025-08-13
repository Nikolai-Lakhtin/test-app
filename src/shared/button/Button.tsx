type ButtonProps = {
  text: string;
  color: string;
  width: string;
  height: string;
  onClick: ()=>void,
}


const Button: React.FC<Partial<ButtonProps>> = ({text,color='blue', width = '100px', height = '30px', onClick}) => {
  return (
    <button onClick={onClick} style={{color, width, height}}>{text ?? 'Кнопка'}</button>
  )
}

export default Button
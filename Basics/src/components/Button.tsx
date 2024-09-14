interface ButtonProp{
    children : string
    type ?: 'primary' | 'secondary' | 'danger'
    onClick : () => void;
}
const Button = ({children,type = 'primary',onClick} : ButtonProp) => {
  return (
    <button type = "button" className={"btn btn-"+ type} onClick={onClick}>{children}</button>
  )
}

export default Button
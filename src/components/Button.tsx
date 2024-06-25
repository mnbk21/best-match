
type ButtonProps = {
  text: string;
  buttonColor: string;
  handler?: () => void;
}

const Button = ({ handler, text, buttonColor }: ButtonProps) => {
  return (
    <a href="/contact">
      <button onClick={handler} style={{background: buttonColor}}>
        {text}
      </button>
    </a>
  )
}

export default Button
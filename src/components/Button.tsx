
type ButtonProps = {
  text: string;
  buttonColor: string;
}

const Button = ({ text, buttonColor }: ButtonProps) => {
  return (
    <a href="/contact">
      <button style={{background: buttonColor}}>
        {text}
      </button>
    </a>
  )
}

export default Button
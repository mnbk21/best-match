
type ButtonProps = {
  text: string | number;
  buttonColor: string;
  handler?: () => void;
  padding: [number, number, number, number];
  textColor?: "yellow" | "silver";
  borderRadius?: number;
}

const Button = ({ handler, text, buttonColor, textColor, borderRadius }: ButtonProps) => {
  
  return (
    <button onClick={handler} 
    className="register-Button"
      style={{
        background: buttonColor,
        color: textColor,
        borderRadius: borderRadius,
      }}>
      {text}
    </button>
  )
}

export default Button
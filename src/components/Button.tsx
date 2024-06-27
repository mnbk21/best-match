
type ButtonProps = {
  text: string | number;
  buttonColor: string;
  handler?: () => void;
  padding: [number, number, number, number];
  textColor?: "yellow" | "silver";
  borderRadius?: number;
}

const Button = ({ handler, text, buttonColor, padding, textColor, borderRadius }: ButtonProps) => {
  
  return (
    <button onClick={handler} 
    className="register-Button"
      style={{
        background: buttonColor,
        // padding: `
        //   ${padding[0]}px
        //   ${padding[1]}px
        //   ${padding[2]}px
        //   ${padding[3]}px
        // `,
        color: textColor,
        borderRadius: borderRadius,
      }}>
      {text}
    </button>
  )
}

export default Button
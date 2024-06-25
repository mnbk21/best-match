
type ButtonProps = {
  text: string;
  buttonColor: string;
  handler?: () => void;
  // padding: Array<number>;
  padding: [number, number, number, number];
  textColor?: "yellow" | "silver";
}

const Button = ({ handler, text, buttonColor, padding, textColor }: ButtonProps) => {
  return (
    <button onClick={handler} 
      style={{
        background: buttonColor,
        padding: `
          ${padding[0]}px
          ${padding[1]}px
          ${padding[2]}px
          ${padding[3]}px
        `,
        color: textColor,
      }}>
      {text}
    </button>
  )
}

export default Button
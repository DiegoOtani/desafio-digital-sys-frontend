import { ButtonProps } from "./types";

const Button = ({ text, onClick }: ButtonProps) => {
  return <button
    className=""
    onClick={onClick}
    type="button"
  >
    {text}
  </button>
};

export default Button;
import { ButtonProps } from "./types";

const Button = ({ text, onClick }: ButtonProps) => {
  return <button
    className="bg-blue-400 text-white font-bold px-4 py-1 rounded-lg border-2 border-black hover:bg-blue-600"
    onClick={onClick}
    type="button"
  >
    {text}
  </button>
};

export default Button;
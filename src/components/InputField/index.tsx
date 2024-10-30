import { InputFieldProps } from "./types";

const InputField = ({ onChange, placeholder, type, before: BeforeIcon, after: AfterIcon }: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return <div className="flex w-full justify-between gap-2 border-2 p-2 border-gray-400 rounded">
    {BeforeIcon && <BeforeIcon size={30}/>}
    <input 
      className="w-full"
      type={type} 
      placeholder={placeholder}
      onChange={handleChange}
    />
    {AfterIcon && <AfterIcon size={30}/>}
  </div>
};

export default InputField;
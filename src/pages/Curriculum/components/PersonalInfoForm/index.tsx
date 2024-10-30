import { useState } from "react"
import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";

function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
  });

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <form className="flex flex-col items-center p-20 gap-4 border-2 rounded border-black">
      <h2>Dados Pessoais</h2>
      <InputField 
        type="text" 
        onChange={handleInputChange("first_name")} 
        placeholder="Nome" 
        key='first_name' 
      />
      <InputField 
        type="text" 
        onChange={handleInputChange("last_name")} 
        placeholder="Sobrenome" 
        key='last_name' 
      />
      <InputField 
        type="date" 
        onChange={handleInputChange("birth_date")} 
        key='birth_date' 
      />
      <Button text="Submit" onClick={handleSubmit}/>
    </form>
  )
};

export default PersonalInfoForm;

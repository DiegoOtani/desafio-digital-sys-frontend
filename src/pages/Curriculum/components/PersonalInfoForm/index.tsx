import { useState } from "react"
import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import { createPersonalInfo } from "../../../../services/personalInfo";
import { toast } from "react-toastify";

interface Props {
  setProfileId: (id:number) => void
};

function PersonalInfoForm({ setProfileId }: Props) {
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

  const handleSubmit = async() => {
    const result = await createPersonalInfo(formData.first_name, formData.last_name, formData.birth_date)
    if(result.status && result.status >= 400) return toast.error("Dados inválidos.");
    setProfileId(result.id);
    toast.success("Dados pessoais cadastrados com sucesso.");
    setFormData({
      first_name: "",
      last_name: "",
      birth_date: ""
    })
  };

  return (
    <form className="flex flex-col items-center p-20 gap-4 border-2 rounded-xl border-black bg-white">
      <h2 className="font-bold text-xl">Dados Pessoais</h2>
      <InputField 
        type="text" 
        onChange={handleInputChange("first_name")} 
        value={formData.first_name}
        placeholder="Nome" 
        key='first_name' 
      />
      <InputField 
        type="text" 
        onChange={handleInputChange("last_name")} 
        value={formData.last_name}
        placeholder="Sobrenome" 
        key='last_name' 
      />
      <label>Data de Nascimento:</label>
      <InputField 
        type="date" 
        onChange={handleInputChange("birth_date")} 
        value={formData.birth_date}
        key='birth_date' 
      />
      <Button text="Enviar" onClick={handleSubmit}/>
    </form>
  )
};

export default PersonalInfoForm;

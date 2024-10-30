import PersonalInfoForm from "./components/PersonalInfoForm"
import { useState } from "react"
import Button from "../../components/Button"
import InputField from "../../components/InputField"

const Curriculum = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    position: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
    institution: "",
    course: "",
    course_start_date: "",
    course_end_date: "",
  });

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log(formData)
  };

  return <main className="p-40 flex flex-col gap-4">
    <PersonalInfoForm />
    <form className="flex flex-col items-center p-20 gap-4 border-2 rounded border-black">
      <h2>Contato</h2>
      <InputField 
        type="email"
        onChange={handleInputChange("email")}
        placeholder="Email"
        key="email"
      />
      <InputField 
        type="text"
        onChange={handleInputChange("phone")}
        placeholder="Telefone"
        key="phone"
      />
      <InputField 
        type="text"
        onChange={handleInputChange("address")}
        placeholder="Endereço"
        key="address"
      />
      <InputField 
        type="text"
        onChange={handleInputChange("linkedin")}
        placeholder="Linkedin"
        key="Linkedin"
      />
      <Button text="Enviar" onClick={handleSubmit}/>
    </form>
  </main>
}

export default Curriculum
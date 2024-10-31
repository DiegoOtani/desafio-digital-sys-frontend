import PersonalInfoForm from "./components/PersonalInfoForm"
import { useState } from "react"
import Button from "../../components/Button"
import InputField from "../../components/InputField"
import Title from "../../components/Title"
import { createAcademicTraining } from "../../services/academicTraining"
import { createContactInfo } from "../../services/contactInfo"
import { createWorkExperience } from "../../services/workExperience"

const Curriculum = () => {
  const [profileId, setProfileId] = useState<number>(0);
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

  const handleSubmit = async() => {
    const contactResponse = await createContactInfo(profileId, formData.email, formData.phone, formData.address, formData.linkedin)
    console.log(contactResponse)
    const workResponse = await createWorkExperience(profileId, formData.position, formData.company, formData.start_date, formData.end_date, formData.description);
    console.log(workResponse)
    const academicResponse = await createAcademicTraining(profileId, formData.institution, formData.course, formData.course_start_date, formData.course_end_date);
    console.log(academicResponse);
    console.log(profileId)
    console.log(formData)
  };

  return <main className="px-40 py-20 flex flex-col gap-4 bg-gray-400">
    <PersonalInfoForm setProfileId={setProfileId}/>
    <form className="flex flex-col items-center p-20 gap-4 border-2 rounded-xl border-black bg-white">
      <section className="w-full flex flex-col gap-4 items-center">
        <Title title="Contato" key="Contato"/>
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
      </section>
      <section className="w-full flex flex-col gap-4 items-center">
        <Title title="Experiência Profissional" key="Experiência Profissional"/>
        <InputField 
          type="text"
          onChange={handleInputChange("position")}
          placeholder="Cargo"
          key="position"
        />
        <InputField 
          type="text"
          onChange={handleInputChange("company")}
          placeholder="Company"
          key="company"
        />
        <InputField 
          type="text"
          onChange={handleInputChange("description")}
          placeholder="Description"
          key="description"
        />
        <section className="w-full flex gap-4">
          <div className="w-full">
            <label>Data de Início:</label>
            <InputField 
              type="date"
              onChange={handleInputChange("start_date")}
              key="start_date"
            />
          </div>
          <div className="w-full">
            <label>Data de Fim:</label>
            <InputField 
              type="date"
              onChange={handleInputChange("end_date")}
              key="end_date"
            />
          </div>
        </section>
      </section>
      <Title title="Formação Acadêmica" key="Formação Acadêmica"/>
      <InputField 
        type="text"
        onChange={handleInputChange("institution")}
        placeholder="Instituição"
        key="institution"
      />
      <InputField 
        type="text"
        onChange={handleInputChange("course")}
        placeholder="Curso"
        key="course"
      />
      <section className="w-full flex gap-4">
        <div className="w-full">
          <label>Data de Início:</label>
          <InputField 
            type="date"
            onChange={handleInputChange("course_start_date")}
            key="course_start_date"
          />
        </div>
        <div className="w-full">
          <label>Data de Fim:</label>
          <InputField 
            type="date"
            onChange={handleInputChange("course_end_date")}
            key="course_end_date"
          />
        </div>
      </section>
      <Button text="Enviar" onClick={handleSubmit}/>
    </form>
  </main>
}

export default Curriculum
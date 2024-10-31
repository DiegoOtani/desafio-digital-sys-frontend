import axios from "axios";
import { api } from "./api";

export const createContactInfo = async(personal_info:number, email: string, phone:string, address:string, linkedin:string) => {
  try {
    const response = await api.post('contact-info/', {personal_info, email, phone, address, linkedin})
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    };
    return null;
  };
};
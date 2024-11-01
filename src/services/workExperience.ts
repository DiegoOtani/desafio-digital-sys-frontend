import axios from "axios";
import { api } from "./api";

export const createWorkExperience = async(personal_info:number, position: string, company: string, start_date: string, end_date: string, description:string) => {
  try {
    const response = await api.post('work-experience/', { personal_info, position, company, start_date, end_date, description });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    return null
  }
};
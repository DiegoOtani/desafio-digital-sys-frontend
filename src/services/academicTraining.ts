import axios from "axios";
import { api } from "./api";

export const createAcademicTraining = async(personal_info: number, institution: string, course:string, start_date: string, end_date:string) => {
  try {
    const response = await api.post('academic-training/', { personal_info, institution, course, start_date, end_date });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    return null
  }
};
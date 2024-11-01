import axios from "axios";
import { api } from "./api";

export const createPersonalInfo = async(first_name: string, last_name:string, birth_date:string) => {
  try {
    const response = await api.post('personal-info/', { first_name, last_name, birth_date });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    return null
  }
};
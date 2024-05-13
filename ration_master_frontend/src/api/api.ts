import axios, { AxiosResponse } from "axios";
import { DailyMenu, UserCPFC } from "../models/UserInforamtion";

// Функция для выполнения запроса на сервер
export const calculateCPFC = async (
  age: number,
  weight: number,
  height: number,
  gender: string,
  physicalActivity: string
): Promise<{ data: UserCPFC | null; error: string | null }> => {
  try {
    // Формирование URL для запроса с учетом параметров
    const url = `http://localhost:8000/api/calculate_cpfc/${age}/${weight}/${height}/${gender}/${physicalActivity}`;
    
    // Отправка GET запроса на сервер
    const response: AxiosResponse<{ data: UserCPFC | null; error: string | null }> = await axios.get(url);
    
    // Возвращение полученных данных
    return response.data;
  } catch (error) {
    // В случае ошибки возвращаем сообщение об ошибке
    return { data: null, error: "Ошибка" };
  }
};


export const calculateRation = async (
  age: number,
  weight: number,
  height: number,
  gender: string,
  physicalActivity: string
): Promise<{ data: DailyMenu | null; error: string | null }> => {
  try {
    // Формирование URL для запроса с учетом параметров
    const url = `http://localhost:8000/api/calculate_ration/${age}/${weight}/${height}/${gender}/${physicalActivity}`;
    const response: AxiosResponse<{ data: DailyMenu | null; error: string | null }> = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

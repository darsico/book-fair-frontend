import axios from "axios";
import { config } from "../config";


const authApi = axios.create({
 baseURL: config.api,
 headers: {
  'Content-Type': 'application/json',
 },
});

// Path: /api/auth/new

export const userLogin = async (userData) => {
 try {
  const { data } = await authApi.post('/auth/login', userData);
  return data;
 } catch (error) {
  document.getElementById('error').innerHTML = error.response.data.message;
  console.log({
   message: error.response.data.message,
  });
 }
}

export const userRegister = async (userData) => {
 try {
  const { data } = await authApi.post('/auth/new', userData);
  return data;
 } catch (error) {
  document.getElementById('error').innerHTML = error.response.data.message;
  console.log({
   message: error.response.data.message,
  });
 }
}

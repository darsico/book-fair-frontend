import axios from 'axios';
import { config } from '../config';

const buyerApi = axios.create({
 baseURL: config.api,
 headers: {
  'Content-Type': 'application/json',
 },
});

export const getAllBooks = async () => {
 const { data } = await buyerApi.get('/sellers/books');
 return data;
}


export const createOrder = async (orderData) => {
 const token = localStorage.getItem('token');
 const { data } = await buyerApi.post('/buyer/order', orderData, {
  headers: {
   "x-access-token": `${token}`,
  }
 });
 return data;
}

export const getBuyerData = async (buyerId) => {
 const token = localStorage.getItem('token');
 const { data } = await buyerApi.get(`/buyer/${buyerId}`, {
  headers: {
   "x-access-token": `${token}`,
  }
 });
 return data;
}

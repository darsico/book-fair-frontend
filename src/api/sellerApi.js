import axios from 'axios';
import { config } from '../config';

const sellerApi = axios.create({
 baseURL: config.api,
 headers: {
  'Content-Type': 'application/json',
 },
});

export const getSellers = async () => {
 const { data } = await sellerApi.get('/sellers');
 return data;
}

export const getSellerById = async (sellerId) => {
 const token = localStorage.getItem('token');
 try {
  const { data } = await sellerApi.get(`/seller/${sellerId}`, {
   headers: {
    "x-access-token": `${token}`
   }
  });
  return data
 } catch (error) {
  console.log(error,
  );
 }
}

export const createSeller = async (sellerData) => {
 try {
  const { data } = await sellerApi.post('/auth/new', sellerData);
  return data;
 } catch (error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.response.data.message;
  console.log({
   message: error.response.data.message,
  });
 }
}

export const loginSeller = async (sellerData) => {
 try {
  const { data } = await sellerApi.post('/auth/login', sellerData);
  return data;
 } catch (error) {
  document.getElementById('error').innerHTML = error.response.data.message;
  console.log({
   message: error.response.data.message,
  });
 }
}

export const getSellerBooks = async (sellerId) => {
 const token = localStorage.getItem('token');
 try {
  const { data } = await sellerApi.get(`/seller/${sellerId}/books`, {
   headers: {
    "x-access-token": `${token}`
   }
  });
  return data
 } catch (error) {
  console.log(error);
 }
}

export const createBook = async (sellerId, bookData) => {
 console.log(bookData);
 const token = localStorage.getItem('token');
 try {
  const { data } = await sellerApi.post(`/seller/${sellerId}/books/new`, bookData, {
   headers: {
    "x-access-token": `${token}`
   }
  });
  return data;
 } catch (error) {
  console.log(error);
  console.log({
   message: error.response.data.message || "Error when creating book",
  });
  document.getElementById('error').innerHTML = error.response.data.message;

 }
}



export default sellerApi
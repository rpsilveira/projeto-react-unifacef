import { loadingOn, loadingOff } from '../components/loading';
import axios from 'axios';

axios.interceptors.request.use(async (config) => {
  loadingOn();
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use(async (response) => {
  loadingOff();
  return response;
}, (error) => {
  loadingOff();
  return Promise.reject(error);
});
import axios from 'axios';
import { toast } from 'react-toastify';
import useUserState from '@/store/UserStore'

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

Axios.interceptors.request.use(
    (config) => {
      const { token } = useUserState.getState();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    (response) => {
      // Success response handling
      if (response?.data?.message) {
        toast.success(response.data.message);
      }
      return response;
    },
    (error) => {
      // Error response handling
      const errorMessage =
        error.response?.data?.message || 'An unexpected error occurred';
      toast.error(errorMessage);
      return Promise.reject(error);
    }
  );
export default Axios;

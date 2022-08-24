import axios from 'axios';
import Config from 'react-native-config';

const baseURL = Config.API_URL || '';

const axiosInstance = axios.create({
  baseURL,
});

export { axiosInstance };

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com',
});

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (err) => Promise.reject(err));

instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (error) => Promise.reject(error));

export default instance;

import axios from 'axios';

export default axios.create({
  headers: {
    'x-apikey': '5fb50cd486395972883854e2',
  },
  baseURL: 'https://todos-8f0f.restdb.io/rest',
});
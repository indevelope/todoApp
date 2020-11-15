import axios from 'axios';

export default axios.create({
  headers: {
    'x-apikey': '5f8ec8ad2ed90b599de89365',
  },
  baseURL: 'https://todos-8f0f.restdb.io/rest',
});
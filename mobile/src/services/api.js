import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.223.26:3333',
});

export default api;
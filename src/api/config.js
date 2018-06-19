import axios from 'axios'
import {appEndpoint} from '../config';

const headers = {
    'Content-Type': 'application/json'
};

const api = axios.create({
    baseURL: appEndpoint,
    headers: headers
});

export const clearStore = () => {
    localStorage.clear();
    window.location.replace("/");
};

export const errorHandler = err => {
    if (err.status === 401) clearStore()
};

api.interceptors.response.use(response => {
    response.status = response.data.status;
    errorHandler(response);
    if (response.status > 399) {
        return Promise.reject(response);
    }
    return response;
}, error => {
    errorHandler(error);
    return Promise.reject(error.response);
});

export default api
import axios from 'axios';

axios.defaults.baseURL = "https://api.artic.edu/api/v1";

export const http = {
    get: axios.get,
};
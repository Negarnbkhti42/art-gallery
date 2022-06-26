import axios from 'axios';

axios.defaults.baseURL = "https://api.artic.edu/api/v1";

const http = {
    get: axios.get,
};

export default http;
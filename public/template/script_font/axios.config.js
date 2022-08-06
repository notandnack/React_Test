import axios from 'axios';
axios.defaults.baseURL = 'http://134.209.199.48/api/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default axios;
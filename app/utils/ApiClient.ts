import axios from 'axios';
// import 'dotenv/config';

const ApiClient = () => {
  const instance = axios.create();
  // console.log(process, 'sajdaskj');

  instance.interceptors.request.use(async request => {
    // request.baseURL = API_BASE_URL;

    request.baseURL = 'https://forsa-staging.bit68.com/api/v1/';
    request.validateStatus = status => status >= 200 && status < 300;

    return request;
  });

  return instance;
};

export default ApiClient();
